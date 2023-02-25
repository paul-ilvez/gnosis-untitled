import LinkAndCopy from "@/components/Common/LinkAndCopy";
import getLittleAddress from "@/libs/getLittleAdrress";
import { AppContext } from "@/store/AppContext";
import {
  Grid,
  Spacer,
  Text,
  Card,
  Row,
  Col,
  Button,
} from "@nextui-org/react";
import moment from "moment";
import { useContext } from "react";
import { CloseSquare, Send, TickSquare } from "react-iconly";
import TransactionButtons from "./TransactionButtons";

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
          {!transaction.executed && <TransactionButtons transaction={transaction} quorum={quorum} />}
        </Col>
      </Card.Body>
    </>
  );
}
