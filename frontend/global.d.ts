import { CreateSafeStatus } from "@/store/AppContext";
import { GnosisUntitled as GU } from "../hardhat/typechain-types/GnosisUntitled_v6";
import { SafeFactory as SF } from "../hardhat/typechain-types/SafeFactory";

export type Screens = Record<CreateSafeStatus, React.ReactNode>;
export type Owner = {
  id: number;
  name: string;
};

declare global {
  interface Window {
    ethereum: import("ethers").providers.ExternalProvider;
  }

  type GnosisTransaction = {
    id: number;
    to: string;
    value: BigInt;
    data: string;
    executed: boolean;
    numConfirmations: BigInt;
    date: Date;
    type: TxType;
  };

  type SafeFactory = SF;
  type GnosisUntitled = GU;
  enum TxType {
    VALUE_TRANSFER,
    SEND_BYTECODE,
    ADD_SIGNER,
    REMOVE_SIGNER,
    CHANGE_QUORUM,
  }
}
