import React from "react";
import Layout from "@/components/Layout/Layout";
import ConnectSafe from "@/components/LoadSafe/Steps/ConnectSafe";
import SetOwners from "@/components/LoadSafe/Steps/SetOwners";
import Review from "@/components/LoadSafe/Steps/Review";
import { useSelector } from "react-redux";
import { Screens } from "@/global";

const screens: Screens = {
  1: <ConnectSafe />,
  2: <SetOwners />,
  3: <Review />,
};

const LoadSafe = () => {
  const counter = useSelector((state) => state.screenHandler.value) as number;

  console.log(counter);

  return <Layout>{screens[counter]}</Layout>;
};

export default LoadSafe;
