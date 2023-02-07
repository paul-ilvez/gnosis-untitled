import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "./Header";
import { Container, Row } from "@nextui-org/react";

const Layout = ({ children }) => {
    const [currentAccount, setAccount] = useState();
    const [visibleDisconnect, setVisibleDisconnect] = useState(false);
    const [visibleConnect, setVisibleConnect] = useState(false);

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
    }, [visibleDisconnect, visibleConnect]);

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
                <title>Untitle Gnosis</title>
                <meta name="description" content="Untitle Gnosis" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header
                handleDisconnectMetamaskClick={handleDisconnectMetamaskClick}
                handleConnectMetamaskClick={handleConnectMetamaskClick}
                account={currentAccount}
                visibleConnect={visibleConnect}
                visibleDisconnect={visibleDisconnect}
                setVisibleDisconnect={setVisibleDisconnect}
                setVisibleConnect={setVisibleConnect}
            />
            <Container>
                <Row justify={"center"}>{children}</Row>
            </Container>
        </>
    );
};

export default Layout;