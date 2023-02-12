import {Container, Row, Card, Text, Button, Collapse} from "@nextui-org/react";
import { SafeListProps } from "@/components/SafeList/SafeList.props";
import VectorSvg from "./vector.svg";
import {SafeElement} from "@/components";

export const SafeList = ({
  children,
  bgColor = "#EFEFEF",
  title,
  safes
}: SafeListProps): JSX.Element => {
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
            <Collapse title={"gorlie"} expanded={true}>
            {...safes.map((safe)=>(
              <SafeElement
                key={safe.address}
                avatar={safe.avatar}
                balance={safe.balance}
                chain={safe.chain}
                address={safe.address}
                countOwners={safe.countOwners}
                countVoices={safe.countVoices}
                symbol={safe.symbol}
              />
            ))
            }
            </Collapse>
            <Collapse title={"etherium"} expanded={true}>
              {...safes.map((safe)=>(
                <SafeElement
                  key={safe.address}
                  avatar={safe.avatar}
                  balance={safe.balance}
                  chain={safe.chain}
                  address={safe.address}
                  countOwners={safe.countOwners}
                  countVoices={safe.countVoices}
                  symbol={safe.symbol}
                />
              ))
              }
            </Collapse>
          </Collapse.Group>
        </Container>
      </Card.Body>
    </Card>
  );
};
