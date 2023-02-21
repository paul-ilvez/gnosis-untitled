import { Card, Text, Badge, Grid, Row, Link } from "@nextui-org/react";
import { SafeElementProps } from "@/components/SafeElement/SafeElement.props";
import React, {useContext} from "react";
import MenuBtn from "./menuBtn.svg";
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'
import getShortAddress from '@/libs/shortenAddress'
import {ethers, formatEther, toBigInt} from "ethers";
import {AppContext} from "@/store/AppContext";
import {findNetworkById} from "@/components/SafeList/Networks";
import NextLink from "next/link";

export const SafeElement = (safe: SafeElementProps): JSX.Element => {
  const {setCurrentSafe} = useContext(AppContext)

  const { quorum, countOwners, address, balance, chainId } =
    safe;
  const {shortName, symbol} = findNetworkById(chainId)
  return (
    <NextLink href={`/safes/${address}`}>
      <Card isPressable css={{ mt: "10px", br: "50px" }} variant={"bordered"}>
        <Card.Body>
          <Row
            justify={"space-between"}
            wrap={"nowrap"}
            align={"center"}
            css={{ pr: "5px" }}
          >
            <Badge
              disableOutline
              content={quorum + "/" + countOwners}
              size="xs"
            >
              <Jazzicon diameter={30} seed={jsNumberForAddress(address)} />
            </Badge>
            <Grid>
              <Text b css={{ mr: "5px" }}>
                {shortName}:
              </Text>
              <Text span>{getShortAddress(address)}</Text>
            </Grid>
            <Badge>
              {formatEther(toBigInt(balance))} {symbol.toUpperCase()}
            </Badge>

            <Grid.Container justify={"center"} css={{ w: "10px" }}>
              <MenuBtn />
            </Grid.Container>
          </Row>
        </Card.Body>
      </Card>
    </NextLink>
  );
};
