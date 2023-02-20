import React, { useState } from "react";
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

const Header = ({
  handleDisconnectMetamaskClick,
  handleConnectMetamaskClick,
  account,
  visibleConnect,
  setVisibleConnect,
  setVisibleDisconnect,
  network,
}: {
  handleDisconnectMetamaskClick: () => void;
  handleConnectMetamaskClick: () => void;
  account: string | null;
  visibleConnect: boolean;
  setVisibleConnect: (visibleConnect: boolean) => void;
  setVisibleDisconnect: (visibleDisconnect: boolean) => void;
  network: string;
}) => {
  const [variant, setVariant] = useState("static");
  const variants = ["static", "floating", "sticky"];

  const handelModalConnect = () => {
    setVisibleConnect(true);
  };

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
              <Navbar.Brand>
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
                {account ? (
                  <Popover>
                    <Popover.Trigger>
                      <Button
                        size="lg"
                        color="gray"
                        onPress={handlerModalDisconnect}
                      >
                        <Avatar
                          color="secondary"
                          textColor="white"
                          text="Bob"
                          size="sm"
                        />
                        <div>
                          <Text size="$md" b>
                            &nbsp;{" "}
                            {"gor:" +
                              account?.toString().slice(0, 5) +
                              "..." +
                              account?.toString().slice(38)}
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
                        account={account}
                        handleDisconnectMetamaskClick={
                          handleDisconnectMetamaskClick
                        }
                        networkName={network}
                      />
                    </Popover.Content>
                  </Popover>
                ) : (
                  <Button
                    size="lg"
                    icon={lockIcon}
                    flat
                    color="gray"
                    onPress={handelModalConnect}
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
        visible={visibleConnect}
        handleConnectMetamaskClick={handleConnectMetamaskClick}
        closeHandler={handleCloseModalConnect}
      />
    </>
  );
};

export default Header;
