import { Button, Text } from "@nextui-org/react";

export default function TransactionsHeaderButtons() {
  return (
    <>
      <Button
        animated={false}
        size={"xs"}
        css={{ backgroundColor: "transparent" }}
      >
        <Text
          weight={"normal"}
          size={16}
          color="black"
          css={{
            textUnderlineOffset: "3.5px",
            "&:hover": {
              textDecoration: "black",
              textDecorationLine: "underline",
            },
            "&:active": {
              textDecorationLine: "none",
            },
          }}
        >
          Queue
        </Text>
      </Button>
      <Button
        size={"xs"}
        animated={false}
        css={{ backgroundColor: "transparent" }}
      >
        <Text
          weight={"normal"}
          size={16}
          color="black"
          css={{
            textUnderlineOffset: "3.5px",
            "&:hover": {
              textDecoration: "black",
              textDecorationLine: "underline",
            },
            "&:active": {
              textDecorationLine: "none",
            },
          }}
        >
          History
        </Text>
      </Button>
    </>
  );
}
