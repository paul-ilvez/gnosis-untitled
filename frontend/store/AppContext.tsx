import { undefinedNetwork } from "@/components/SafeList/Networks";
import type { Network } from "@/components/SafeList/Networks";
import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { FormOwners } from "@/components/LoadSafe/Steps/SetOwners";

export type CreateSafeStatus = {
  status: "init" | "owners" | "review" | "generate";
};

export type NewSafeForm = {
  name: string;
  network: Network;
  owners: FormOwners[];
  quorum: string;
};

export type AppContextData = {
  network: Network;
  setNetwork: (_network: Network) => void;

  account: string;
  setAccount: (_account: string) => void;

  isEthereum: boolean;
  setIsEthereum: (_isEthereum: boolean) => void;

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
  newSafeForm: NewSafeForm;
  setNewSafeForm: (_form: NewSafeForm) => void;
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
  newSafeForm: {
    name: "",
    network: undefinedNetwork,
    address: "",
    owners: [],
    quorum: 1,
  },
  setNewSafeForm: (_form: NewSafeForm) => {},
});

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [network, _setNetwork] = useState(undefinedNetwork);
  const [account, _setAccount] = useState("0x0");
  const [isEthereum, _setIsEthereum] = useState(false);

  const [newSafeForm, _setNewSafeForm] = useState({
    name: "",
    network: undefinedNetwork,
    owners: [],
    quorum: 1,
  });

  const [currentMenuSection, setCurrentMenuSection] = useState({
    title: "Transactions",
  });

  const [transactionsSection, setTransactionsSection] = useState({
    type: "Queue",
  });

  const [createSafeStatus, setCreateSafeStatus] = useState({
    status: "owners",
  });

  function setNetwork(_network: Network) {
    _setNetwork(_network);
  }

  function setAccount(_account: string) {
    _setAccount(_account);
  }

  function setIsEthereum(_isEthereum: boolean) {
    _setIsEthereum(_isEthereum);
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

  const setNewSafeForm = (_form: NewSafeForm) => _setNewSafeForm(_form);

  const context: AppContextData = {
    network,
    setNetwork,
    account,
    setAccount,
    isEthereum,
    setIsEthereum,
    currentMenuSection,
    setCurrentMenuSectionHandler,
    transactionsSection,
    setTransactionsSectionHandler,
    createSafeStatus,
    setCreateSafeStatusHandler,
    newSafeForm,
    setNewSafeForm,
  };

  useEffect(() => {
    console.log("calling useEffect from context");
  }, []);

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

export default ContextProvider;
