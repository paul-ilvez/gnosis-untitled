import React, { useContext, useState } from "react";
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
} from "@nextui-org/react";
import Link from "next/link";
import { AppContext, AppContextData } from "@/store/AppContext";
import SendTokenButton from "./SendTokenButton";
import SendNFTButton from "./SendNFTButton";
import FormHeader from "../../Common/FormHeader";
import AccountCard from "@/components/Common/AccountCard";
import Jazzicon from "react-jazzicon/dist/Jazzicon";
import { jsNumberForAddress } from "react-jazzicon";
import ModalReview from "./ModalRewiew";

const ModalSendToken = ({
  visible,
  closeHandler,
}: {
  visible: boolean;
  closeHandler: () => void;
}) => {
  const { setCreateSafeStatusHandler, newSafeForm, safeFactory } =
    useContext<AppContextData>(AppContext);
  const { owners, name, network, quorum } = newSafeForm;
  const [visibleReview, setVisibleReview] = useState(false);

  const handleModalReviewTransaction = () => {
    setVisibleReview(true);
    closeHandler();
  };

  const closeHandlerReview = () => {
    setVisibleReview(false);
  }

  return (
    <div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        width="500px"
      >
        <Modal.Header justify="flex-start">
          <Text weight={"bold"}>Send Tokens</Text>
          <Text size="$xs" css={{ marginLeft: "20px" }}>
            step 1 out of 2
          </Text>
        </Modal.Header>
        <Card.Divider />
        <Modal.Body css={{ textAlign: "center" }}>
          <Row>
            <Text size={"$sm"} css={{ textAlign: "left" }}>
              Sending From:
            </Text>
          </Row>
          <Row justify="space-between">
            <Row css={{ width: "40px" }}>
              <Jazzicon
                diameter={40}
                seed={jsNumberForAddress(
                  "0xAaF9E033f5b1Ef4Cc5db9e88b9F6F9ABC6F1aAf1"
                )}
              />
            </Row>
            <Row>
              <Text
                size={"$xs"}
                css={{ textAlign: "left", marginLeft: "20px" }}
              >
                <b>Test</b>
                <br />
                gor: 0xAaF9E033f5b1Ef4Cc5db9e88b9F6F9ABC6F1aAf1
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
              <Jazzicon
                diameter={40}
                seed={jsNumberForAddress(
                  "0xAaF9E033f5b1Ef4Cc5db9e88b9F6F9ABC6F1aAf1"
                )}
              />
            </Row>
            <Row>
              <Text
                size={"$xs"}
                css={{ textAlign: "left", marginLeft: "20px" }}
              >
                <b>Test</b>
                <br />
                gor: 0xAaF9E033f5b1Ef4Cc5db9e88b9F6F9ABC6F1aAf1
              </Text>
            </Row>
          </Row>
          <Row>
            <Input css={{ width: "500px" }} placeholder="Select an asset*" />
          </Row>
          <Row>
            <Input css={{ width: "500px" }} placeholder="Amount*" />
          </Row>
        </Modal.Body>
        <Card.Divider />
        <Modal.Footer justify="space-between">
          <Button
            css={{ width: "100px", background: "#fff" }}
            color="#000"
            onClick={closeHandler}
            auto
          >
            Cancel
          </Button>
          <button
            onClick={handleModalReviewTransaction}
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
            Next
          </button>
        </Modal.Footer>
      </Modal>
      <ModalReview visible={visibleReview} closeHandler={closeHandlerReview} />
    </div>
  );
};

export default ModalSendToken;
