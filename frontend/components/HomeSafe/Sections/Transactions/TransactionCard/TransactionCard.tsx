import { Grid, Spacer, Text, Image, Card, Row } from "@nextui-org/react";
import { formatEther } from "ethers";
import { useEffect, useState } from "react";
import TransactionInfo from "./TransactionInfo";

export default function TransactionCard({
  transaction,
  quorum = 1,
}: {
  transaction: GnosisTransaction;
  quorum?: number;
}) {
  const [open, setOpen] = useState(false);
  const [numConfirmations, setNumConfirmations] = useState<number>(
    Number(transaction.numConfirmations)
  );

  useEffect(() => {
    setNumConfirmations(Number(transaction.numConfirmations));
  }, []);

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

  const value = formatEther(transaction.value) + " ETH";

  function renderValue(): string {
    if (txTypeToString(transaction.type) == "Change Quorum") {
      return transaction.value + "";
    }
    return value;
  }

  return (
    <>
      <Card variant="shadow">
        <Card.Header css={{ cursor: "pointer" }} onClick={() => setOpen(!open)}>
          <Row justify="space-between" align="center" wrap="nowrap">
            <Row align="center">
              <Text b>{transaction.id}</Text>
              {txTypeToString(transaction.type) === "VALUE_TRANSFER" && (
                <Image src="/SentIcon.svg" alt="ReceivedIcon" />
              )}
              <Spacer y={2} />
              <Text css={{ width: "120px" }}>
                &nbsp;{txTypeToString(transaction.type)}
              </Text>
              <Spacer y={1} />
              <Text>{renderValue()}</Text>
            </Row>

            <Spacer y={2} />
            <Text>{transaction.date.toLocaleDateString()}</Text>
            <Spacer y={2} />
            <Grid justify="center" direction="column">
              <Text
                b
                color={
                  Number(numConfirmations) >= quorum || transaction.executed
                    ? "green"
                    : "blue"
                }
                css={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {transaction.executed
                  ? "Success"
                  : `${numConfirmations}/${quorum}`}
                <Spacer />
                <Image
                  alt="chevron"
                  width={16}
                  height={16}
                  src="/chevron.svg"
                />
              </Text>
            </Grid>
          </Row>
        </Card.Header>
        {open && (
          <TransactionInfo
            transaction={transaction}
            quorum={quorum}
            numConfirmations={numConfirmations}
            setNumConfirmations={setNumConfirmations}
          />
        )}
      </Card>
      <Spacer />
    </>
  );
}
