import { PropsWithChildren } from "react";
import { PropsWithClassName } from "./interfaces.custom";

export interface NewsItemProps {
  id: number;
  title: string;
  content: string;
  date: Date;
}


export type PropsWithChildrenAndClassName = {} & PropsWithChildren &
  PropsWithClassName;
