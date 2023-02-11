import React, { useState } from "react";
import { Button, Card, Grid, Input, Spacer, Text } from "@nextui-org/react";
import FormHeader from "@/components/Common/FormHeader";
import StepButtons from "@/components/CreateSafe/StepButtons";

const SetOwners = () => {
  const [owners, setOwners] = useState();

  return (
    <Grid.Container gap={2} css={{ mt: 40 }} justify="center">
      <Card variant="bordered" css={{ mw: "450px", h: "$400" }}>
        <Card.Body css={{ textAlign: "center", padding: "40px" }}>
          <FormHeader
            title={"Create new Safe"}
            subTitle={"Owners and confirmations"}
            description={"Optional: Provide a name for each owner."}
          />
          <Spacer y={2} />
          <Card variant="bordered" css={{ padding: "40px" }}>
            <Input labelPlaceholder="Owner Name" />
            <Spacer y={2} />
            <Input labelPlaceholder="Owner Address or ENS" />
          </Card>
          <Button light auto>
            + Add new owner
          </Button>
          <Spacer y={2} />
          <Grid css={{ textAlign: "left" }}>
            <Text size="$2xl" b>
              Treshold
            </Text>
            <Text size="$md" color="#9E9E9E">
              Any transaction requires the confirmation of:
            </Text>
            <Spacer />
            <Input label="Number" type="number" />
            <Spacer />
          </Grid>
          <StepButtons />
        </Card.Body>
      </Card>
    </Grid.Container>
  );
};

export default SetOwners;
