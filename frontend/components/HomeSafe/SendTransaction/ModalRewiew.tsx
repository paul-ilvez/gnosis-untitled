import React, { useContext } from "react";
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
} from "@nextui-org/react";
import Link from "next/link";
import { AppContext } from "@/store/AppContext";
import SendTokenButton from "./SendTokenButton";
import SendNFTButton from "./SendNFTButton";
import FormHeader from "../../Common/FormHeader";
import AccountCard from "@/components/Common/AccountCard";
import Jazzicon from "react-jazzicon/dist/Jazzicon";
import { jsNumberForAddress } from "react-jazzicon";

const ModalReview = ({
  visible,
  closeHandler,
}: {
  visible: boolean;
  closeHandler: () => void;
}) => {
  const { setCreateSafeStatusHandler, newSafeForm, safeFactory } =
    useContext(AppContext);
  const { owners, name, network, quorum } = newSafeForm;
  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
      width="500px"
    >
      <Modal.Header justify="flex-start">
        <Text weight={"bold"}>Rewiew transaction</Text>
        <Text size="$xs" css={{ marginLeft: "20px" }}>
          step 2 out of 2
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
            <Text size={"$xs"} css={{ textAlign: "left", marginLeft: "20px" }}>
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
            <Text size={"$xs"} css={{ textAlign: "left", marginLeft: "20px" }}>
              <b>Test</b>
              <br />
              gor: 0xAaF9E033f5b1Ef4Cc5db9e88b9F6F9ABC6F1aAf1
            </Text>
          </Row>
        </Row>
        <Checkbox defaultSelected size="sm">
          Execute transaction
        </Checkbox>
        <Row>
          <Input css={{ width: "500px" }} placeholder="Estimated fee" />
        </Row>
        <Row>
          <Input css={{ width: "500px" }} placeholder="Transaction validity" />
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
          Back
        </Button>
        <Button
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
    </Modal>
  );
};

export default ModalReview;
