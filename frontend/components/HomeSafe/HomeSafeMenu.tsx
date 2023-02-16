import { Card, Spacer, Row, Col, Button, Grid, Text } from "@nextui-org/react";
import { SafeElement } from "@/components";
import safes from "@/mocks/safes";
import ButtonsMenu from "./ButtonsMenu";
import AssetsCounter from "./AssetsCounter";
import NewTransactionButton from "./NewTransactionButton";

export default function HomeSafeMenu() {
  const Buttons = [
    {
      id: 1,
      title: "Transactions",
      icon: "/Transactions.svg",
    },
    { id: 2, title: "Assets", icon: "/Assets.svg" },
    {
      id: 3,
      title: "Setup",
      icon: "./AddressBook.svg",
    },
  ];
  return (
    <Card
      variant="bordered"
      css={{ h: "499px", mw: "421px", borderRadius: "39px" }}
    >
      <Card.Header>
        <Col>
          <SafeElement
            key={safes[0].address}
            avatar={safes[0].avatar}
            balance={safes[0].balance}
            chain={safes[0].chain}
            address={safes[0].address}
            countOwners={safes[0].countOwners}
            countVoices={safes[0].countVoices}
            symbol={safes[0].symbol}
          />
          <Spacer y={0.5} />
          <Row>
            <AssetsCounter />
          </Row>
          <Spacer y={1} />
          <Row align="center" justify="center">
            <NewTransactionButton />
          </Row>
        </Col>
      </Card.Header>
      <Spacer y={0.5} />
      <Card.Divider />
      <Card.Body css={{ justifyContent: "center" }}>
        <Grid.Container gap={2} justify="center" alignItems="center">
          {...Buttons.map((button) => (
            <Grid key={button.id} direction="column" alignItems="center">
              <ButtonsMenu
                key={button.id}
                title={button.title}
                icon={button.icon}
              />
            </Grid>
          ))}
        </Grid.Container>
      </Card.Body>
    </Card>
  );
}
