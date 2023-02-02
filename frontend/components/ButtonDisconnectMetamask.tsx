import { Button } from "@nextui-org/react";

const ButtonDisconnectMetamask = ({ handleClickDisconnect, account }) => {
    return(
        <div>
            <Button color={"success"} onClick={handleClickDisconnect}><span className="text-sm md:text-base">
                      {account.toString().slice(0, 5) +
                        "..." +
                        account.toString().slice(38) +
                        " Logout"}
                    </span></Button>
        </div>
    );
}

export default ButtonDisconnectMetamask;