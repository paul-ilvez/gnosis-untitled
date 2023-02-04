import {Button, Avatar, Image, Text, Spacer} from "@nextui-org/react";

const ButtonDisconnectMetamask = ({ handleClickDisconnect, account }) => {

    return(
            <Button size='lg' color={"889096"} onClick={handleClickDisconnect}>
                <Avatar color="secondary" textColor="white" text="Bob" size="sm" />
                <div>
                    {/*<Text*/}
                    {/*    size="$xs"*/}
                    {/*    css={{color: "#868686",}}*/}
                    {/*>*/}
                    {/*    Metamask // Goerli*/}
                    {/*</Text>*/}
                    <Text size="$md" b>
                        &nbsp; {"gor:" + account.toString().slice(0, 5) +
                        "..." +
                        account.toString().slice(38)}
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
    );
}

export default ButtonDisconnectMetamask;