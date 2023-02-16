import React from "react";
import { createContext, useState } from "react";

export type AppData = {
  network: string;
};

export type AppContextData = {
  appData: AppData;
  setAppDataHandler: (_appData: AppData) => void;
  currentMenuSection: CurrentMenuSection;
  setCurrentMenuSectionHandler: (
    _currentMenuSection: CurrentMenuSection
  ) => void;
};

export type CurrentMenuSection = {
  title: string;
};

export const AppContext = createContext<AppContextData>({
  appData: { network: "UNDEFINED_NETWORK" },
  setAppDataHandler: (_appData: AppData) => {},
  currentMenuSection: { title: "Transations" },
  setCurrentMenuSectionHandler: (_currentMenuSection: CurrentMenuSection) => {},
});

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [appData, setAppData] = useState({ network: "UNDEFINED_NETWORK" });
  const [currentMenuSection, setCurrentMenuSection] = useState({
    title: "Transactions",
  });

  function setAppDataHandler(_appData: AppData) {
    setAppData(_appData);
  }

  function setCurrentMenuSectionHandler(
    _currentMenuSection: CurrentMenuSection
  ) {
    setCurrentMenuSection(_currentMenuSection);
  }

  const context: AppContextData = {
    appData: appData,
    setAppDataHandler: setAppDataHandler,
    currentMenuSection: currentMenuSection,
    setCurrentMenuSectionHandler: setCurrentMenuSectionHandler,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

export default ContextProvider;
