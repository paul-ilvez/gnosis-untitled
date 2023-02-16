import React, {useContext, useEffect} from "react";
import Layout from "@/components/Layout";
import SetOwners from "@/components/LoadSafe/Steps/SetOwners";
import Review from "@/components/LoadSafe/Steps/Review";
import { useSelector } from "react-redux";
import InitSafe from "@/components/CreateSafe/Steps/InitSafe";
import { Screens } from "@/global";
import {Contract, JsonRpcProvider} from "ethers";
import {SafeFactory} from "@/abi/SafeFactory";
import {AppContext, AppContextData} from "@/store/AppContext";

const screens: Screens = {
  "init": <InitSafe />,
  "owners": <SetOwners />,
  "review": <Review />,
};

const CreateSafe = () => {
  const appCtx = useContext<AppContextData>(AppContext);

  const screen = screens[appCtx.createSafeStatus.status as keyof Screens];


  useEffect(() => {
    (async () => {
      const url = "http://127.0.0.1:8545"
      const customHttpProvider = new JsonRpcProvider(url);

      const safeFactory = new Contract(
          "0x5fbdb2315678afecb367f032d93f642f64180aa3",
          SafeFactory,
          customHttpProvider
      );

      const safesCount = await safeFactory.safesCount()
      const numberSafes = await safeFactory.getNumberOfSafes()

      console.log('safesCount: ', safesCount)
      console.log('numberSafes: ', numberSafes)
      console.log('contract: ', safeFactory)
    })()


  }, [])

  return <Layout>{screen}</Layout>;
};

export default CreateSafe;
