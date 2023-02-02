import React, { useEffect, useState } from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import ButtonConnectMetamask from "./ButtonConnectMetamask";
import ButtonDisconnectMetamask from "./ButtonDisconnectMetamask";

const Header = ({ handleDisconnectMetamaskClick, handleConnectMetamaskClick, account }) => {
  const [variant, setVariant] = React.useState("static");
  const variants = ["static", "floating", "sticky"];
  console.log(account);

    return (
          <Navbar isBordered variant={variant}>
            <Navbar.Brand>
              <Text b color="inherit" hideIn="xs">
                ACME
              </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs">
              <Navbar.Link href="#">Features</Navbar.Link>
              <Navbar.Link isActive href="#">Customers</Navbar.Link>
              <Navbar.Link href="#">Pricing</Navbar.Link>
              <Navbar.Link href="#">Company</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
              <Navbar.Link color="inherit" href="#">
                Login
              </Navbar.Link>
              <Navbar.Item>
                {account ? <ButtonDisconnectMetamask handleClickDisconnect={handleDisconnectMetamaskClick} account={account} /> : <ButtonConnectMetamask handleClickConnect={handleConnectMetamaskClick} />}
              </Navbar.Item>
            </Navbar.Content>
          </Navbar>
      )
    }


export default Header;