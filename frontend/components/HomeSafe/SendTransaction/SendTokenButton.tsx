import { Button, Text } from "@nextui-org/react";

export default function SendTokenButton({ handler }) {
  return (
    <Button
    onPress={handler}
      rounded
      css={{
        background: "#000",
        color: "#fff",
        width: "300px",
        maxWidth: "260px",
      }}
      auto
    >
      <Text css={{ letterSpacing: "$wide" }} color="white" weight={"normal"}>
        Send Token
      </Text>
    </Button>
  );
}
