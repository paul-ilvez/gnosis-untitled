import { Button, Avatar, Image, Text, Spacer } from "@nextui-org/react";

const ButtonDisconnectMetamask = ({ handleClickDisconnect }) => {
  return (
    <Button size="lg" color="error" onClick={handleClickDisconnect}>
      <div>
        <Text color="white" size="$md" b>
          Disconnect
        </Text>
      </div>
    </Button>
  );
};

export default ButtonDisconnectMetamask;
