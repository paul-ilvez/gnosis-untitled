import { Grid, Spacer, Text, Image } from "@nextui-org/react";
import TransactionsHistoryElement from "./TransactionsHistoryElement";
import transactionsHistory from "@/mocks/transactionsHistory";
import TransactionCard from "./TransactionCard/TransactionCard";
import TransactionDepositCard from "./TransactionDepositCard/TransactionDepositCard";

export default function TransactionsHistory({
  history,
  deposits,
}: {
  history: GnosisTransaction[];
  deposits: GnosisDeposit[];
}) {
  function getIcon(tx: GnosisTransaction): string {
    if (tx.type == 1) {
      return "/SentIcon.svg";
    }

    return "/ReceivedIcon.svg";
  }

  const empty = (
    <Grid.Container direction="column" justify="center" alignItems="center">
      <Spacer y={2} />
      <Image src="/QueueIcon.svg" alt="QueueIcon" />
      <Spacer y={1} />
      <Text css={{ userSelect: "none" }} size={16} color={"#C8C8C8"}>
        History is empty
      </Text>
    </Grid.Container>
  );

  return (
    <Grid.Container direction="column" alignItems="center">
      {history.length || deposits.length ? (
        <>
          {history.map((transaction) => {
            return (
              <TransactionCard key={transaction.id} transaction={transaction} />
            );
          })}
          {deposits.map((transaction) => {
            return (
              <TransactionDepositCard key={transaction.id} transaction={transaction} />
            );
          })}
        </>
      ) : (
        empty
      )}
    </Grid.Container>
  );
}
