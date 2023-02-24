import React, { useContext, useEffect, useRef, useState } from "react";
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
  Dropdown,
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
import LinkAndCopy from "@/components/Common/LinkAndCopy";
import { ethers } from "ethers";

const ModalSendToken = ({
  visible,
  closeHandler,
}: {
  visible: boolean;
  closeHandler: () => void;
}) => {
  const {
    provider,
    currentSafe,
    connected,
  }: {
    provider: BrowserProvider;
    currentSafe: GnosisUntitled;
    connected: boolean;
  } = useContext(AppContext);
  const { shortName, symbol } = useContext(AppContext).network;

  const [visibleReview, setVisibleReview] = useState(false);
  const [balance, setBalance] = useState<number>(0);
  const [quorum, setQuorum] = useState<number>(0);
  const [numOfSigners, setNumOfSigners] = useState<number>(0);
  const [contractAddress, setContractAddress] = useState<string>("UNKNOWN");

  const recipientRef = useRef();
  const amountRef = useRef();

  useEffect(() => {
    if (currentSafe == null || !connected) {
      return;
    }
    (async () => {
      if (provider == null || !connected) {
        return;
      }
      const tempQuorum = Number(await currentSafe.quorum());
      const tempNumOfSigners = Number(await currentSafe.getSignerCount());
      const tempAddress = currentSafe.target;
      const tempBalance = Number(await provider.getBalance(tempAddress));

      setContractAddress(tempAddress);
      setBalance(tempBalance);
      setQuorum(tempQuorum);
      setNumOfSigners(tempNumOfSigners);
    })();
  }, [currentSafe, provider, connected]);

  const menuItems = [
    { key: "new", name: "New File" },
    { key: "copy", name: "Copy Link" },
    { key: "edit", name: "Edit File" },
    { key: "delete", name: "Delete File" },
  ];

  const handleModalReviewTransaction = () => {

  };

  const closeHandlerReview = () => {
    setVisibleReview(false);
  };

  const handleSendFormReview = (event: any) => {
    event.preventDefault();
    sessionStorage.setItem("amount", amountRef.current.value);
    sessionStorage.setItem("recipient", recipientRef.current.value);
    setVisibleReview(true);
    closeHandler();
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
        <form onSubmit={handleSendFormReview}>
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
                seed={jsNumberForAddress(contractAddress)}
              />
            </Row>
            <Row>
              <Text
                size={"$xs"}
                css={{ textAlign: "left", marginLeft: "20px" }}
              >
                <b>Test</b>
                <br />
                <Text b css={{ mr: "5px" }}>
                  {shortName}:
                </Text>
                {contractAddress}
              </Text>
              <LinkAndCopy address={contractAddress} />
            </Row>
          </Row>

          <Row>
            <Text size={"$sm"} css={{ textAlign: "left" }}>
              Recipient address or ENS:
            </Text>
          </Row>
          <Row justify="space-between">
            <Row>
              <Input
                css={{ width: "500px" }}
                ref={recipientRef}
                placeholder={shortName}
              />
            </Row>
          </Row>
          <Row>
            <Row>
              <Text size={"$sm"} css={{ textAlign: "left" }}>
                Select an Asset*:
              </Text>
            </Row>
            <select id="countries" className="">
              <option selected></option>
              <option value="ETH">
                {ethers.formatEther(balance.toString())} ETH
              </option>
            </select>
          </Row>
          <Row>
            <Input css={{ width: "500px" }} ref={amountRef} placeholder="Amount*" />
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
            // onClick={handleModalReviewTransaction}
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
        </form>
      </Modal>
      <ModalReview
        visible={visibleReview}
        closeHandler={closeHandlerReview}
        addressFrom={contractAddress}
        shortName={shortName}
      />
    </div>
  );
};

export default ModalSendToken;
