import React, { useContext, useState } from "react";
import {
  Navbar,
  Button,
  Popover,
  Text,
  Avatar,
  Image,
  Spacer,
  Grid,
} from "@nextui-org/react";
import NoticePopUp from "../NoticeHeader/NoticePopUp";
import ModalDisconnect from "../ModalConnect/ModalDisconnect";
import ModalConnect from "../ModalConnect/ModalConnect";
import Link from "next/link";
import NetworkDropdown from "@/components/NetworkDropdown/NetworkDropdown";
import { AppContext } from "@/store/AppContext";
import { jsNumberForAddress } from "react-jazzicon";
import Jazzicon from "react-jazzicon/dist/Jazzicon";

const Header = ({
  setVisibleConnect,
  setVisibleDisconnect,
}: {
  setVisibleConnect: (visibleConnect: boolean) => void;
  setVisibleDisconnect: (visibleDisconnect: boolean) => void;
}) => {
  const [variant, setVariant] = useState("static");
  const variants = ["static", "floating", "sticky"];
  const appCtx = useContext(AppContext);
  const {
    handleConnectMetamaskClick,
    isEthereum,
    handleDisconnectMetamask,
    logoClickedCounter,
    incrementLogoClickedCounter,
  } = appCtx;

  const handleCloseModalConnect = () => {
    setVisibleConnect(false);
  };

  const handlerModalDisconnect = () => {
    setVisibleDisconnect(true);
  };

  const lockIcon = (
    <Image width={85} height={50} src="/wallet.svg" alt="wallet" />
  );

  return (
    <>
      <Navbar maxWidth="lg" variant="static">
        <Grid.Container justify={"space-between"}>
          <Grid xs={4}>
            <Link href="/">
              <Navbar.Brand
                onClick={() => {
                  incrementLogoClickedCounter();
                }}
              >
                <Image width={85} height={50} src="/logo.svg" alt="logo" />
              </Navbar.Brand>
            </Link>
          </Grid>

          <Grid justify={"center"} xs={4}>
            <Navbar.Content css={{ cursor: "pointer" }} hideIn="xs">
              <NetworkDropdown />
            </Navbar.Content>
          </Grid>

          <Grid justify={"flex-end"} xs={4}>
            <Navbar.Content>
              <NoticePopUp />
              <Navbar.Item>
                {appCtx.connected ? (
                  <Popover>
                    <Popover.Trigger>
                      <Button
                        size="lg"
                        color="gray"
                        onPress={handlerModalDisconnect}
                      >
                      <Jazzicon diameter={30}   seed={jsNumberForAddress(appCtx.account)} /> 
                        <div>
                          <Text size="$md" b>
                            &nbsp;{" "}
                            {appCtx.account?.toString().slice(0, 5) +
                              "..." +
                              appCtx.account?.toString().slice(38)}
                          </Text>
                        </div>
                        <Spacer />
                        <Image
                          width={18}
                          height={18}
                          src="/chevron_down.svg"
                          alt="Chevron Down"
                        />
                      </Button>
                    </Popover.Trigger>
                    <Popover.Content>
                      <ModalDisconnect
                        account={appCtx.account}
                        handleDisconnectMetamaskClick={handleDisconnectMetamask}
                        networkName={appCtx.network.name}
                      />
                    </Popover.Content>
                  </Popover>
                ) : (
                  <Button
                    size="lg"
                    icon={lockIcon}
                    flat
                    color="gray"
                    onPress={handleConnectMetamaskClick}
                  >
                    <Text color="error">Connect Wallet</Text>
                  </Button>
                )}
              </Navbar.Item>
            </Navbar.Content>
          </Grid>
        </Grid.Container>
      </Navbar>
      <ModalConnect
        visible={false} //TODO change this
        handleConnectMetamaskClick={handleConnectMetamaskClick}
        closeHandler={handleCloseModalConnect}
      />
    </>
  );
};

export default Header;
