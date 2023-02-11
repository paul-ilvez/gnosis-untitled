import { Container, Row, Card, Text, Button } from "@nextui-org/react";
import { ElementListProps } from "@/components/ElementList/ElementList.props";
import VectorSvg from "./vector.svg";

export const ElementList = ({
  children,
  bgColor = "#EFEFEF",
  title,
}: ElementListProps): JSX.Element => {
  return (
    <Card
      variant={"flat"}
      css={{ backgroundColor: bgColor, mt: "20px" }} //mw: "440px"
    >
      <Card.Header>
        <Container>
          <Row justify={"space-between"} align={"center"}>
            <Text h3>{title}</Text>
            <VectorSvg />
          </Row>
        </Container>
      </Card.Header>
      <Card.Divider />
      <Card.Body css={{ py: "$10" }}>
        <Container>{children}</Container>
      </Card.Body>
    </Card>
  );
};
