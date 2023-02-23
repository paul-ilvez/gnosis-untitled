import { CreateSafeStatus } from "@/store/AppContext";

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
    type: string;
  };
}
