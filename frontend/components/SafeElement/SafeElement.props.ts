import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface SafeElementProps extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  avatar: string;
}