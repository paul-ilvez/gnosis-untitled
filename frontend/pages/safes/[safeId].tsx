import { useRouter } from "next/router";

import Layout from "@/components/Layout/Layout";
import { Card, Grid, Loading, Spacer } from "@nextui-org/react";
import HomeSafeMenu from "@/components/HomeSafe/HomeSafeMenu";
import Transactions from "@/components/HomeSafe/Sections/Transactions/Transactions";
import Setup from "@/components/HomeSafe/Sections/Setup";
import Assets from "@/components/HomeSafe/Sections/Assets";
import { AppContext } from "@/store/AppContext";
import { useContext, useEffect, useState } from "react";
import { AbstractSigner, Contract } from "ethers";
import { GnosisUntitledAbi } from "@/abi/GnosisUntitled";
import ErrorModal from "@/components/ErrorModal/ErrorModalUnclose";

export default function SafeDetails() {
  const {
    account,
    currentMenuSection,
    currentSafe,
    setCurrentSafe,
    connected,
    signer,
  } = useContext(AppContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [signers, setSigners] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errorVisible, setErrorVisible] = useState<boolean>(false);
  const [txs, setTxs] = useState<GnosisTransaction[]>([]);
  const [history, setHistory] = useState<GnosisTransaction[]>([]);
  const [quorum, setQuorum] = useState<number>();
  const { query } = useRouter();

  useEffect(() => {
    if (!connected) {
      setErrorMessage("Blockchain Wallet is not connected");
      return;
    }

    const contractAddress = query["safeId"] as string;

    if (
      contractAddress?.length != 42 ||
      contractAddress.substring(0, 2) != "0x"
    ) {
      setErrorMessage("Incorrect address");
      return;
    }

    (async () => {
      if (signer == null) {
        return;
      }

      try {
        setLoading(true);
        const tempContract = new Contract(
          contractAddress,
          GnosisUntitledAbi,
          signer
        ) as unknown as GnosisUntitled;

        const signerCount = Number(await tempContract.getSignerCount());
        const tempSigners: string[] = [];
        for (let i = 0; i < signerCount; i++) {
          const signer = await tempContract.getSigner(BigInt(i));
          tempSigners.push(signer);
        }
        setSigners(tempSigners);
        setCurrentSafe(tempContract);
        setQuorum(Number(await tempContract.quorum()));
        const txCount = Number(
          (await tempContract.getTransactionCount()) as BigInt
        );
        const tempTxs: GnosisTransaction[] = [];
        const tempHistory: any[] = [];

        for (let i = 0; i < txCount; i++) {
          const tx = await tempContract.getTransaction(BigInt(i));
          const isConfirmedByUser = await tempContract.isConfirmed(
            BigInt(i),
            account
          );
          const newTx: GnosisTransaction = {
            id: i,
            to: tx[0],
            value: tx[1],
            data: tx[2],
            executed: tx[3],
            numConfirmations: tx[4],
            type: Number(tx[5]),
            date: new Date(Number(tx[6]) * 1000),
            isConfirmedByUser,
          };
          if (!newTx.executed) {
            tempTxs.push(newTx);
            continue;
          }
        }

        const filter = tempContract.filters.ExecuteTransaction();
        const events = await tempContract.queryFilter(filter);

        for (let i = 0; i < events.length; i++) {
          const txI = events[0].args[1];

          const tx = await tempContract.getTransaction(txI);
          const newTx: GnosisTransaction = {
            id: i,
            to: tx[0],
            value: tx[1],
            data: tx[2],
            executed: tx[3],
            numConfirmations: tx[4],
            type: Number(tx[5]),
            date: new Date(Number(tx[6]) * 1000),
            isConfirmedByUser: true,
            txHash: events[0].transactionHash,
            safeHash: events[0].blockHash,
          };

          tempHistory.push(newTx);
        }
        setTxs(tempTxs);
        setHistory(tempHistory);
        setLoading(false);
      } catch (e) {
        setErrorMessage("Uncorrect safe data. Try change need network.");
        setErrorVisible(true);
        setLoading(false);
        console.error(e);
      }
    })();
  }, [query, connected, signer]);

  const sectionsMap: { [key: string]: JSX.Element } = {
    Transactions: (
      <Transactions quorum={quorum ?? 1} txs={txs} history={history} />
    ),
    Setup: <Setup signers={signers} />,
    Assets: <Assets />,
  };

  const loaderComponent = (
    <Card
      variant="bordered"
      css={{
        minHeight: "499px",
        mw: "720px",
        borderRadius: "39px",
        dflex: "flex",
        jc: "center",
        alignItems: "center",
      }}
    >
      <Loading size="md" />
    </Card>
  );

  return (
    <Layout>
      <Grid.Container css={{ mt: "40px" }} alignItems="flex-start">
        <Grid xs={5} md={5} alignItems="center" justify="flex-end">
          <HomeSafeMenu />
        </Grid>
        <Spacer x={0.5} />
        <Grid xs={5} md={5} direction="column" justify="center">
          {loading ? loaderComponent : sectionsMap[currentMenuSection.title]}
        </Grid>
      </Grid.Container>
      {errorVisible && <ErrorModal errorMessage={errorMessage} />}
    </Layout>
  );
}
