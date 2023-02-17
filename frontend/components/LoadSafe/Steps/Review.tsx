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
import { AppContext, AppContextData } from "@/store/AppContext";
import { Contract, JsonRpcProvider } from "ethers";
import { SafeFactory } from "@/abi/SafeFactory";
import walletProvider from "@/abi/walletProvider";

const Review = () => {
  const [safeFactory, setSafeFactory] = useState();
  const { setCreateSafeStatusHandler, newSafeForm } =
    useContext<AppContextData>(AppContext);
  const { owners, name, network, quorum } = newSafeForm;

  useEffect(() => {
    (async () => {
      const url = "http://127.0.0.1:8545";
      const customHttpProvider = new JsonRpcProvider(url);

      const safeFactory = new Contract(
        "0x5fbdb2315678afecb367f032d93f642f64180aa3",
        SafeFactory,
        customHttpProvider
      );

      setSafeFactory(safeFactory);
    })();
  }, []);

  const createSafeHandler = async () => {
    console.log(newSafeForm);

    const addresses = owners.map((owner) => owner.address);

    const signer = await walletProvider.getSigner();
    const safeFactoryWithSigner = safeFactory.connect(signer);
    const newSafe = await safeFactoryWithSigner.createSafe(addresses, quorum);

    console.log("newSafe: ", newSafe);
  };

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
                <Table.Cell>Treshold</Table.Cell>
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
            <Spacer y={2} />
            <Text css={{ textAlign: "left" }} size="$xl" color="#0077FF" b>
              Est. network fee
            </Text>
            <Spacer y={1} />
            <Badge size="lg" variant="flat">
              {/* TODO: написать предварительный газ */}≈ 0.02655 it's fake
            </Badge>
            <Text css={{ textAlign: "left" }} color="#9E9E9E">
              You will have to confirm a transaction with your connected wallet.
            </Text>
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
                onClick={createSafeHandler}
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
