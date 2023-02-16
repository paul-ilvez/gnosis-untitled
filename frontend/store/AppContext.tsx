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

  transactionsSection: TransactionsSection;
  setTransactionsSectionHandler: (
    _transactionsSection: TransactionsSection
  ) => void;
};

export type CurrentMenuSection = {
  title: string;
};
export type TransactionsSection = {
  type: string;
};
export const AppContext = createContext<AppContextData>({
  appData: { network: "UNDEFINED_NETWORK" },
  setAppDataHandler: (_appData: AppData) => {},
  currentMenuSection: { title: "Transations" },
  setCurrentMenuSectionHandler: (_currentMenuSection: CurrentMenuSection) => {},
  transactionsSection: { type: "Queue" },
  setTransactionsSectionHandler: (
    _transactionsSection: TransactionsSection
  ) => {},
});

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [appData, setAppData] = useState({ network: "UNDEFINED_NETWORK" });
  const [currentMenuSection, setCurrentMenuSection] = useState({
    title: "Transactions",
  });
  const [transactionsSection, setTransactionsSection] = useState({
    type: "Queue",
  });

  function setAppDataHandler(_appData: AppData) {
    setAppData(_appData);
  }

  function setCurrentMenuSectionHandler(
    _currentMenuSection: CurrentMenuSection
  ) {
    setCurrentMenuSection(_currentMenuSection);
  }

  function setTransactionsSectionHandler(
    _transactionsSection: TransactionsSection
  ) {
    setTransactionsSection(_transactionsSection);
  }

  const context: AppContextData = {
    appData: appData,
    setAppDataHandler: setAppDataHandler,
    currentMenuSection: currentMenuSection,
    setCurrentMenuSectionHandler: setCurrentMenuSectionHandler,
    transactionsSection: transactionsSection,
    setTransactionsSectionHandler: setTransactionsSectionHandler,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

export default ContextProvider;
