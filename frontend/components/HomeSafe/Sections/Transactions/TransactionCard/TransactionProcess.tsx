import AccountCard from "@/components/Common/AccountCard";
import { Grid, Spacer, Text, Card, Row, Col, Button } from "@nextui-org/react";

const TransactionProcess = ({
  transaction,
  numConfirmations,
  quorum,
}: {
  transaction: GnosisTransaction;
  numConfirmations: number;
  quorum: number;
}) => {
  return (
    <Card.Footer css={{ pt: 20 }}>
      <Grid>
        <Text css={{ textAlign: "left" }} size="$md" color={"#000"}>
          ✓ &nbsp; Created
          <Spacer y={1} />
        </Text>
        <Text css={{ textAlign: "left" }} size="$md" color={"#000"}>
          ✓ &nbsp; Confirmations ({numConfirmations} / {quorum})
          <Spacer y={1} />
        </Text>
        <Text
          css={{ textAlign: "left" }}
          size="$md"
          color={transaction.executed ? "blue" : "gray"}
          b
        >
           {transaction.executed ? "✓ Executed" : "... Not executed"}
          {transaction.executed && (
            <AccountCard address={transaction?.sender || ""} />
          )}
          <Spacer y={1} />
        </Text>
      </Grid>
    </Card.Footer>
  );
};

export default TransactionProcess;
