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
import { AppContext } from "@/store/AppContext";
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
    setValueTransfer,
  }: {
    currentSafe: GnosisUntitled;
  } = useContext(AppContext);
  const { shortName, symbol } = useContext(AppContext).network;

  const [visibleReview, setVisibleReview] = useState(false);
  const [balance, setBalance] = useState<number>(0);
  const [quorum, setQuorum] = useState<number>(0);
  const [numOfSigners, setNumOfSigners] = useState<number>(0);
  const [contractAddress, setContractAddress] = useState<string>("UNKNOWN");
  const [isError, setError] = useState(false);

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

  const closeHandlerReview = () => {
    setVisibleReview(false);
  };

  const handleSendFormReview = (event: any) => {
    event.preventDefault();
    if (
      recipientRef.current.value !== "" &&
      Number(amountRef.current.value) > 0 &&
      Number(amountRef.current.value) <=
      Number(ethers.formatEther(balance.toString()))
    ) {
      setValueTransfer(recipientRef.current.value, amountRef.current.value);
      setVisibleReview(true);
      closeHandler();
      return;
    }
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 5000);
  };

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
                  <b>Bob</b>
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
                Recipient address or ENS*:
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
              <Input
                css={{ width: "500px" }}
                ref={amountRef}
                placeholder="Amount*"
              />
            </Row>
            {isError ? (
              <>
                <Card
                  css={{
                    padding: "5px",
                    height: "40px",
                    background: "#FA8072",
                  }}
                >
                  <Text>Fill in all the fields correctly.</Text>
                </Card>
                <Row></Row>
              </>
            ) : null}
          </Modal.Body>
          <Card.Divider />
          <Modal.Footer justify="space-between">
            <Button
              css={{ width: "100px", background: "#fff" }}
              color="#000"
              onPress={closeHandler}
              auto
            >
              Cancel
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
              Next
            </Button>
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
