import { useContext, useEffect } from "react";
import { Contract, JsonRpcProvider } from "ethers";
import { SafeFactory } from "@/abi/SafeFactory";
import { AppContext, AppContextData } from "@/store/AppContext";

export const useLoadSafeFactory = () => {
  const appCtx = useContext<AppContextData>(AppContext);

  useEffect(() => {
    (async () => {
      const url = "http://127.0.0.1:8545";
      const customHttpProvider = new JsonRpcProvider(url);

      const safeFactory = new Contract(
        "0x5fbdb2315678afecb367f032d93f642f64180aa3",
        SafeFactory,
        customHttpProvider
      );

      appCtx.setSafeFactory(safeFactory);
    })();
  }, []);
};
