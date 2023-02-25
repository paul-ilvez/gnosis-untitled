import { Button, Text } from "@nextui-org/react";

const ButtonDisconnectMetamask = ({ handleClickDisconnect }) => {
  return (
    <Button size="lg" color="error" onPress={handleClickDisconnect}>
      <div>
        <Text color="white" size="$md" b>
          Disconnect
        </Text>
      </div>
    </Button>
  );
};

export default ButtonDisconnectMetamask;
