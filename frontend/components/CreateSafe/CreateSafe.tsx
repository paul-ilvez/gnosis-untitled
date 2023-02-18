import React, { useContext } from "react";
import Layout from "@/components/Layout";
import SetOwners from "@/components/CreateSafe/Steps/SetOwners";
import Review from "@/components/CreateSafe/Steps/Review";
import { Screens } from "@/global";
import { AppContext, AppContextData } from "@/store/AppContext";

const screens: Screens = {
  owners: <SetOwners />,
  review: <Review />,
};

const CreateSafe = () => {
  const appCtx = useContext<AppContextData>(AppContext);
  const screen = screens[appCtx.createSafeStatus.status as keyof Screens];

  return <Layout>{screen}</Layout>;
};

export default CreateSafe;
