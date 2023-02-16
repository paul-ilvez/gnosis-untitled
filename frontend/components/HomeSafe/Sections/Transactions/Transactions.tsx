import { Card, Row, Spacer, Grid, Button } from "@nextui-org/react";
import { useContext } from "react";
import TransactionsHeaderButtons from "./TransactionsHeaderButtons";
import { AppContext, AppContextData } from "@/store/AppContext";
import TransactionsHistory from "./TransactionsHistory";
import TransactionsQueue from "./TransactionsQueue";

export default function Transactions() {
  const { transactionsSection } = useContext<AppContextData>(AppContext);

  const sectionMap: { [key: string]: JSX.Element } = {
    Queue: <TransactionsQueue />,
    History: <TransactionsHistory />,
  };
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
  return (
    <Card
      variant="bordered"
      css={{ h: "499px", mw: "522px", borderRadius: "39px" }}
    >
      <Card.Header>
        <Spacer y={2} />
        <Row justify="flex-start">
          {headerButtons.map((button) => (
            <>
              <TransactionsHeaderButtons type={button.type} />
            </>
          ))}
        </Row>
      </Card.Header>
      <Card.Divider />
      <Card.Body>{sectionMap[transactionsSection.type]}</Card.Body>
    </Card>
  );
}
