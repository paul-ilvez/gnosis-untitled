import React, { useContext } from "react";
import {
  Card,
  Grid,
  Table,
  Spacer,
  Text,
  Badge,
} from "@nextui-org/react";
import FormHeader from "@/components/Common/FormHeader";
import AccountCard from "@/components/Common/AccountCard";
import StepButtons from "@/components/LoadSafe/StepButtons";
import { AppContext } from "@/store/AppContext";

const Review = () => {
  const owners = [
    {
      id: 1,
      name: "Alice",
    },
    {
      id: 3,
      name: "Bob",
    },
  ];

  const appCtx = useContext(AppContext);

  return (
    <Grid.Container gap={2} css={{ mt: 40 }} justify="center">
      <Card variant="bordered" css={{ mw: "450px", h: "$400" }}>
        <Card.Body css={{ textAlign: "center", padding: "40px" }}>
          <FormHeader
            title={"Create new Safe"}
            subTitle={"Review"}
            description={"Confirm loading Safe."}
          />
          <Spacer y={2} />
          <Table
            aria-label="Example table with static content"
            css={{
              height: "auto",
              minWidth: "100%",
              textAlign: "left",
            }}
          >
            <Table.Header>
              <Table.Column>Network</Table.Column>
              <Table.Column>{appCtx.network.name}</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row key="2">
                <Table.Cell>Name</Table.Cell>
                <Table.Cell>
                  <b>Test Safe</b>
                </Table.Cell>
              </Table.Row>
              <Table.Row key="3">
                <Table.Cell>Owners</Table.Cell>
                <Table.Cell>
                  <b>3</b>
                </Table.Cell>
              </Table.Row>
              <Table.Row key="4">
                <Table.Cell>Treshold</Table.Cell>
                <Table.Cell>
                  <b>1 out of 1 owner(s)</b>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Spacer />
          <Grid.Container direction="column">
            {owners.map((owner) => {
              return (
                <div key={owner.key}>
                  <Text css={{ textAlign: "left" }}>
                    <b>{owner.name}</b>
                  </Text>
                  <AccountCard />
                  <Spacer />
                </div>
              );
            })}
            <Spacer y={2} />
            <Text css={{ textAlign: "left" }} size="$xl" color="#0077FF" b>
              Est. network fee
            </Text>
            <Spacer y={1} />
            <Badge size="lg" variant="flat">
              ≈ 0.02655 GOR
            </Badge>
            <Text css={{ textAlign: "left" }} color="#9E9E9E">
              You will have to confirm a transaction with your connected wallet.
            </Text>
            <Spacer y={2} />
            <StepButtons link="/" />
          </Grid.Container>
        </Card.Body>
      </Card>
    </Grid.Container>
  );
};

export default Review;
