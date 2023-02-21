import { Card, Text, Badge, Grid, Row, Link } from "@nextui-org/react";
import { SafeElementProps } from "@/components/SafeElement/SafeElement.props";
import React from "react";
import MenuBtn from "./menuBtn.svg";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import getShortAddress from "@/libs/shortenAddress";
import { ethers, formatEther, toBigInt } from "ethers";
import NextLink from "next/link";

export const SafeElement = (safe: SafeElementProps): JSX.Element => {
  const {
    countVoices,
    countOwners,
    symbol,
    address,
    balance,
    chain,
    shortName,
  } = safe;
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
              content={countVoices + "/" + countOwners}
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
            <Link
              block
              color="primary"
              href="#"
              css={{ textAlign: "center", alignItems: "center" }}
            >
              <Grid.Container justify={"center"} css={{ w: "10px" }}>
                <MenuBtn />
              </Grid.Container>
            </Link>
          </Row>
        </Card.Body>
      </Card>
    </NextLink>
  );
};
