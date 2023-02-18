import { AppContextData, AppContext } from "@/store/AppContext";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import Header from "./Header";
import { findNetworkById } from "./SafeList/Networks";
import { useSafeFactory } from "@/hooks/useSafeFactory";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [visibleDisconnect, setVisibleDisconnect] = useState(false);
  const [visibleConnect, setVisibleConnect] = useState(false);
  const appCtx = useContext<AppContextData>(AppContext);
  let network = appCtx.network;

  useSafeFactory();

  useEffect(() => {
    const { ethereum } = window;
    const handleChangeAccount = (accounts: string) => {
      appCtx.setAccount(accounts[0]);
    };

    if (typeof window !== "undefined" && window?.ethereum) {
      network = findNetworkById(window.ethereum.networkVersion);
      appCtx.setIsEthereum(true);
    }

    appCtx.setNetwork(network);
    appCtx.setAccount(sessionStorage.getItem("login"));

    if (ethereum != null) {
      ethereum.on("accountsChanged", handleChangeAccount);
      ethereum.on("chainChanged", () => window.location.reload());

      return () => {
        ethereum.removeListener(
          "accountsChanged",
          handleDisconnectMetamaskClick
        );
        ethereum.removeListener("chainChanged", handleDisconnectMetamaskClick);
      };
    }
  }, [visibleDisconnect, visibleConnect]);

  const handleConnectMetamaskClick = async () => {
    const { ethereum } = window;
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      // const chainId = await ethereum.request({
      //   method: "eth_chainId",
      // });
      // if (chainId !== "0x5") {
      //   await ethereum.request({
      //     method: "wallet_switchEthereumChain",
      //     params: [
      //       {
      //         chainId: process.env.targetChainId,
      //       },
      //     ],
      //   });
      // }
      sessionStorage.setItem("login", accounts[0]);
      appCtx.setAccount(accounts[0]);
      setVisibleConnect(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDisconnectMetamaskClick = async () => {
    sessionStorage.removeItem("login");
    setVisibleDisconnect(false);
  };

  return (
    <>
      <Head>
        <title>Untitled Gnosis</title>
        <meta name="description" content="Untitled Gnosis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        handleDisconnectMetamaskClick={handleDisconnectMetamaskClick}
        handleConnectMetamaskClick={handleConnectMetamaskClick}
        account={appCtx.account}
        visibleConnect={visibleConnect}
        setVisibleDisconnect={setVisibleDisconnect}
        setVisibleConnect={setVisibleConnect}
        network={appCtx.network.name}
      />
      {children}
    </>
  );
};

export default Layout;
