import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface SafeElementProps extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

    chainId: number;
    address: string;
    countOwners: number;
    quorum: number;
    balance: number;

}