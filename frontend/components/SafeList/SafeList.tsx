import {
  Container,
  Row,
  Card,
  Text,
  Button,
  Collapse,
  Spacer,
} from "@nextui-org/react";
import { SafeListProps } from "@/components/SafeList/SafeList.props";
import VectorSvg from "./vector.svg";
import { SafeElement } from "@/components";
import { useContext, useEffect, useState } from "react";
import { getSafes } from "@/db/repository";
import { findNetworkById } from "@/components/SafeList/Networks";
import groupBy from "@/libs/groupArrayBy";
import { AppContext } from "@/store/AppContext";
import { v4 as uuidv4 } from "uuid";

export const SafeList = ({
  bgColor = "#EFEFEF",
  title,
}: SafeListProps): JSX.Element => {
  const [mySafes, setMySafes] = useState({});
  const { account } = useContext(AppContext);

  useEffect(() => {
    if (account == "0x0") {
      return;
    }
    (async () => {
      const safes = await getSafes(account);
      const groupedSafes = groupBy("chainId")(safes);
      setMySafes(groupedSafes);
      console.log({ account });
      console.log({ safes });``
    })();
  }, [account]);

  return (
    <Card
      variant={"flat"}
      css={{ backgroundColor: bgColor, minWidth: "440px" }}
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
            {Object.keys(mySafes).map((chainId) => {
              return (
                <Collapse
                  title={findNetworkById(chainId).name}
                  expanded={true}
                  key={uuidv4()}
                >
                  {mySafes[chainId].map((safe) => {
                    return (
                      <>
                        <SafeElement
                          key={safe.address}
                          balance={safe.balance}
                          chainId={safe.chainId}
                          address={safe.address}
                          countOwners={safe.signers.length}
                          quorum={safe.quorum}
                        />
                        <Spacer />
                      </>
                    );
                  })}
                </Collapse>
              );
            })}
          </Collapse.Group>
        </Container>
      </Card.Body>
    </Card>
  );
};
