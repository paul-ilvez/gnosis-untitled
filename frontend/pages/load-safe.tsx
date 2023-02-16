import Layout from "@/components/Layout";
import { AppContext } from "@/store/AppContext";
import {
  Button,
  Card,
  Dropdown,
  Grid,
  Image,
  Input,
  Link,
  Spacer,
  Text,
  Tooltip,
} from "@nextui-org/react";
import React, { useContext } from "react";

export default function LoadSafe() {
  const appCtx = useContext(AppContext);

  return (
    <Layout>
      <Grid.Container gap={2} css={{ mt: 40 }} justify="center">
        <Card variant="bordered" css={{ mw: "450px", h: "$400" }}>
          <Card.Body css={{ textAlign: "center", padding: "40px" }}>
            <Text size="$3xl" b>
              Load Safe
            </Text>
            <Text size="$xl" color="#757575" b>
              Connect wallet & select network
            </Text>
            <Text size="$md" color="#9E9E9E">
              Select network on which the Safe was created Name
            </Text>
            <Spacer y={2} />
            <Grid.Container justify="space-between" alignItems="center">
              <Text color="primary" b>
                Network
              </Text>
              <Dropdown>
                <Dropdown.Button>{appCtx.appData.network.name}</Dropdown.Button>
                <></>
              </Dropdown>
            </Grid.Container>
            <Grid.Container direction="column">
              <Spacer y={2} />
              <Input
                labelPlaceholder="Name"
                contentRight={
                  <Tooltip
                    content={
                      "This name is stored locally and will never be shared with us or any third parties."
                    }
                  >
                    <Image src="/info.svg" width={24} height={24} />
                  </Tooltip>
                }
              />
              <Spacer y={2} />
              <Input labelPlaceholder="Safe address" />
              <Spacer y={2} />
              <Text>
                By continuing you consent to the <br />{" "}
                <Link href="#" color="text" isExternal>
                  {" "}
                  <b>terms of use</b>{" "}
                </Link>
                &nbsp; and &nbsp;{" "}
                <Link href="#" color="text" isExternal>
                  <b>privacy policy</b>
                </Link>
                .
              </Text>
              <Spacer y={3} />
              <Grid.Container justify="space-between">
                <Button css={{ width: "100px" }} bordered color="#000" auto>
                  Back
                </Button>
                <Button
                  css={{
                    background: "#000",
                    color: "#fff",
                    width: "300px",
                    maxWidth: "260px",
                  }}
                  auto
                >
                  Next
                </Button>
              </Grid.Container>
            </Grid.Container>
          </Card.Body>
        </Card>
      </Grid.Container>
    </Layout>
  );
}
