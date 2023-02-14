import React from "react";
import { createContext, useState } from "react";

export type AppData = {
  network: string;
};

export type AppContextData = {
  appData: AppData;
  setAppDataHandler: (_appData: AppData) => void;
};

export const AppContext = createContext<AppContextData>({
  appData: { network: "UNDEFINED_NETWORK" },
  setAppDataHandler: (_appData: AppData) => {},
});

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [appData, setAppData] = useState({ network: "UNDEFINED_NETWORK" });

  function setAppDataHandler(_appData: AppData) {
    setAppData(_appData);
  }

  const context: AppContextData = {
    appData: appData,
    setAppDataHandler: setAppDataHandler,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

export default ContextProvider;
