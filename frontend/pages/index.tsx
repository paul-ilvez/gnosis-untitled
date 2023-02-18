import Layout from "@/components/Layout";
import { SafeList } from "@/components";
import { Button, Col, Container, Row, Spacer, Text } from "@nextui-org/react";
import Link from "next/link";

import safes from "@/mocks/safes";

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
                <Button color="gradient" css={{ w: "362px", h: "40px" }}>
                  Create Safe
                </Button>
              </Link>
            </Row>
            <Spacer />
            {/*<Row justify={"center"}>*/}
            {/*  <Link href="/load-safe">*/}
            {/*    <Button color="secondary" css={{ w: "362px", h: "40px" }}>*/}
            {/*      Add existing Safe.*/}
            {/*    </Button>*/}
            {/*  </Link>*/}
            {/*</Row>*/}

            <Spacer />
            <Row justify={"center"}>
              <SafeList bgColor="#EFEFEF" title="My Safes" />
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
