import { Card, Row, Spacer } from "@nextui-org/react";
import { useContext, useEffect } from "react";
import TransactionsHeaderButtons from "./TransactionsHeaderButtons";
import { AppContext } from "@/store/AppContext";
import TransactionsHistory from "./TransactionsHistory";
import TransactionsQueue from "./TransactionsQueue";

const headerButtons = [
  {
    id: 1,
    type: "Queue",
  },
  {
    id: 2,
    type: "History",
  },
];

export default function Transactions({
  txs,
  history,
  quorum,
}: {
  txs: GnosisTransaction[];
  history: GnosisTransaction[];
  quorum: number;
}) {
  const { transactionsSection } = useContext(AppContext);

  const sectionMap: { [key: string]: JSX.Element } = {
    Queue: <TransactionsQueue quorum={quorum} txs={txs} />,
    History: <TransactionsHistory history={history} />,
  };

  return (
    <Card
      variant="bordered"
      css={{ minHeight: "499px", mw: "522px", borderRadius: "39px" }}
    >
      <Card.Header>
        <Spacer y={2} />
        <Row justify="flex-start">
          {headerButtons.map((button, i) => (
            <TransactionsHeaderButtons key={i} type={button.type} />
          ))}
        </Row>
      </Card.Header>
      <Card.Divider />
      <Card.Body>{sectionMap[transactionsSection.type]}</Card.Body>
    </Card>
  );
}
