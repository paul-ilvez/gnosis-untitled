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
  const { currentMenuSection } = useContext(AppContext);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [safeContract, setSafeContract] = useState<Contract>();
  const { query } = useRouter();
  const { connected, signer } = useContext(AppContext);

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
      try {
        const tempContract = new Contract(
          contractAddress,
          GnosisUntitledAbi,
          signer
        );

        setSafeContract(tempContract);
      } catch (e) {
        setErrorMessage("Unknown error");
      }
    })();
  }, [query, connected, signer]);

  const sectionsMap: { [key: string]: JSX.Element } = {
    Transactions: <Transactions />,
    Setup: <Setup />,
    Assets: <Assets />,
  };
  return (
    <Layout>
      <Grid.Container css={{ mt: "40px" }} justify="center" alignItems="center">
        <Grid xs={5} md={5} alignItems="center" justify="flex-end">
          <HomeSafeMenu safeContract={safeContract} />
        </Grid>
        <Spacer x={1.85} />
        <Grid
          xs={5}
          md={5}
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          {sectionsMap[currentMenuSection.title]}
        </Grid>
      </Grid.Container>
    </Layout>
  );
}
