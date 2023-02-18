import {Container, Row, Card, Text, Button, Collapse} from "@nextui-org/react";
import { SafeListProps } from "@/components/SafeList/SafeList.props";
import VectorSvg from "./vector.svg";
import {SafeElement} from "@/components";
import {useEffect, useState} from "react";
import Account from "@/db/repository";
import {findNetworkById} from "@/components/SafeList/Networks";
import {ethers} from "ethers";


export const SafeList = ({
  children,
  bgColor = "#EFEFEF",
  title
}: SafeListProps): JSX.Element => {
  const [mySafes, setMySafes] = useState({})

  useEffect(()=> {
    (async ()=>{
      const account = new Account('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
      await account.loadSafes()
      setMySafes(account.safes)
    })()
  }, [])


  return (
    <Card
      variant={"flat"}
      css={{ backgroundColor: bgColor, minWidth:"440px" }}
    >
      <Card.Header>
        <Container>
          <Row justify={"space-between"} align={"center"}>
            <Text h3>{title}</Text>
            <VectorSvg />
          </Row>
        </Container>
      </Card.Header>
      <Card.Divider />
      <Card.Body css={{ py: "$10" }}>
        <Container>
          <Collapse.Group shadow divider={false} accordion={false}>
            {Object.keys(mySafes).map(chainId => {
              const chain = findNetworkById(chainId)
              return (
                <Collapse title={chain.name} expanded={true} key={chainId}>
                  {mySafes[chainId].map(safe => {
                    return (
                      <SafeElement
                        key={safe.address}
                        balance={safe.balance}
                        chain={safe.chainId}
                        address={safe.address}
                        countOwners={3}
                        countVoices={1}
                        shortName={chain.shortName}
                        symbol={chain.symbol}
                      />
                    )
                  })}
                </Collapse>
              )
            })}
          </Collapse.Group>
        </Container>
      </Card.Body>
    </Card>
  );
};
