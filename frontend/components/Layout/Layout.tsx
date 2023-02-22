import Head from "next/head";
import { useState } from "react";
import Header from "../Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [visibleDisconnect, setVisibleDisconnect] = useState(false);
  const [visibleConnect, setVisibleConnect] = useState(false);

  return (
    <>
      <Head>
        <title>Untitled Gnosis</title>
        <meta name="description" content="Untitled Gnosis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        setVisibleDisconnect={setVisibleDisconnect}
        setVisibleConnect={setVisibleConnect}
      />
      {children}
    </>
  );
};

export default Layout;
