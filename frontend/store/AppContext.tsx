import { undefinedNetwork } from "@/components/SafeList/Networks";
import type { Network } from "@/components/SafeList/Networks";
import React from "react";
import { createContext, useState } from "react";

export type AppData = {
  network: Network;
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
  appData: {
    network: undefinedNetwork,
  },
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
  const [appData, setAppData] = useState({ network: undefinedNetwork });

  const [currentMenuSection, setCurrentMenuSection] = useState({
    title: "Transactions",
  });

  const [transactionsSection, setTransactionsSection] = useState({
    type: "Queue",
  });

  const [createSafeStatus, setCreateSafeStatus] = useState({ status: "init" });

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

  const setCreateSafeStatusHandler = (_status: CreateSafeStatus) => {
    setCreateSafeStatus(_status);
  };

  const context: AppContextData = {
    appData,
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
