export type Screens = Record<number, React.ReactNode>;
export type Owner = {
  id: number;
  name: string;
};

declare global {
  interface Window {
    ethereum: import("ethers").providers.ExternalProvider;
  }
}
