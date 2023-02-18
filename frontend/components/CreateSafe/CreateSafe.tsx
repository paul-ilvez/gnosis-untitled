import React, { useContext, useEffect } from "react";
import Layout from "@/components/Layout";
import SetOwners from "@/components/CreateSafe/Steps/SetOwners";
import Review from "@/components/CreateSafe/Steps/Review";
import { Screens } from "@/global";
import { AppContext, AppContextData } from "@/store/AppContext";
import GenerateSafe from "@/components/CreateSafe/Steps/GenerateSafe";

const screens: Screens = {
  owners: <SetOwners />,
  review: <Review />,
  generate: <GenerateSafe />,
};

const CreateSafe = () => {
  const appCtx = useContext<AppContextData>(AppContext);
  const screen = screens[appCtx.createSafeStatus.status as keyof Screens];

  return <Layout>{screen}</Layout>;
};

export default CreateSafe;
