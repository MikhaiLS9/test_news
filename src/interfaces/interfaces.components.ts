import { PropsWithChildren } from "react";
import { PropsWithClassName } from "./interfaces.custom";

export interface NewsItemProps {
  id: number;
  title: string;
  content: string;
  date: string;
}

export type NewsDataProps = { news: NewsItemProps[] };

export type PropsWithChildrenAndClassName = {} & PropsWithChildren &
  PropsWithClassName;

export type CreateNewsProps = {
  setCreateNews: (createNews: NewsItemProps[] | null) => void;
};
