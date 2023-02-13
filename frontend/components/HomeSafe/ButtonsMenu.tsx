import { Button, Image, Text } from "@nextui-org/react";

export default function ButtonsMenu({
  key,
  title,
  icon,
}: {
  key: number;
  title: string;
  icon: string;
}) {
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
      key={key}
      borderWeight="light"
    >
      <Image src={icon} alt="" css={{ marginRight: "$5" }} />
      <Text size={"14px"} css={{ letterSpacing: "$tight" }} weight={"medium"}>
        {title}
      </Text>
    </Button>
  );
}
