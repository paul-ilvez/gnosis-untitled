import React, { useContext, useState } from "react";
import { Modal, Text, Row, Image, Card } from "@nextui-org/react";
import Link from "next/link";
import { AppContext, AppContextData } from "@/store/AppContext";
import SendTokenButton from "./SendTokenButton";
import SendNFTButton from "./SendNFTButton";
import ModalSendToken from "./ModalSendToken";

const ModalNewTransaction = ({
  visible,
  closeHandler,
}: {
  visible: boolean;
  closeHandler: () => void;
}) => {
  const [isVisibleModalToken, setIsVisibleModalToken] = useState(false);
  const [isVisibleModalNFT, setIsVisibleModalNFT] = useState(false);
  const appCtx = useContext<AppContextData>(AppContext);

  const handleClickModalSendToken = () => {
    setIsVisibleModalToken(true);
    closeHandler()
  };

  const handleClosekModalSendToken = () => {
    setIsVisibleModalNFT(false);
    setIsVisibleModalToken(false);
  };


  const handleClickModalSendNFT = () => {
    setIsVisibleModalNFT(true);
    sessionStorage.removeItem("recipient");
    sessionStorage.removeItem("amount");
    closeHandler()
  };


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
            <Text>New transaction</Text>
          </Row>
        </Modal.Header>
        <Card.Divider />
        <Modal.Body>
          <Row justify="center" align="center">
            <SendTokenButton handler={handleClickModalSendToken} />
          </Row>
          <Row justify="center" align="center">
            <SendNFTButton handler={handleClickModalSendNFT} />
          </Row>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      <ModalSendToken closeHandler={handleClosekModalSendToken} visible={isVisibleModalToken} />
    </div>
  );
};

export default ModalNewTransaction;
