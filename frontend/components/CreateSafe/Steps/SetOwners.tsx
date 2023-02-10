import React, { useState } from "react";
import { Button, Card, Grid, Input, Spacer } from "@nextui-org/react";
import FormHeader from "@/components/Common/FormHeader";
import AccountCard from "@/components/Common/AccountCard";
import StepButtons from "@/components/LoadSafe/StepButtons";

const SetOwners = () => {
  const [owners, setOwners] = useState();

  return (
    <Grid.Container gap={2} css={{ mt: 40 }} justify="center">
      <Card variant="bordered" css={{ mw: "450px", h: "$400" }}>
        <Card.Body css={{ textAlign: "center", padding: "40px" }}>
          <FormHeader
            title={"Load Safe"}
            subTitle={"Owners and confirmations"}
            descrtiption={"Optional: Provide a name for each owner."}
          />
          <Spacer y={2} />
          <Grid.Container direction="column">
            <Input labelPlaceholder="Owner Name" />
            <AccountCard />
            <Spacer y={2} />
            <Input labelPlaceholder="Owner Name" />
            <AccountCard />
            <Spacer y={4} />
            <StepButtons />
          </Grid.Container>
        </Card.Body>
      </Card>
    </Grid.Container>
  );
};

export default SetOwners;
