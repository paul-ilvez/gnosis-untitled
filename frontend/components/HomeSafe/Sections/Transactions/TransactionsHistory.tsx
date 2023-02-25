import { Grid, Spacer } from "@nextui-org/react";
import TransactionsHistoryElement from "./TransactionsHistoryElement";
import transactionsHistory from "@/mocks/transactionsHistory";
import TransactionCard from "./TransactionCard/TransactionCard";

export default function TransactionsHistory({
  history,
}: {
  history: GnosisTransaction[];
}) {
  function getIcon(tx: GnosisTransaction): string {
    if (tx.type == 1) {
      return "/SentIcon.svg";
    }

    return "/ReceivedIcon.svg";
  }

  
  

  return (
    <Grid.Container direction="column" alignItems="center">
        {history.map((transaction) => {
          return (
            <TransactionCard
            key={transaction.id}
            transaction={transaction}
          />
          )
        })}
    </Grid.Container>
  );
}
