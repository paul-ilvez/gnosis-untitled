import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import {Property} from "csstype";
import Color = Property.Color;
import {SafeElementProps} from "@/components/SafeElement/SafeElement.props";

export interface SafeListProps extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  //children: ReactNode;
  bgColor: Color;
  title: string;

  safes: SafeElementProps[]
}