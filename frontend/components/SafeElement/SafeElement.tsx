import {Card, Text, Image, Badge, Avatar, Grid, Container, Row, Link} from "@nextui-org/react";
import {SafeElementProps} from '@/components/SafeElement/SafeElement.props'
import React from "react";
import MenuBtn from './menuBtn.svg';

export const SafeElement = ({safe}: SafeElementProps):JSX.Element => {
  const {avatar, countVoices, countOwners, symbol, address, balance, chain} = safe
  return (
    <Card isPressable css={{mt: '10px', br: '50px'}} variant={"bordered"}>
      <Card.Body>
        <Row justify={"space-between"} wrap={"nowrap"} align={"center"} css={{pr: '5px'}}>
          <Badge disableOutline content={countVoices + "/" + countOwners} size="xs">
            <Avatar
              rounded
              size="sm"
              src={avatar}
            />
          </Badge>
          <Grid>
            <Text b css={{mr: "5px"}}>{symbol}:</Text>
            <Text span>{address}</Text>
          </Grid>
          <Badge>{balance} {symbol.toUpperCase()}</Badge>
          <Link block color="primary" href="#" css={{d: 'flex'}}>
            <MenuBtn width="8px"/>
          </Link>

        </Row>
      </Card.Body>
    </Card>
  )
}