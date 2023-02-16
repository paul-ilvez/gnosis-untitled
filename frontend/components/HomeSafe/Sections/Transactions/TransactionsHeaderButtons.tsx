import { Button, Text } from "@nextui-org/react";
import React, { useContext } from "react";
import { AppContext, AppContextData } from "@/store/AppContext";

export default function TransactionsHeaderButtons({ type }: { type: string }) {
  const appCntxt = useContext<AppContextData>(AppContext);

  return (
    <>
      <Button
        animated={false}
        size={"xs"}
        css={{ backgroundColor: "transparent" }}
        onClick={() => appCntxt.setTransactionsSectionHandler({ type })}
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
          {type}
        </Text>
      </Button>
    </>
  );
}
