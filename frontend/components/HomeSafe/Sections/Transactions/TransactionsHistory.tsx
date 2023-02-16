import { Grid, Spacer } from "@nextui-org/react";
import TransactionsHistoryElement from "./TransactionsHistoryElement";
import transactionsHistory from "@/mocks/transactionsHistory";

export default function TransactionsHistory() {
  return (
    <Grid.Container direction="column" justify="center" alignItems="center">
      <Spacer y={2} />
      <>
        {transactionsHistory.map((transaction) => {
          <Grid justify="space-between" alignItems="center">
            <TransactionsHistoryElement
              icon={transaction.icon}
              type={transaction.type}
              value={transaction.value}
              timestamp={transaction.timestamp}
              status={transaction.status}
            />
            ;
          </Grid>;
        })}
      </>
    </Grid.Container>
  );
}
