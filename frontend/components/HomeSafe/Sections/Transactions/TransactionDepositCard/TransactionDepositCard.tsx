import LinkAndCopy from "@/components/Common/LinkAndCopy";
import getLittleAddress from "@/libs/getLittleAdrress";
import { Grid, Spacer, Text, Image, Card, Row, Col } from "@nextui-org/react";
import { formatEther } from "ethers";
import { useState } from "react";

const TransactionDepositCard = ({
  transaction,
}: {
  transaction: GnosisDeposit;
}) => {
  const [open, setOpen] = useState(false);

  console.log(transaction);

  const value = formatEther(transaction.value);

  return (
    <>
      <Card variant="shadow">
        <Card.Header css={{ cursor: "pointer" }} onClick={() => setOpen(!open)}>
          <Row align="center" wrap="nowrap">
            <Spacer y={2} />
            <Grid justify="center" direction="column">
              <Image
                width={16}
                height={16}
                src="/ReceivedIcon.svg"
                alt="ReceivedIcon"
              />
            </Grid>
            <Spacer y={2} />
            <Row align="center">
              <Text b>&nbsp;</Text>
              <Text css={{ width: "80px" }}> Received</Text>
              <Spacer y={3} />
              <Text>+{value} ETH</Text>
            </Row>
            <Spacer y={2} />
            <Text>{transaction.date.toLocaleDateString()}</Text>
            <Spacer y={2} />
            <Grid justify="center" direction="column">
              <Text
                b
                color={"green"}
                css={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Success
                <Spacer />
                <Image
                  alt="chevron"
                  width={16}
                  height={16}
                  src="/chevron.svg"
                />
              </Text>
            </Grid>
          </Row>
        </Card.Header>
        {open && (
          <>
            <Card.Divider />
            <Card.Body>
              <Col>
                <Row>
                  <Text>Received {value} from:</Text>
                  <Spacer />
                  <Text b>{getLittleAddress(transaction.sender)}</Text>
                  <Spacer />
                  <LinkAndCopy address={transaction.sender} />
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
              </Col>
            </Card.Body>
          </>
        )}
      </Card>
      <Spacer />
    </>
  );
};

export default TransactionDepositCard;
