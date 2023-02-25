import React from "react";
import { Button, Grid } from "@nextui-org/react";
import { prevScreen, nextScreen } from "@/store/slices/screenHanlderSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";

const StepButtons = ({ link }) => {
  const dispatch = useDispatch();

  const nextButton = (
    <Button
    onPress={() => (link ? {} : dispatch(nextScreen()))}
      css={{
        background: "#000",
        color: "#fff",
        width: "300px",
        maxWidth: "260px",
      }}
      auto
    >
      Next
    </Button>
  );

  return (
    <Grid.Container justify="space-between">
      <Button
        onPress={() => dispatch(prevScreen())}
        css={{ width: "100px" }}
        bordered
        color="#000"
        auto
      >
        Back
      </Button>
      {link ? <Link href={link}>{nextButton}</Link> : nextButton}
    </Grid.Container>
  );
};

export default StepButtons;
