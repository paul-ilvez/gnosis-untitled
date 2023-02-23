import { useRouter } from "next/router";

import Layout from "@/components/Layout/Layout";
import { Grid, Spacer } from "@nextui-org/react";
import HomeSafeMenu from "@/components/HomeSafe/HomeSafeMenu";
import Transactions from "@/components/HomeSafe/Sections/Transactions/Transactions";
import Setup from "@/components/HomeSafe/Sections/Setup";
import Assets from "@/components/HomeSafe/Sections/Assets";
import { AppContext } from "@/store/AppContext";
import { useContext, useEffect, useState } from "react";
import { Contract } from "ethers";
import { GnosisUntitledAbi } from "@/abi/GnosisUntitled";

export default function SafeDetails() {
  const { currentMenuSection, currentSafe, setCurrentSafe, connected, signer } =
    useContext(AppContext);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [txs, setTxs] = useState<GnosisTransaction[]>([]);
  const [quorum, setQuorum] = useState<number>([]);
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
        const tempContract = new Contract(
          contractAddress,
          GnosisUntitledAbi,
          signer
        ) as unknown as GnosisUntitled;

        setCurrentSafe(tempContract);
        setQuorum(Number(await tempContract.quorum()));
        const txCount = Number(
          (await tempContract.getTransactionCount()) as BigInt
        );
        const tempTxs: GnosisTransaction[] = [];

        for (let i = 0; i < txCount; i++) {
          const tx = await tempContract.getTransaction(BigInt(i));
          const newTx: GnosisTransaction = {
            id: i,
            to: tx[0],
            value: tx[1],
            data: tx[2],
            executed: tx[3],
            numConfirmations: tx[4],
            type: Number(tx[5]),
            date: new Date(Number(tx[6]) * 1000),
          };
          tempTxs.push(newTx);
        }
        setTxs(tempTxs);
      } catch (e) {
        setErrorMessage("Unknown error");
        console.error(e);
      }
    })();
  }, [query, connected, signer]);

  const sectionsMap: { [key: string]: JSX.Element } = {
    Transactions: <Transactions quorum={quorum} txs={txs} />,
    Setup: <Setup />,
    Assets: <Assets />,
  };

  return (
    <Layout>
      <Grid.Container
        css={{ mt: "40px" }}
        justify="center"
        alignItems="flex-start"
      >
        <Grid xs={5} md={5} alignItems="center" justify="flex-end">
          <HomeSafeMenu />
        </Grid>
        <Spacer x={1.85} />
        <Grid xs={5} md={5} direction="column" justify="center">
          {sectionsMap[currentMenuSection.title]}
        </Grid>
      </Grid.Container>
    </Layout>
  );
}
