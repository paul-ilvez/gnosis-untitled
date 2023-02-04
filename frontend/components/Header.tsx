import React, { useEffect, useState } from "react";
import { Navbar, Button, Link, Text, Card, Radio, Image  } from "@nextui-org/react";
import ButtonConnectMetamask from "./ButtonConnectMetamask";
import ButtonDisconnectMetamask from "./ButtonDisconnectMetamask";

const Header = ({ handleDisconnectMetamaskClick, handleConnectMetamaskClick, account }) => {
  const [variant, setVariant] = React.useState("static");
  const variants = ["static", "floating", "sticky"];
  console.log(account);



    return (
          <Navbar maxWidth='lg' isBordered variant={variant}>
            <Navbar.Brand>
                <Image
                    width={85}
                    height={50}
                    src="/logo.svg"
                    alt="logo"
                />
            </Navbar.Brand>
            <Navbar.Content  css={{ cursor: 'pointer' }} hideIn="xs">
                <Button size='sm' shadow color="primary" auto rounded>
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
                <Image
                    width={24}
                    height={24}
                    src="/ring.svg"
                    alt="ring"
                />
              <Navbar.Item>
                {account ? <ButtonDisconnectMetamask handleClickDisconnect={handleDisconnectMetamaskClick} account={account} /> : <ButtonConnectMetamask handleClickConnect={handleConnectMetamaskClick} />}
              </Navbar.Item>
            </Navbar.Content>
          </Navbar>
      )
    }


export default Header;