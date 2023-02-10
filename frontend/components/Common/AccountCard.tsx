import React from "react";
import { Avatar, Card, Grid, Image, Spacer, Text } from "@nextui-org/react";
import LinkAndCopy from "@/components/Common/LinkAndCopy";

const AccountCard = () => {
  return (
    <Card variant="bordered" css={{ mw: "400px" }}>
      <Card.Body>
        <Grid.Container
          direction="flex"
          wrap="no-wrap"
          alignItems="space-between"
        >
          <Grid.Container>
            <Avatar text="JR" size="sm" />
            <Spacer />
            <Text>
              <b>gor:</b> 0xA01f...AA6A
            </Text>
          </Grid.Container>
          <LinkAndCopy />
        </Grid.Container>
      </Card.Body>
    </Card>
  );
};

export default AccountCard;
