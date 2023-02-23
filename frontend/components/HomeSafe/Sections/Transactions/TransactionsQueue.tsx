import { Grid, Spacer, Text, Image } from "@nextui-org/react";
import TransactionCard from "./TransactionCard";

// const transactions = [
//   {
//     id: 0,
//     action: "Recived",
//     value: "0,05 GOR",
//     time: "7:03 PM",
//     status: "Success",
//   },
//   {
//     id: 1,
//     action: "Sent",
//     value: "-0,05 GOR",
//     time: "6:59 PM",
//     status: "Success",
//   },
//   {
//     id: 2,
//     action: "Recived",
//     value: "1,23 GOR",
//     time: "10:56 PM",
//     status: "Success",
//   },
// ];

export default function TransactionsQueue({
  txs,
}: {
  txs: GnosisTransaction[];
}) {
  const empty = (
    <Grid.Container direction="column" justify="center" alignItems="center">
      <Spacer y={2} />
      <Image src="/QueueIcon.svg" alt="QueueIcon" />
      <Spacer y={1} />
      <Text css={{ userSelect: "none" }} size={16} color={"#C8C8C8"}>
        Queued transactions will appear here
      </Text>
    </Grid.Container>
  );
  return txs.length
    ? txs.map((transaction) => (
        <TransactionCard key={transaction.id} transaction={transaction} />
      ))
    : empty;
}
