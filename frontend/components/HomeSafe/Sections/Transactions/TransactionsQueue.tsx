import { Grid, Spacer, Text, Image } from "@nextui-org/react";

export default function TransactionsQueue() {
  return (
    <Grid.Container direction="column" justify="center" alignItems="center">
      <Spacer y={2} />
      <Image src="/QueueIcon.svg" alt="QueueIcon" />
      <Spacer y={1} />
      <Text css={{ userSelect: "none" }} size={16} color={"#C8C8C8"}>
        Queued transactions will appear here
      </Text>
    </Grid.Container>
  );
}
