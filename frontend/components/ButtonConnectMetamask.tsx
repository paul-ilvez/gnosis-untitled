import { Button } from "@nextui-org/react";

const ButtonConnectMetamask = ({ handleClickConnect }) => {
    return(
        <div>
            <Button color={"success"} onClick={handleClickConnect}>Connect Wallet</Button>
        </div>
    );
}

export default ButtonConnectMetamask;