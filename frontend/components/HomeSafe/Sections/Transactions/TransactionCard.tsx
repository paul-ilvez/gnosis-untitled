import {
  Grid,
  Spacer,
  Text,
  Image,
  Card,
  Row,
  Col,
  Button,
} from "@nextui-org/react";
import { formatEther } from "ethers";
import { useState } from "react";
import { Send, TickSquare } from "react-iconly";

export default function TransactionCard({
  transaction,
  quorum = 1,
}: {
  transaction: GnosisTransaction;
  quorum: number;
}) {
  const [open, setOpen] = useState(false);

  enum TxType {
    VALUE_TRANSFER,
    SEND_BYTECODE,
    ADD_SIGNER,
    REMOVE_SIGNER,
    CHANGE_QUORUM,
  }

  function txTypeToString(txType: number): string {
    switch (txType) {
      case TxType.VALUE_TRANSFER:
        return "Value Transfer";
      case TxType.SEND_BYTECODE:
        return "Send Bytecode";
      case TxType.CHANGE_QUORUM:
        return "Change Quorum";
      case TxType.ADD_SIGNER:
        return "Add Signer";
      case TxType.REMOVE_SIGNER:
        return "Remove Signer";
      default:
        return "Unkown Transaction";
    }
  }

  function formatNumOfConfirmations(): string {
    return `${transaction.numConfirmations}/${quorum}`;
  }

  const value = formatEther(transaction.value) + " ETH";

  return (
    <>
      <Card variant="flat">
        <Card.Header css={{ cursor: "pointer" }} onClick={() => setOpen(!open)}>
          <Row justify="space-between" wrap="nowrap">
            <Text b># {transaction.id}</Text>
            <Text>&nbsp;{txTypeToString(transaction.type)}</Text>
            <Text>{value}</Text>
            <Text>{transaction.date.toLocaleDateString()}</Text>
            <Grid direction="column">
              <Text
                b
                color={
                  Number(transaction.numConfirmations) >= quorum
                    ? "green"
                    : "blue"
                }
                css={{
                  display: "flex",
                }}
              >
                {formatNumOfConfirmations()}
                <Spacer />
                <Image alt="chevron" src="/chevron.svg" />
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
                  <Text>Recipient:</Text>
                  <Spacer />
                  <Text b>{transaction.to}</Text>
                </Row>
                <Row>
                  <Text>Date Submitted:</Text>
                  <Spacer />
                  <Text b>{transaction.date.toLocaleString()}</Text>
                </Row>
                <Row>
                  <Text>Signers Confirmed:</Text>
                  <Spacer />
                  <Text b>{transaction.numConfirmations.toString()}</Text>
                </Row>
                <Row>
                  <Grid.Container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Button auto rounded icon={<TickSquare />}>
                      Approve
                    </Button>
                    <Spacer />
                    <Button icon={<Send />} auto rounded color="gradient">
                      Exectute
                    </Button>
                  </Grid.Container>
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
