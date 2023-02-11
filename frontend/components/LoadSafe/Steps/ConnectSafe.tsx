import React from "react";
import {
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
import FormHeader from "@/components/Common/FormHeader";
import StepButtons from "@/components/LoadSafe/StepButtons";

const ConnectSafe = () => {
  return (
    <Grid.Container gap={2} css={{ mt: 40 }} justify="center">
      <Card variant="bordered" css={{ mw: "450px", h: "$400" }}>
        <Card.Body css={{ textAlign: "center", padding: "40px" }}>
          <FormHeader
            title={"Create new Safe"}
            subTitle={"Connect wallet & select network"}
            description={"Select network on which the Safe was created Name"}
          />
          <Spacer y={2} />
          <Grid.Container justify="space-between" alignItems="center">
            <Text color="primary" b>
              Network
            </Text>
            <Dropdown>
              <Dropdown.Button>Goerli</Dropdown.Button>
            </Dropdown>
          </Grid.Container>
          <Grid.Container direction="column">
            <Spacer y={2} />
            <Input
              labelPlaceholder="Name"
              contentRight={
                <Tooltip
                  content={
                    "This name is stored locally and" +
                    " will never be shared with us or any third parties."
                  }
                >
                  <Image src="/info.svg" width={24} height={24} />
                </Tooltip>
              }
            />
            <Spacer y={2} />
            <Text>
              By continuing you consent to the <br />{" "}
              <Link href="#" color="text" isExternal>
                <b>terms of use</b>
              </Link>
              &nbsp; and &nbsp;
              <Link href="#" color="text" isExternal>
                <b>privacy policy</b>
              </Link>
              .
            </Text>
            <Spacer y={3} />
            <StepButtons />
          </Grid.Container>
        </Card.Body>
      </Card>
    </Grid.Container>
  );
};

export default ConnectSafe;
