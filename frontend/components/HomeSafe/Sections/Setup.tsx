import {
  Card,
  Text,
  Row,
  Image,
  Tooltip,
  Button,
  Spacer,
  Col,
  Grid,
} from "@nextui-org/react";
import AccountCard from "@/components/Common/AccountCard";
import { timeStamp } from "console";
import LinkAndCopy from "@/components/Common/LinkAndCopy";
import getLittleAddress from "@/libs/getLittleAdrress";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { AppContext } from "@/store/AppContext";
import { useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import ModalChangeConfirmations from "./ModalChangeConfirmations";

export default function Setup({ signers }: { signers: string[] }) {
  console.log("signersss : ", signers);

  const { network, currentSafe, provider, connected } = useContext(AppContext);
  const shortName = network.shortName;

  const [quorum, setQuorum] = useState();
  const [numOfSigners, setNumOfSigners] = useState();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (currentSafe == null || !connected) {
      return;
    }
    (async () => {
      if (provider == null || !connected) {
        return;
      }
      const tempQuorum = Number(await currentSafe.quorum());
      const tempNumOfSigners = Number(await currentSafe.getSignerCount());

      setQuorum(tempQuorum);
      setNumOfSigners(tempNumOfSigners);
    })();
  }, [currentSafe, provider, connected]);

  async function handleRemoveSigner(signer) {
    try {
      const tx = await currentSafe.submitRemoveSigner(signer);
      const response = await tx.wait();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  function handleChangePopUp() {
    setIsVisible(true);
  }

  function handleClosePopUp() {
    setIsVisible(false);
  }

  return (
    <Card
      variant="bordered"
      css={{ h: "499px", mw: "720px", borderRadius: "39px" }}
    >
      <Card.Header>
        <Row>
          <Row css={{ w: "140px" }} align="center" justify="space-between">
            <Text b>Safe nonce</Text>
            <Tooltip
              content={
                "For security reasons, transactions made with Safe need to be executed in order. The nonce shows you which transaction will be executed next. You can find the nonce for a transaction in the transaction details."
              }
            >
              <Image src="/Info.svg" alt="info" />
            </Tooltip>
          </Row>
          <Row css={{ pl: "40px" }} align="center">
            <Text b>Current nonce: 1</Text>
          </Row>
        </Row>
      </Card.Header>

      <Card.Body>
        <>
          <Row css={{ w: "180px" }} align="center" justify="space-between">
            <Text b>Manage safe owners</Text>
            <Tooltip
              content={
                "Add, remove and replace or rename existing owners. Owner names are only stored locally and will never be shared with us or any third parties"
              }
            >
              <Image src="/Info.svg" alt="info" />
            </Tooltip>
          </Row>
          <Spacer y={1} />

          {signers.map((signer) => {
            return (
              <>
                <Row>
                  <Grid.Container>
                    {/* <Avatar text="JR" size="sm" /> */}
                    <Jazzicon diameter={30} seed={jsNumberForAddress(signer)} />
                    <Spacer />
                    <Text size={"14px"}>
                      <b>{shortName}:</b> {signer}
                    </Text>
                  </Grid.Container>
                  <LinkAndCopy address={signer} />

                  <Button
                    size={"xs"}
                    css={{
                      backgroundColor: "transparent",
                    }}
                    onClick={() => handleRemoveSigner(signer)}
                  >
                    <Image
                      alt="remove"
                      src="/Remove.svg"
                      width={16}
                      height={16}
                    />
                  </Button>
                </Row>
                <Spacer y={0.5} />
              </>
            );
          })}
        </>
      </Card.Body>
      <Card.Footer>
        <Col>
          <Row>
            <Text b> Required confirmations</Text>
          </Row>
          <Row>
            <Text>Any transaction requires the confirmation of:</Text>
          </Row>
          <Row>
            <Text b>
              {quorum} of {numOfSigners}
            </Text>
          </Row>
          <Row>
            <Button
              onClick={() => {
                handleChangePopUp();
              }}
              size="sm"
              css={{ backgroundColor: "black" }}
            >
              <Text b color="white">
                Change
              </Text>
            </Button>
          </Row>
          <Spacer y={1} />
        </Col>
      </Card.Footer>
      <ModalChangeConfirmations
        visible={isVisible}
        closeHandler={handleClosePopUp}
      />
    </Card>
  );
}
