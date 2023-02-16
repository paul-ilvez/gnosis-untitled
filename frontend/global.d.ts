import {CreateSafeStatus} from "@/store/AppContext";

export type Screens = Record<CreateSafeStatus, React.ReactNode>;
export type Owner = {
  id: number;
  name: string;
};

declare global {
  interface Window {
    ethereum: import("ethers").providers.ExternalProvider;
  }
}
