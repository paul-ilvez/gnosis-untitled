import React from "react";
import { Avatar, Card, Grid, Image, Spacer, Text } from "@nextui-org/react";
import LinkAndCopy from "@/components/Common/LinkAndCopy";
import getLittleAddress from "@/libs/getLittleAdrress";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

const AccountCard = ({ address }: { address: string }) => {
  return (
    <Card variant="bordered" css={{ mw: "260px" }}>
      <Card.Body>
        <Grid.Container
          direction="flex"
          wrap="no-wrap"
          alignItems="space-between"
        >
          <Grid.Container>
            <Jazzicon diameter={30} seed={jsNumberForAddress(address)} />
            <Text>
              <b>&nbsp; gor:</b> {getLittleAddress(address)}
            </Text>
          </Grid.Container>
          <LinkAndCopy address={address} />
        </Grid.Container>
      </Card.Body>
    </Card>
  );
};

export default AccountCard;
