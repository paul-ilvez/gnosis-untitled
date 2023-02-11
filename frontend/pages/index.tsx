import Layout from "@/components/Layout";
import { ElementList, SafeElement } from "@/components";
import {Button, Col, Container, Grid, Row, Spacer, Text} from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Row justify={"center"}>
          <Col span={3}>
            <Spacer />
            <Text h2 size={31} weight="semibold" css={{ textAlign: "center" }}>
              Welcome to the Safe
            </Text>
            <Spacer />
            <Text
              size={18}
              color={"#878787"}
              weight="normal"
              css={{ lineHeight: "$sm", textAlign: "center" }}
            >
              The most trusted decentralized custody protocol and collective
              asset management platform.
            </Text>
            <Spacer />

            <Row justify={"center"}>
              <Link href="/create-safe">
                <Button color="primary" css={{ w: "362px", h: "40px" }}>
                    Create Safe
                </Button>
              </Link>
            </Row>
            <Spacer/>
            <Row justify={"center"}>
              <Link href="/load-safe" >
                <Button color="secondary" css={{ w: "362px", h: "40px"}}>
                  Add existing Safe.
                </Button>
              </Link>
            </Row>

            <Spacer y={3} />
            <Row justify={"center"}>
              <ElementList bgColor="#EFEFEF" title="My Safes">
                <SafeElement
                  safe={{
                    avatar: "/avatar-1.png",
                    balance: 100,
                    chain: "Ethereum",
                    address: "0xA01f...AA6A",
                    countOwners: 4,
                    countVoices: 2,
                    symbol: "eth",
                  }}
                />
                <SafeElement
                    safe={{
                        avatar: "/avatar-2.png",
                        balance: 15,
                        chain: "bsc",
                        address: "0xA016...BA6b",
                        countOwners: 5,
                        countVoices: 3,
                        symbol: "bnb",
                    }}
                />
              </ElementList>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
