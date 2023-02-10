import React from "react";
import Layout from "@/components/Layout";
import ConnectSafe from "@/components/LoadSafe/Steps/ConnectSafe";
import SetOwners from "@/components/LoadSafe/Steps/SetOwners";
import Review from "@/components/LoadSafe/Steps/Rewiev";
import { useSelector } from "react-redux";

const screens = {
  1: <ConnectSafe />,
  2: <SetOwners />,
  3: <Review />,
};

const LoadSafe = () => {
  const counter = useSelector((state) => state.screenHandler.value);

  console.log(counter);

  return <Layout>{screens[counter]}</Layout>;
};

export default LoadSafe;
