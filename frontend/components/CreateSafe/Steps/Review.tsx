import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  Grid,
  Table,
  Spacer,
  Text,
  Badge,
  Button,
} from "@nextui-org/react";
import FormHeader from "@/components/Common/FormHeader";
import AccountCard from "@/components/Common/AccountCard";
import { AppContext } from "@/store/AppContext";

const Review = () => {
  const { setCreateSafeStatusHandler, newSafeForm, network } =
    useContext(AppContext);
  const { owners, name, quorum } = newSafeForm;


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
              <Table.Column>{network.name}</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row key="2">
                <Table.Cell>Name</Table.Cell>
                <Table.Cell>
                  <b>{name || "untitled"}</b>
                </Table.Cell>
              </Table.Row>
              <Table.Row key="3">
                <Table.Cell>Owners</Table.Cell>
                <Table.Cell>
                  <b>{owners.length}</b>
                </Table.Cell>
              </Table.Row>
              <Table.Row key="4">
                <Table.Cell>Threshold</Table.Cell>
                <Table.Cell>
                  <b>
                    {quorum} out of {owners.length} owner(s)
                  </b>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Spacer />
          <Grid.Container direction="column">
            {owners.map((owner) => {
              return (
                <div key={owner.id}>
                  <Text css={{ textAlign: "left" }}>
                    <b>{owner.name}</b>
                  </Text>
                  <AccountCard address={owner.address} />
                  <Spacer />
                </div>
              );
            })}
            {/*<Spacer y={2} />*/}
            {/*<Text css={{ textAlign: "left" }} size="$xl" color="#0077FF" b>*/}
            {/*  Est. network fee*/}
            {/*</Text>*/}
            {/*<Spacer y={1} />*/}
            {/*<Badge size="lg" variant="flat">*/}
            {/*  /!* TODO: написать предварительный газ */}
            {/*</Badge> !/≈ 0.02655 it's fake*/}
            {/*<Text css={{ textAlign: "left" }} color="#9E9E9E">*/}
            {/*  You will have to confirm a transaction with your connected wallet.*/}
            {/*</Text>*/}
            <Spacer y={2} />
            <Grid.Container justify="space-between">
              <Button
                onClick={() => setCreateSafeStatusHandler({ status: "owners" })}
                css={{ width: "100px" }}
                bordered
                color="#000"
                auto
              >
                Back
              </Button>
              <button
                style={{
                  background: "#000",
                  color: "#fff",
                  width: "300px",
                  maxWidth: "260px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  setCreateSafeStatusHandler({ status: "generate" })
                }
              >
                Next
              </button>
            </Grid.Container>
          </Grid.Container>
        </Card.Body>
      </Card>
    </Grid.Container>
  );
};

export default Review;
