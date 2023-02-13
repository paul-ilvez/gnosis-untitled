import Layout from "@/components/Layout";
import { Inter } from "@next/font/google";
import { Grid, Card, Text, Spacer, Row, Col, Button } from "@nextui-org/react";
import HomeSafeMenu from "@/components/HomeSafe/HomeSafeMenu";

export default function HomeSafe() {
  return (
    <Layout>
      <Grid.Container css={{ mt: "40px" }} justify="center" alignItems="center">
        <Grid xs={5} md={5} alignItems="center" justify="flex-end">
          <HomeSafeMenu />
        </Grid>
        <Spacer x={1.85} />
        <Grid
          xs={5}
          md={5}
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <Card variant="bordered" css={{ h: "214px", mw: "522px" }}>
            <Card.Body>
              <Text h6 size={15} color="black" css={{ m: 0 }}>
                1 of 2
              </Text>
            </Card.Body>
          </Card>
          <Spacer y={1.85} />
          <Card variant="bordered" css={{ h: "364px", mw: "522px" }}>
            <Card.Body>
              <Text h6 size={15} color="black" css={{ m: 0 }}>
                1 of 3
              </Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
}
