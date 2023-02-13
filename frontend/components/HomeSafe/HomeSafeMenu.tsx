import { Card, Spacer, Row, Col, Button, Grid, Text } from "@nextui-org/react";
import { SafeElement } from "@/components";
import safes from "@/mocks/safes";
import LinkAndCopy from "@/components/Common/LinkAndCopy";
import ButtonsMenu from "./ButtonsMenu";

export default function HomeSafeMenu() {
  const Buttons = [
    { id: 1, title: "Home", icon: "/Home.svg" },
    { id: 2, title: "Assets", icon: "/Assets.svg" },
    {
      id: 3,
      title: "Transactions",
      icon: "/Transactions.svg",
    },
    {
      id: 4,
      title: "Address book",
      icon: "./AddressBook.svg",
    },
    { id: 5, title: "Settings", icon: "/Settings.svg" },
  ];
  return (
    <Card
      variant="bordered"
      css={{ h: "618px", mw: "421px", borderRadius: "39px" }}
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
          <Row align="center" justify="center">
            <LinkAndCopy />
          </Row>
          <Spacer y={1} />
          <Row align="center" justify="center">
            <Button
              rounded
              css={{
                background: "#000",
                color: "#fff",
                width: "300px",
                maxWidth: "260px",
              }}
              auto
            >
              <Text
                css={{ letterSpacing: "$wide" }}
                color="white"
                weight={"normal"}
              >
                New transaction
              </Text>
            </Button>
          </Row>
        </Col>
      </Card.Header>
      <Spacer y={0.5} />
      <Card.Divider />
      <Card.Body>
        <Grid.Container
          css={{ mt: "$5" }}
          gap={2}
          justify="center"
          alignItems="center"
        >
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
