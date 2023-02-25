import { Card, Spacer, Row, Col, Grid } from "@nextui-org/react";
import { SafeElement } from "@/components";
import ButtonsMenu from "./ButtonsMenu";
import AssetsCounter from "./AssetsCounter";
import NewTransactionButton from "./NewTransactionButton";
import { useContext, useEffect, useState } from "react";
import { BrowserProvider } from "ethers";
import { AppContext } from "@/store/AppContext";
import ModalNewTransaction from "./SendTransaction/ModalNewTransaction";
import LinkAndCopy from "../Common/LinkAndCopy";
import {chain} from "@react-aria/utils";
import {Network} from "@/components/SafeList/Networks";

export default function HomeSafeMenu() {
  const {
    provider,
    currentSafe,
    connected
  }: {
    provider: BrowserProvider;
    currentSafe: GnosisUntitled;
    connected: boolean;
  } = useContext(AppContext);

  const [isVisible, setVisible] = useState(false);
  const [balance, setBalance] = useState<number>(0);
  const [quorum, setQuorum] = useState<number>(0);
  const [numOfSigners, setNumOfSigners] = useState<number>(0);
  const [contractAddress, setContractAddress] = useState<string>("UNKNOWN");
  const [chain, setChain] = useState<string>(0)
  const Buttons = [
    {
      id: 1,
      title: "Transactions",
      icon: "/Transactions.svg",
    },
    { id: 2, title: "Assets", icon: "/Assets.svg" },
    {
      id: 3,
      title: "Setup",
      icon: "/AddressBook.svg",
    },
  ];

  const handleClickModalTransaction = () => {
    setVisible(true);
  };

  const handleCloseModalNewTransaction = () => {
    setVisible(false);
  };

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
      const tempAddress = currentSafe.target;
      const tempBalance = Number(await provider.getBalance(tempAddress));
      const tempChain = await  provider.getNetwork(tempAddress)

      console.log({ tempChain });

      setChain(BigInt(tempChain.chainId))
      setContractAddress(tempAddress);
      setBalance(tempBalance);
      setQuorum(tempQuorum);
      setNumOfSigners(tempNumOfSigners);
    })();
  }, [currentSafe, provider, connected]);

  return (
    <Card
      variant="bordered"
      css={{ h: "499px", mw: "421px", borderRadius: "39px" }}
    >
      <Card.Header>
        <Col>
          <SafeElement // { quorum, countOwners, address, balance, chainId }
            balance={balance}
            address={contractAddress}
            countOwners={numOfSigners}
            quorum={quorum}
            chainId={chain}
          />
          <Spacer y={0.5} />
          <Row align="center" justify="space-between">
            <AssetsCounter />
            <LinkAndCopy address={contractAddress} />
          </Row>
          <Spacer y={2} />
          <Row align="center" justify="center">
            <NewTransactionButton
              visible={isVisible}
              handler={handleClickModalTransaction}
            />
          </Row>
        </Col>
      </Card.Header>
      <Spacer y={0.5} />
      <Card.Divider />
      <Card.Body css={{ justifyContent: "center" }}>
        <Grid.Container gap={2} justify="center" alignItems="center">
          {...Buttons.map((button) => (
            <Grid key={button.id} direction="column" alignItems="center">
              <ButtonsMenu
                key={button.id}
                title={button.title}
                icon={button.icon}
              />
            </Grid>
          ))}
        </Grid.Container>
      </Card.Body>
      <ModalNewTransaction
        visible={isVisible}
        closeHandler={handleCloseModalNewTransaction}
      />
    </Card>
  );
}
