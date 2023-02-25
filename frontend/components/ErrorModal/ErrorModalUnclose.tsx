import React from "react";
import { Modal, Button, Text, Col, Spacer } from "@nextui-org/react";
import Link from "next/link";

export default function ErrorModalUnclose({
  errorMessage = "Something error",
}: {
  errorMessage: string;
}) {
  return (
    <div>
      <Modal preventClose aria-labelledby="modal-title" open={true}>
        <Modal.Header>
          <Col>
            <Text color="error" b size={22}>
              Error
            </Text>
            <Spacer />
            <Text size={18}>{errorMessage}</Text>
          </Col>
        </Modal.Header>
        <Modal.Footer>
          <Link href="/">
            <Button bordered color="error">
              Go homepage
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
