import Layout from "@/components/Layout/Layout";
import { SafeList } from "@/components";
import Snowfall from "react-snowfall";
import { Button, Col, Container, Row, Spacer, Text } from "@nextui-org/react";

import NextLink from "next/link";
import { useContext } from "react";
import { AppContext } from "@/store/AppContext";

export default function Home() {
  const { logoClickedCounter } = useContext(AppContext);
  return (
    <Layout>
      {logoClickedCounter > 7 && <Snowfall />}
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
              The trusted decentralized custody protocol and collective asset
              management platform.
            </Text>
            <Spacer />

            <Row justify={"center"}>
              <NextLink href={"/create-safe/"}>
                <Button color="gradient" css={{ w: "362px", h: "40px" }}>
                  Create Safe
                </Button>
              </NextLink>
            </Row>
            <Spacer />
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
