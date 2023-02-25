import { Button, Text } from "@nextui-org/react";
import React, { useContext } from "react";
import { AppContext } from "@/store/AppContext";

export default function AssetsHeaderButtons({ type }: { type: string }) {
  const { setAssetsSectionHandler, assetsSection } = useContext(AppContext);
  const isActive = assetsSection.type === type;

  return (
    <>
      <Button
        animated={false}
        size={"xs"}
        css={{ backgroundColor: isActive ? "#e8e8e8" : "transparent" }}
        onClick={() => setAssetsSectionHandler({ type })}
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
