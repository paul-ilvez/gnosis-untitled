import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "./Header";

const Layout = ({ children }) => {
    const [currentAccount, setAccount] = useState();
    const [isConnect, setConnect] = useState();


    useEffect(() => {
        const { ethereum } = window;
        setAccount(sessionStorage.getItem("login"));
    
        if (ethereum) {
          ethereum.on("accountsChanged", handleConnectMetamaskClick);
          ethereum.on("chainChanged", handleDisconnectMetamaskClick);
          return () => {
            ethereum.removeListener(
              "accountsChanged",
              handleDisconnectMetamaskClick
            );
            ethereum.removeListener("chainChanged", handleDisconnectMetamaskClick);
          };
        }
    
      }, [isConnect]);
    
      const handleConnectMetamaskClick = async () => {
        const { ethereum } = window;
        try {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          const chainId = await ethereum.request({
            method: "eth_chainId",
          });
          if (chainId !== "0x5") {
            await ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [
                {
                  chainId: process.env.targetChainId,
                },
              ],
            });
          }
          sessionStorage.setItem("login", accounts[0]);
          setAccount(accounts[0]);
          setConnect(true);
        } catch (error) {
          console.error(error);
        }
      };
    
      const handleDisconnectMetamaskClick = async () => {
          sessionStorage.removeItem("login");
          setConnect(false);
      };

  return (
    <>
      <Head>
        <title>Untitle Gnosis</title>
        <meta name="description" content="Untitle Gnosis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header handleDisconnectMetamaskClick={handleDisconnectMetamaskClick} handleConnectMetamaskClick={handleConnectMetamaskClick} account={currentAccount}  />
      <div className="w-full m-auto items-center max-w-[1440px] px-6 ">
        {children}
      </div>
    </>
  );
};

export default Layout;
