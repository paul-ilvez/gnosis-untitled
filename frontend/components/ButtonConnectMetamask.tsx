import {Button, Image, Text} from "@nextui-org/react";
import React from "react";

const ButtonConnectMetamask = ({ handleClickConnect }) => {

    const lockIcon = (
        <Image
            width={85}
            height={50}
            src="/wallet.svg"
            alt="wallet"
        />
    )

    return (<Button size='lg' icon={lockIcon} flat color={"#889096"} onClick={handleClickConnect}>
        <Text color='error'>
            Connect Wallet
        </Text>
    </Button>);
}

export default ButtonConnectMetamask;