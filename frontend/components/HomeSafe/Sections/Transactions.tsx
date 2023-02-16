import { Card, Text, Row, Spacer, Image, Grid } from "@nextui-org/react";
import TransactionsHeaderButtons from "../TransactionsHeaderButtons";
export default function Transactions() {
  return (
    <Card
      variant="bordered"
      css={{ h: "499px", mw: "522px", borderRadius: "39px" }}
    >
      <Card.Header>
        <Spacer y={2} />
        <Row justify="flex-start">
          <TransactionsHeaderButtons />
        </Row>
      </Card.Header>
      <Card.Divider />
      <Card.Body>
        <Grid.Container direction="column" justify="center" alignItems="center">
          <Spacer y={2} />
          <Image src="/QueueIcon.svg" alt="QueueIcon" />
          <Spacer y={1} />
          <Text css={{ userSelect: "none" }} size={16} color={"#C8C8C8"}>
            Queued transactions will appear here
          </Text>
        </Grid.Container>
      </Card.Body>
    </Card>
  );
}
