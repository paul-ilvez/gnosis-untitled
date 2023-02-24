import React from "react";
import { Modal, Button, Text, Col, Spacer } from "@nextui-org/react";
import Link from "next/link";

export default function ErrorModal({
  errorMessage = "Something error",
  closeHandler
}: {
  errorMessage: string;
  closeHandler: Function;
}) {
  return (
    <div>
      <Modal onClose={closeHandler} closeButton aria-labelledby="modal-title" open={true}>
        <Modal.Header>
          <Col>
            <Text color="error" b size={22}>
              Error
            </Text>
            <Spacer />
            <Text css={{ textAlign: "left" }} size={16}>{errorMessage}</Text>
          </Col>
        </Modal.Header>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
