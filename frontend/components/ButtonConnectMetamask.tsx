import { Button, Text } from "@nextui-org/react";
import React from "react";

const ButtonConnectMetamask = ({ handleClickConnect }) => {
  return (
    <Button size="lg" flat color={"#000"} onClick={handleClickConnect}>
      <Text color="error">Connect Metamask</Text>
    </Button>
  );
};

export default ButtonConnectMetamask;
