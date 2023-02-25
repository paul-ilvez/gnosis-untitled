import { Card, Text } from "@nextui-org/react";

export default function Setup() {
  return (
    <Card
      variant="bordered"
      css={{ h: "499px", mw: "720px", borderRadius: "39px" }}
    >
      <Card.Body>
        <Text h6 size={15} color="black" css={{ m: 0 }}>
          3 of 3
        </Text>
      </Card.Body>
    </Card>
  );
}
