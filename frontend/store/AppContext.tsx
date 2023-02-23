import {
  findNetworkById,
  undefinedNetwork,
} from "@/components/SafeList/Networks";
import type { Network } from "@/components/SafeList/Networks";
import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { FormOwners } from "@/components/LoadSafe/Steps/SetOwners";
import {
  AbstractProvider,
  AbstractSigner,
  BrowserProvider,
  Contract,
} from "ethers";
import { SafeFactoryAbi } from "@/abi/SafeFactory";

export type CreateSafeStatus = {
  status: "owners" | "review" | "generate";
};

export type NewSafeForm = {
  name: string;
  network: Network;
  owners: FormOwners[];
  quorum: string;
};

export type CurrentMenuSection = {
  title: string;
};
export type TransactionsSection = {
  type: string;
};

export const AppContext = createContext({
  safeFactory: undefined,
  setSafeFactory: (_contract: SafeFactory) => {},
  network: undefinedNetwork,
  setNetwork: (_network: Network) => {},
  account: "",
  setAccount: (_account: string) => {},
  connected: false,
  setConnected: (_connected: boolean) => {},
  provider: undefined,
  setProvider: (_provider: AbstractProvider) => {},
  signer: undefined,
  setSigner: (_signer: AbstractSigner) => {},
  isEthereum: false,
  setIsEthereum: (_isEthereum: boolean) => {},
  currentMenuSection: { title: "Transations" },
  setCurrentMenuSectionHandler: (_currentMenuSection: CurrentMenuSection) => {},
  transactionsSection: { type: "Queue" },
  setTransactionsSectionHandler: (
    _transactionsSection: TransactionsSection
  ) => {},
  createSafeStatus: { status: "owners" },
  setCreateSafeStatusHandler: (_createSafeStatus: CreateSafeStatus) => {},
  newSafeForm: {
    name: "",
    network: undefinedNetwork,
    owners: [],
    quorum: "",
  },
  setNewSafeForm: (_form: NewSafeForm) => {},

  currentSafe: {},
  setCurrentSafe: (_safe: GnosisUntitled) => {},

  handleConnectMetamaskClick: () => {},
  handleDisconnectMetamask: () => {},
}); //--------------AppContex------------------------

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [network, _setNetwork] = useState(undefinedNetwork);
  const [account, _setAccount] = useState("0x0");
  const [isEthereum, _setIsEthereum] = useState(false);
  const [safeFactory, _setSafeFactory] = useState<SafeFactory>();
  const [connected, _setConnected] = useState(false);
  const [provider, _setProvider] = useState<BrowserProvider>();
  const [signer, _setSigner] = useState<AbstractSigner>();
  const [newSafeForm, _setNewSafeForm] = useState({
    name: "",
    network: undefinedNetwork,
    owners: [],
    quorum: "",
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
  const [currentSafe, _setCurrentSafe] = useState<GnosisUntitled>();
  function setNetwork(_network: Network) {
    _setNetwork(_network);
  }

  const setCurrentSafe = (safe: GnosisUntitled) => {
    _setCurrentSafe(safe);
  };
  function setConnected(_connected: boolean) {
    _setConnected(_connected);
  }

  function setSafeFactory(_contract: SafeFactory) {
    _setSafeFactory(_contract as SafeFactory);
  }

  function setProvider(_provider: BrowserProvider) {
    _setProvider(_provider);
  }

  function setSigner(_signer: AbstractSigner) {
    _setSigner(_signer);
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

  const handleConnectMetamaskClick = async () => {
    if (window.ethereum) {
      const result = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      await accountChangedHandler(result[0]);
    } else {
      console.log("where is metamask?!");
    }
  };

  const handleDisconnectMetamask = async () => {
    if (window.ethereum == null) {
      return;
    }
    setAccount("");
    setIsEthereum(false);
    setConnected(false);
    setProvider(undefined);
    setSigner(undefined);
    setNetwork(undefinedNetwork);
    sessionStorage.removeItem("login");
  };

  const context = {
    network,
    setNetwork,
    account,
    setAccount,
    connected,
    setConnected,
    isEthereum,
    setIsEthereum,
    provider,
    setProvider,
    signer,
    setSigner,
    currentMenuSection,
    setCurrentMenuSectionHandler,
    transactionsSection,
    setTransactionsSectionHandler,
    createSafeStatus,
    setCreateSafeStatusHandler,
    newSafeForm,
    setNewSafeForm,
    safeFactory,
    setSafeFactory,
    handleConnectMetamaskClick,
    handleDisconnectMetamask,
    currentSafe,
    setCurrentSafe,
  };

  useEffect(() => {
    (async () => {
      if (window.ethereum != null) {
        setIsEthereum(true);
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length) {
          accountChangedHandler(accounts[0]);
        } else {
          setConnected(false);
        }

        window.ethereum.on("accountsChanged", (acc) => {
          accountChangedHandler(acc);
        });
        window.ethereum.on("chainChanged", (chainId) => {
          // Handle the new chain.
          // Correctly handling chain changes can be complicated.
          // We recommend reloading the page unless you have good reason not to.
          console.log(`Chaing changed to ${chainId}`);

          window.location.reload();
        });
      } else {
        setIsEthereum(false);
        setConnected(false);
      }
    })();
  }, []);

  const accountChangedHandler = async (newAccount: string) => {
    setAccount(newAccount);
    if (!newAccount || newAccount.length == 0) {
      setConnected(false);
      return;
    }
    setConnected(true);
    await updateEthers();
  };

  const updateEthers = async () => {
    let tempProvider = new BrowserProvider(window.ethereum);
    setProvider(tempProvider);

    let tempNetwork = findNetworkById(window.ethereum.networkVersion);
    setNetwork(tempNetwork);

    let tempSigner = await tempProvider.getSigner();
    setSigner(tempSigner);

    let tempContract = new Contract(
      tempNetwork.factoryContractAddress,
      SafeFactoryAbi,
      tempSigner
    ) as unknown as SafeFactory;
    tempContract.connect(tempSigner);
    setSafeFactory(tempContract);
    setConnected(true);
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
} // -----------------AppContext.Provider----------------------

export default ContextProvider;
