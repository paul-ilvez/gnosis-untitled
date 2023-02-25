import React, { useContext, useState, useRef } from "react";
import {
  Modal,
  Text,
  Row,
  Image,
  Card,
  Button,
  Spacer,
} from "@nextui-org/react";
import Link from "next/link";
import { AppContext, AppContextData } from "@/store/AppContext";

const ModalAddSigner = ({
  visible,
  closeHandler,
}: {
  visible: boolean;
  closeHandler: () => void;
}) => {
  const appCtx = useContext<AppContextData>(AppContext);
  const { currentSafe } = appCtx;

  const quorumInputRef = useRef();
  const handleClickModalSendToken = () => {
    setIsVisibleModalToken(true);
    closeHandler();
  };

  const handleClosekModalSendToken = () => {
    setIsVisibleModalNFT(false);
    setIsVisibleModalToken(false);
  };

  async function handleAddSigner(e) {
    e.preventDefault();
    console.log("quorum, ", quorumInputRef?.current?.value);
    const value = quorumInputRef?.current?.value;
    try {
      const tx = await currentSafe.submitNewSigner(value);
      const response = await tx.wait();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Row justify="left" align="center">
            <Text>Change amount of confirmation</Text>
          </Row>
        </Modal.Header>
        <Card.Divider />
        <Modal.Body>
          <form onSubmit={handleAddSigner}>
            <label></label>
            <input
              placeholder="Add address"
              ref={quorumInputRef}
              style={{
                backgroundColor: "transparent",
                border: "1px solid gray",
              }}
              type="text"
              step={1}
            ></input>
            <Spacer y={1} />
            <Button
              size={"sm"}
              css={{ backgroundColor: "black" }}
              type="submit"
            >
              <Text b color="white">
                Submit
              </Text>
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalAddSigner;
