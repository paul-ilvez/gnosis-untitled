import { Button, Text, Tooltip } from "@nextui-org/react";

export default function SendNFTButton({ handler }) {
  return (
      <Button
        onPress={handler}
        disabled={true}
        rounded
        css={{
          background: "#000",
          color: "#000",
          width: "300px",
          maxWidth: "260px",
        }}
        auto
      >
        <Text css={{ letterSpacing: "$wide" }} color="block" weight={"normal"}>
          Send NFT (Soon)
        </Text>
      </Button>
  );
}
