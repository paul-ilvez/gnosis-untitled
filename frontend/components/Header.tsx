import React, { useEffect, useState } from "react";
import {
  Navbar,
  Button,
  Link,
  Text,
  Card,
  Radio,
  Image,
  Grid,
} from "@nextui-org/react";
import ButtonConnectMetamask from "./ButtonConnectMetamask";
import ButtonDisconnectMetamask from "./ButtonDisconnectMetamask";

const Header = ({
  handleDisconnectMetamaskClick,
  handleConnectMetamaskClick,
  account,
}) => {
  const [variant, setVariant] = React.useState("static");
  const variants = ["static", "floating", "sticky"];
  console.log(account);

  return (
    <Navbar maxWidth="lg" isBordered variant={variant}>
      <Grid.Container justify="center">
        <Grid xs>
          <Navbar.Brand>
            <Image width={85} height={50} src="/logo.svg" alt="logo" />
          </Navbar.Brand>
        </Grid>

        <Grid xs justify="center">
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
        </Grid>

        <Grid xs justify="flex-end">
          <Navbar.Content>
            <Image width={24} height={24} src="/ring.svg" alt="ring" />
            <Navbar.Item>
              {account ? (
                <ButtonDisconnectMetamask
                  handleClickDisconnect={handleDisconnectMetamaskClick}
                  account={account}
                />
              ) : (
                <ButtonConnectMetamask
                  handleClickConnect={handleConnectMetamaskClick}
                />
              )}
            </Navbar.Item>
          </Navbar.Content>
        </Grid>
      </Grid.Container>
    </Navbar>
  );
};

export default Header;
