import React from "react";
import Layout from "@/components/Layout";
import SetOwners from "@/components/LoadSafe/Steps/SetOwners";
import Review from "@/components/LoadSafe/Steps/Rewiev";
import { useSelector } from "react-redux";
import InitSafe from "@/components/CreateSafe/Steps/InitSafe";

const screens = {
  1: <InitSafe />,
  2: <SetOwners />,
  3: <Review />,
};

const CreateSafe = () => {
  const counter = useSelector((state) => state.screenHandler.value);

  return <Layout>{screens[counter]}</Layout>;
};

export default CreateSafe;
