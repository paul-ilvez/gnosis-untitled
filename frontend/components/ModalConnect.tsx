import React from "react";
import {
  Modal,
  Text,
  Row,
  Image,
  Card,
} from "@nextui-org/react";
import ButtonConnectMetamask from "./ButtonConnectMetamask";
import ButtonDisconnectMetamask from "./ButtonDisconnectMetamask";


const ModalConnect = ({
  visible,
  closeHandler,
  handleConnectMetamaskClick,
}) => {
  return (
    <div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text
            h1
            size={24}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
            Get started
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Row justify="center" align="center">
            <Text h1 size={18} weight="medium">
              Connect a wallet
            </Text>
          </Row>
          <Row justify="center" align="center">
            <Text size={14} css={{ textAlign: "center" }}>
              Connecting your wallet is like “logging in”
              <br />
              to Web3. Select your wallet from the <br />
              options to get started.
            </Text>
          </Row>
          <Card.Divider />
          <Row justify="center" align="center" css={{ marginTop: "$10" }}>
            <Image src="Mmask.png" alt="Default Image" width={50} height={50} />
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Row justify="center" align="center">
            <ButtonConnectMetamask
              handleClickConnect={handleConnectMetamaskClick}
            />
          </Row>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalConnect;
