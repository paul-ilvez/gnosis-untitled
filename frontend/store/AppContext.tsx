import React, { useEffect } from "react";
import { createContext, useState } from "react";

export type AppData = {
  network: string;
  account: string | null;
};

export type CreateSafeStatus = {
  status: "init" | "owners" | "review" | "generate";
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

  createSafeStatus: CreateSafeStatus;
  setCreateSafeStatusHandler: (_createSafeStatus: CreateSafeStatus) => void;
};

export type CurrentMenuSection = {
  title: string;
};
export type TransactionsSection = {
  type: string;
};
export const AppContext = createContext<AppContextData>({
  appData: { network: "UNDEFINED_NETWORK", account: "UNDEFINED_ACCOUNT" },
  setAppDataHandler: (_appData: AppData) => {},
  currentMenuSection: { title: "Transations" },
  setCurrentMenuSectionHandler: (_currentMenuSection: CurrentMenuSection) => {},
  transactionsSection: { type: "Queue" },
  setTransactionsSectionHandler: (
    _transactionsSection: TransactionsSection
  ) => {},

  createSafeStatus: { status: "init" },
  setCreateSafeStatusHandler: (_createSafeStatus: CreateSafeStatus) => {},
});

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [appData, setAppData] = useState({ network: "UNDEFINED_NETWORK" });

  const [currentMenuSection, setCurrentMenuSection] = useState({
    title: "Transactions",
  });

  const [transactionsSection, setTransactionsSection] = useState({
    type: "Queue",
  });

  const [createSafeStatus, setCreateSafeStatus] = useState({ status: "init" });

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("login")) {
      setAppDataHandler({ account: sessionStorage.getItem("login") });
    }
  }, []);

  function setAppDataHandler(_appData: AppData) {
    setAppData((prevAppData) => ({ ...prevAppData, ..._appData}));
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

  const setCreateSafeStatusHandler = (_status: CreateSafeStatus) => {
    setCreateSafeStatus(_status);
  };

  const context: AppContextData = {
    appData: appData,
    setAppDataHandler: setAppDataHandler,
    currentMenuSection: currentMenuSection,
    setCurrentMenuSectionHandler: setCurrentMenuSectionHandler,
    transactionsSection: transactionsSection,
    setTransactionsSectionHandler: setTransactionsSectionHandler,
    createSafeStatus: createSafeStatus,
    setCreateSafeStatusHandler: setCreateSafeStatusHandler,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

export default ContextProvider;
