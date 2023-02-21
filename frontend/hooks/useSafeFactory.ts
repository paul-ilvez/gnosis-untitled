import { useContext, useEffect } from "react";
import { Contract, JsonRpcProvider } from "ethers";
import { SafeFactoryAbi } from "@/abi/SafeFactory";
import { AppContext } from "@/store/AppContext";

export const useSafeFactory = () => {
  const appCtx = useContext(AppContext);

  useEffect(() => {
    (async () => {
      const url = "http://127.0.0.1:8545";
      const customHttpProvider = new JsonRpcProvider(url);

      const safeFactory = new Contract(
        "0x1Ef5550D3b9b9e8637A0B7b8F44B739D96F3dB59",
        SafeFactoryAbi,
        customHttpProvider
      );

      appCtx.setSafeFactory(safeFactory);
    })();
  }, []);
};
