import React, { useContext } from "react";
import { Modal, Text, Row, Image, Card } from "@nextui-org/react";
import ButtonConnectMetamask from "../ButtonConnect/ButtonConnectMetamask";
import Link from "next/link";
import { AppContext, AppContextData } from "@/store/AppContext";

const ModalConnect = ({
  visible,
  closeHandler,
  handleConnectMetamaskClick,
}: {
  visible: boolean;
  closeHandler: () => void;
  handleConnectMetamaskClick: () => void;
}) => {
  const appCtx = useContext<AppContextData>(AppContext);
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
        {appCtx.isEthereum ? (
        <>
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
        </>
        ) : (<>
        <Modal.Body>
          <Row justify="center" align="center">
            <Text h1 size={18} weight="medium">
            You need to install Meta mask!
            </Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Row justify="center" align="center">
            <Link href='https://metamask.app.link/dapp/untitle-gnosis.io' target='_blank'>
              Install Metamask
            </Link>
          </Row>
        </Modal.Footer>
        </>)}
      </Modal>
    </div>
  );
};

export default ModalConnect;
