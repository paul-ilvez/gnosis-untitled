import LinkAndCopy from "@/components/Common/LinkAndCopy";
import getLittleAddress from "@/libs/getLittleAdrress";
import { AppContext } from "@/store/AppContext";
import {
  Grid,
  Spacer,
  Text,
  Image,
  Card,
  Row,
  Col,
  Button,
} from "@nextui-org/react";
import moment from "moment";
import { useContext } from "react";
import { CloseSquare, TickSquare } from "react-iconly";

export default function TransactionInfo({
  transaction,
  quorum,
}: {
  transaction: GnosisTransaction;
  quorum: number;
}) {
  const {
    handleApproveTx,
    handleRevokeConfirmation,
    handleExecuteTx,
    currentSafe,
  } = useContext(AppContext);

  function isCanBeExecuted(): boolean {
    return Number(transaction.numConfirmations) >= quorum;
  }

  function renderConfirmRevokeButton(): React.ReactElement {
    if (transaction.isConfirmedByUser) {
      return (
        <Button
          onPress={() => {
            handleRevokeConfirmation(
              currentSafe as GnosisUntitled,
              transaction.id
            );
          }}
          color="error"
          auto
          bordered
          icon={<CloseSquare />}
        >
          Revoke
        </Button>
      );
    }

    return (
      <Button
        color="success"
        auto
        bordered
        icon={<TickSquare />}
        onPress={() => {
          handleApproveTx(currentSafe as GnosisUntitled, transaction.id);
        }}
      >
        Approve
      </Button>
    );
  }

  return (
    <>
      <Card.Divider />
      <Card.Body>
        <Col>
          <Row>
            <Text>Recipient:</Text>
            <Spacer />
            <Text b>{getLittleAddress(transaction.to)}</Text>
            <Spacer />
            <LinkAndCopy address={transaction.to} />
          </Row>
          <Spacer />
          <Row>
            <Text>Date Submitted:</Text>
            <Spacer />
            <Text>{moment(transaction.date, "YYYYMMDD").calendar()}</Text>
          </Row>
          <Spacer />
          <Row>
            <Text>Signers Confirmed:</Text>
            <Spacer />
            <Text b>{transaction.numConfirmations.toString()}</Text>
          </Row>
          <Spacer />
          {transaction.txHash && (
            <Row>
              <Text>Tx Hash:</Text>
              <Spacer />
              <Text b>{getLittleAddress(transaction.txHash)}</Text>
              <Spacer />
              <LinkAndCopy address={transaction.txHash} tx />
            </Row>
          )}
          <Spacer />
          {transaction.safeHash && (
            <Row>
              <Text>Safe hash:</Text>
              <Spacer />
              <Text b>{getLittleAddress(transaction.safeHash)}</Text>
            </Row>
          )}
          <Card.Divider />
          {!transaction.executed && (
            <Card.Footer>
              <Row>
                <Grid.Container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  {renderConfirmRevokeButton()}
                  <Spacer />
                  <Button
                    icon={<Send />}
                    auto
                    color="primary"
                    disabled={!isCanBeExecuted()}
                    onPress={() => {
                      handleExecuteTx(
                        currentSafe as GnosisUntitled,
                        transaction.id
                      );
                    }}
                  >
                    Execute
                  </Button>
                </Grid.Container>
              </Row>
            </Card.Footer>
          )}
        </Col>
      </Card.Body>
    </>
  );
}
