import React from "react";
import Layout from "@/components/Layout";
import SetOwners from "@/components/LoadSafe/Steps/SetOwners";
import Review from "@/components/LoadSafe/Steps/Review";
import { useSelector } from "react-redux";
import InitSafe from "@/components/CreateSafe/Steps/InitSafe";
import { Screens } from "@/global";

const screens: Screens = {
  1: <InitSafe />,
  2: <SetOwners />,
  3: <Review />,
};

const CreateSafe = () => {
  const counter = useSelector((state) => state.screenHandler.value) as number;
  const screen = screens[counter as keyof Screens];

  return <Layout>{screen}</Layout>;
};

export default CreateSafe;
