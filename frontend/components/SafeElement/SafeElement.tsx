import {Card, Text, Image, Badge, Avatar, Grid} from "@nextui-org/react";
import {SafeElementProps} from '@/components/SafeElement/SafeElement.props'
import React from "react";

export const SafeElement = ({avatar}: SafeElementProps):JSX.Element => {
  return (
    <Card isPressable >
      <Card.Body>
        <Grid>
          <Badge disableOutline content="1/3" size="xs">
            <Avatar
              rounded
              size="md"
              src={avatar}
            />
          </Badge>
        </Grid>
      </Card.Body>
    </Card>
  )
}