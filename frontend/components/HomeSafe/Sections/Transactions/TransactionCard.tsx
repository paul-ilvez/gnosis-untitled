import { Grid, Spacer, Text, Image, Card, Row, Col } from "@nextui-org/react";
import { useState } from "react";

export default function TransactionCard({ transaction }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card variant="flat">
        <Card.Header css={{ cursor: "pointer" }} onClick={() => setOpen(!open)}>
          <Row justify="space-between" wrap="nowrap">
            <Text>{transaction.id}</Text>
            <Text>{transaction.action}</Text>
            <Text>{transaction.value}</Text>
            <Text>{transaction.time}</Text>
            <Grid direction="column">
              <Text
                b
                color="green"
                css={{
                  display: "flex",
                }}
              >
                {transaction.status}
                <Spacer />
                <Image src="/chevron.svg" />
              </Text>
            </Grid>
          </Row>
        </Card.Header>
        {open && (
          <>
            <Card.Divider />
            <Card.Body>
              <Col>
                <Row>
                  <Text>Transaction Hash:</Text>
                  <Spacer />
                  <Text b>0x0feb...6a32</Text>
                </Row>
                <Row>
                  <Text>Executed:</Text>
                  <Spacer />
                  <Text b>15.02.2023, 21:44:48</Text>
                </Row>
              </Col>
            </Card.Body>
          </>
        )}
      </Card>
      <Spacer />
    </>
  );
}
