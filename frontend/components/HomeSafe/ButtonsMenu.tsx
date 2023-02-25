import { Button, Image, Text } from "@nextui-org/react";
import React, { useContext } from "react";
import { AppContext, AppContextData } from "@/store/AppContext";
export default function ButtonsMenu({
  title,
  icon,
}: {
  title: string;
  icon: string;
}) {
  const appCntx = useContext<AppContextData>(AppContext);

  return (
    <Button
      css={{
        color: "$black",
        borderColor: "$gray400",
        mw: "182px",
        "&:hover": {
          backgroundColor: "$gray100",
        },
      }}
      bordered
      rounded
      borderWeight="light"
      onPress={() => appCntx.setCurrentMenuSectionHandler({ title })}
    >
      <Image src={icon} alt="" css={{ marginRight: "$5" }} />
      <Text size={"14px"} css={{ letterSpacing: "$tight" }} weight={"medium"}>
        {title}
      </Text>
    </Button>
  );
}
