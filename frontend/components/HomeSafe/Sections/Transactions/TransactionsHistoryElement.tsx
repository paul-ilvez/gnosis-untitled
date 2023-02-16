import { Row, Collapse, Col, Image, Text } from "@nextui-org/react";

export default function TransactionsHistoryElement({
  icon,
  type,
  value,
  timestamp,
  status,
}: {
  icon: string;
  type: string;
  value: string;
  timestamp: string;
  status: string;
}): JSX.Element {
  return (
    <>
      <Row justify="center" align="center">
        <Image src={icon} alt="" />
        <Text>{type}</Text>
        <Text>{value}</Text>
        <Text>{timestamp}</Text>
        <Text>{status}</Text>
      </Row>
    </>
  );
}
