import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface SafeElementProps extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  safe: {
    avatar: string;
    chain: string;
    address: string;
    countOwners: number;
    countVoices: number;
    balance: number;
    symbol: string;

  }
}