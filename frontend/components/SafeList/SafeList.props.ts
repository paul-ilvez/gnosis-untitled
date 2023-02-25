import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import {Property} from "csstype";
import Color = Property.Color;

export interface SafeListProps extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  //children: ReactNode;
  bgColor: Color;
  title: string;
}