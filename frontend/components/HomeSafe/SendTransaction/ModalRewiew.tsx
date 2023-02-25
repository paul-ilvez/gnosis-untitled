import React, { useContext, useEffect, useState } from "react";
import {
  Modal,
  Text,
  Row,
  Image,
  Card,
  Input,
  Spacer,
  Grid,
  Button,
  Table,
  Checkbox,
  Loading,
} from "@nextui-org/react";
import { AppContext } from "@/store/AppContext";
import Jazzicon from "react-jazzicon/dist/Jazzicon";
import { jsNumberForAddress } from "react-jazzicon";
import { ethers } from "ethers";

const ModalReview = ({
  visible,
  closeHandler,
  addressFrom,
  shortName,
}: {
  visible: boolean;
  closeHandler: () => void;
}) => {
  const [recipient, setRecipient] = useState("0x0");
  const [isLoad, setLoad] = useState(false);
  const [success, setSuccess] = useState(false);
  const {
    provider,
    connected,
    currentSafe,
    signer,
    valueTransfer,
  }: {
    provider: BrowserProvider;
    currentSafe: GnosisUntitled;
    connected: boolean;
  } = useContext(AppContext);

  const handleSendTransactionForm = async (event: any) => {
    event.preventDefault();
    console.log("Current Safe >>>", currentSafe);
    try {
      setLoad(true);
      console.log(
        "Transaction >>>",
        valueTransfer.recipient,
        valueTransfer.amount
      );
      const tx = await currentSafe.submitValueTransfer(
        valueTransfer.recipient,
        ethers.parseEther(valueTransfer.amount)
      );
      const response = await tx.wait();
    } catch (error) {
      console.error(error);
    } finally {
      setSuccess(true);
      setTimeout(() => {
        setLoad(false);
        setSuccess(false);
        closeHandler();
      }, 5000);
    }
  };
  return (
    <>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        width="500px"
      >
        <form onSubmit={handleSendTransactionForm}>
          <Modal.Header justify="flex-start">
            <Text weight={"bold"}>Rewiew transaction</Text>
            <Text size="$xs" css={{ marginLeft: "20px" }}>
              step 2 out of 2
            </Text>
          </Modal.Header>
          <Card.Divider />
          <Modal.Body css={{ textAlign: "center" }}>
            <Row>
              <Text>
                Amount transfer: <b>{valueTransfer.amount}</b>
              </Text>
            </Row>
            <Row>
              <Text size={"$sm"} css={{ textAlign: "left" }}>
                Sending From:
              </Text>
            </Row>
            <Row justify="space-between">
              <Row css={{ width: "40px" }}>
                {addressFrom ? (
                  <Jazzicon
                    diameter={40}
                    seed={jsNumberForAddress(addressFrom)}
                  />
                ) : null}
              </Row>
              <Row>
                <Text
                  size={"$xs"}
                  css={{ textAlign: "left", marginLeft: "20px" }}
                >
                  <b>Bob</b>
                  <br />
                  {shortName}: {addressFrom}
                </Text>
              </Row>
            </Row>
            <Row>
              <Text size={"$sm"} css={{ textAlign: "left" }}>
                Recipient:
              </Text>
            </Row>
            <Row justify="space-between">
              <Row css={{ width: "40px" }}>
                {recipient ? (
                  <Jazzicon
                    diameter={40}
                    seed={jsNumberForAddress(recipient)}
                  />
                ) : null}
              </Row>
              <Row>
                <Text
                  size={"$xs"}
                  css={{ textAlign: "left", marginLeft: "20px" }}
                >
                  <b>Alice</b>
                  <br />
                  {shortName}: {valueTransfer.recipient}
                </Text>
              </Row>
            </Row>
            {/* <Checkbox defaultSelected size="sm">
          Execute transaction
        </Checkbox> 
        <Row>
          <Input css={{ width: "500px" }} placeholder="Estimated fee" />
        </Row>
        <Row>
          <Input css={{ width: "500px" }} placeholder="Transaction validity" />
        </Row>*/}
          </Modal.Body>
          <Card.Divider />
          <Modal.Footer justify="space-between">
            <Button
              css={{ width: "100px", background: "#fff" }}
              color="#000"
              onPress={closeHandler}
              auto
            >
              Back
            </Button>
            {isLoad ? (
              <Grid>
                <Loading type="points" />
              </Grid>
            ) : null}
            <Button
              disabled={isLoad}
              type="submit"
              style={{
                background: "#000",
                color: "#fff",
                width: "100px",
                height: "35px",
                maxWidth: "260px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>

      <Modal
        animated={true}
        aria-labelledby="modal-title"
        open={success}
        onClose={closeHandler}
        css={{ backgroundColor: "#7FFFD4"}}
        blur={true}
      >
        <Modal.Header>
          <Text b size={18}>
            Transaction is successfully send!
          </Text>
        </Modal.Header>
      </Modal>
    </>
  );
};

export default ModalReview;
