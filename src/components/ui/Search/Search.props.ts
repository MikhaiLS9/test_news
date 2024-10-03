import { PropsWithChildren } from "react";
import { PropsWithClassName } from "../../../interfaces/interfaces.custom";

export interface SearchProps extends PropsWithChildren, PropsWithClassName {
  placeholder?: string;
  defaultValue?: string;
}
