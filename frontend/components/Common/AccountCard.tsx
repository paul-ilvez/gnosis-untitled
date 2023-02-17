import React from "react";
import { Avatar, Card, Grid, Image, Spacer, Text } from "@nextui-org/react";
import LinkAndCopy from "@/components/Common/LinkAndCopy";
import getLittleAddress from "@/libs/getLittleAdrress";

const AccountCard = ({ address }: { address: string }) => {
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
              <b>gor:</b> {getLittleAddress(address)}
            </Text>
          </Grid.Container>
          <LinkAndCopy address={address} />
        </Grid.Container>
      </Card.Body>
    </Card>
  );
};

export default AccountCard;
