import Layout from "@/components/Layout";
import { Inter } from "@next/font/google";
import { Grid, Spacer } from "@nextui-org/react";
import HomeSafeMenu from "@/components/HomeSafe/HomeSafeMenu";
import Transactions from "@/components/HomeSafe/Sections/Transactions/Transactions";
import Setup from "@/components/HomeSafe/Sections/Setup";
import Assets from "@/components/HomeSafe/Sections/Assets";
import { AppContext, AppContextData } from "@/store/AppContext";
import { useContext } from "react";

export default function HomeSafe() {
  const { currentMenuSection } = useContext<AppContextData>(AppContext);

  const sectionsMap: { [key: string]: JSX.Element } = {
    Transactions: <Transactions />,
    Setup: <Setup />,
    Assets: <Assets />,
  };
  return (
    <Layout>
      <Grid.Container css={{ mt: "40px" }} justify="center" alignItems="center">
        <Grid xs={5} md={5} alignItems="center" justify="flex-end">
          <HomeSafeMenu />
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
