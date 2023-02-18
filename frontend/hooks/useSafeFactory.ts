import { useContext, useEffect } from "react";
import { Contract, JsonRpcProvider } from "ethers";
import { SafeFactoryAbi } from "@/abi/SafeFactory";
import { AppContext, AppContextData } from "@/store/AppContext";

export const useSafeFactory = () => {
  const appCtx = useContext<AppContextData>(AppContext);

  useEffect(() => {
    (async () => {
      const url = "http://127.0.0.1:8545";
      const customHttpProvider = new JsonRpcProvider(url);

      const safeFactory = new Contract(
        "0x5fbdb2315678afecb367f032d93f642f64180aa3",
        SafeFactoryAbi,
        customHttpProvider
      );

      // await new Promise(async (resolve, reject) => {
      //   safeFactory.once("SafeCreated", async (from, to, value, event) => {
      //     console.log("SafeCreated event fired!");
      //     try {
      //       let transferEvent = {
      //         from: from,
      //         to: to,
      //         value: value,
      //         eventData: event,
      //       };
      //       console.log(JSON.stringify(transferEvent, null, 4));
      //
      //       resolve();
      //     } catch (error) {
      //       console.log(error);
      //       reject(error);
      //     }
      //   });
      // });

      appCtx.setSafeFactory(safeFactory);
    })();
  }, []);
};
