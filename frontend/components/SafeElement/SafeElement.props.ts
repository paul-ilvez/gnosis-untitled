import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface SafeElementProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  address: string;
  countOwners: number;
  quorum: number;
  balance: number;

  chainId: number;
}
