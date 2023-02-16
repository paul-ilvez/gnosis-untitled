import { undefinedNetwork } from "@/components/SafeList/Networks";
import type { Network } from "@/components/SafeList/Networks";
import React, { useEffect } from "react";
import { createContext, useState } from "react";

export type CreateSafeStatus = {
  status: "init" | "owners" | "review" | "generate";
};

export type AppContextData = {
  network: Network;
  setNetwork: (_network: Network) => void;

  account: string;
  setAccount: (_account: string) => void;

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
  network: undefinedNetwork,
  setNetwork: (_network: Network) => {},
  account: "",
  setAccount: (_account: string) => {},
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
  const [network, _setNetwork] = useState(undefinedNetwork);
  const [account, _setAccount] = useState("0x0");

  const [currentMenuSection, setCurrentMenuSection] = useState({
    title: "Transactions",
  });

  const [transactionsSection, setTransactionsSection] = useState({
    type: "Queue",
  });

  const [createSafeStatus, setCreateSafeStatus] = useState({ status: "init" });

  function setNetwork(_network: Network) {
    _setNetwork(_network);
  }

  function setAccount(_account: string) {
    _setAccount(_account);
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
    network,
    setNetwork,
    account,
    setAccount,
    currentMenuSection,
    setCurrentMenuSectionHandler,
    transactionsSection,
    setTransactionsSectionHandler,
    createSafeStatus: createSafeStatus,
    setCreateSafeStatusHandler,
  };

  useEffect(() => {
    console.log("calling useEffect from context");
  }, []);

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

export default ContextProvider;
