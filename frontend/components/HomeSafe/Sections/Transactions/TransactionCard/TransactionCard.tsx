import {
  Grid,
  Spacer,
  Text,
  Image,
  Card,
  Row,
} from "@nextui-org/react";
import { formatEther } from "ethers";
import { useState } from "react";
import TransactionInfo from "./TransactionInfo";

export default function TransactionCard({
  transaction,
  quorum = 1,
}: {
  transaction: GnosisTransaction;
  quorum?: number;
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
      <Card variant="shadow">
        <Card.Header css={{ cursor: "pointer" }} onClick={() => setOpen(!open)}>
          <Row justify="space-between" align="center" wrap="nowrap">
            <Row align='center'>
              <Text b>{transaction.id}</Text>
              <Spacer y={2} />
              <Text css={{ width: '120px' }}>&nbsp;{txTypeToString(transaction.type)}</Text>
              <Spacer y={1} />
              <Text>{transaction.value ? value : ""}</Text>
            </Row>

            <Spacer y={2} />
            <Text>{transaction.date.toLocaleDateString()}</Text>
            <Spacer y={2} />
            <Grid justify="center" direction="column">
              <Text
                b
                color={
                  Number(transaction.numConfirmations) >= quorum
                    ? "green"
                    : "blue"
                }
                css={{
                  display: "flex",
                  alignItems: 'center'
                }}
              >
                {formatNumOfConfirmations()}
                <Spacer />
                <Image alt="chevron" width={16} height={16} src="/chevron.svg" />
              </Text>
            </Grid>
          </Row>
        </Card.Header>
        {open && <TransactionInfo transaction={transaction} quorum={quorum} />}
      </Card>
      <Spacer />
    </>
  );
}
