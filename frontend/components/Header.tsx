import React, { useState } from "react";
import {
  Navbar,
  Button,
  Popover,
  Text,
  Avatar,
  Image,
  Spacer,
} from "@nextui-org/react";
import NoticePopUp from "./NoticePopUp";
import ModalDisconnect from "./ModalDisconnect";
import ModalConnect from "./ModalConnect";

const Header = ({
  handleDisconnectMetamaskClick,
  handleConnectMetamaskClick,
  account,
  visibleConnect,
  setVisibleConnect,
  setVisibleDisconnect,
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
      <Navbar maxWidth="lg" isBordered variant="static">
        <Navbar.Brand>
          <Image width={85} height={50} src="/logo.svg" alt="logo" />
        </Navbar.Brand>
        <Navbar.Content css={{ cursor: "pointer" }} hideIn="xs">
          <Button size="sm" shadow color="primary" auto rounded>
            Goerli
          </Button>
          <Image
            width={18}
            height={18}
            src="/chevron_down.svg"
            alt="Chevron Down"
          />
        </Navbar.Content>
        <Navbar.Content>
        <NoticePopUp />
          <Navbar.Item>
            {account ? (
              <Popover>
                <Popover.Trigger>
                  <Button
                    size="lg"
                    color="gray"
                    onClick={handlerModalDisconnect}
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
                  />
                </Popover.Content>
              </Popover>
            ) : (
              <Button
                size="lg"
                icon={lockIcon}
                flat
                color="gray"
                onClick={handelModalConnect}
              >
                <Text color="error">Connect Wallet</Text>
              </Button>
            )}
          </Navbar.Item>
        </Navbar.Content>
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
