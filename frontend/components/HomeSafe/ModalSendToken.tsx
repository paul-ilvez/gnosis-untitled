import React, { useContext } from "react";
import { Modal, Text, Row, Image, Card, Input, Spacer } from "@nextui-org/react";
import Link from "next/link";
import { AppContext, AppContextData } from "@/store/AppContext";
import SendTokenButton from "./SendTokenButton";
import SendNFTButton from "./SendNFTButton";

const ModalSendToken = ({
  visible,
  closeHandler,
}: {
  visible: boolean;
  closeHandler: () => void;
}) => {
  const appCtx = useContext<AppContextData>(AppContext);
  return (
    <div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        width="600px"
      >
        <Modal.Header>
          <Row justify="left" align="center">
            <Text>Send Tokens</Text>
          </Row>
          <Row justify="left" align="center">
            <Text >Step 1 of 2</Text>
          </Row>
        </Modal.Header>
        <Card.Divider />
        <Modal.Body>
          <Row justify="center" align="center">
          
      <Input
        underlined
        disabled
        width="500px"
      />
      
          </Row>
          <Row justify="center" align="center">
            
          </Row>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalSendToken;
