import { PropsWithChildren } from "react";
import { PropsWithClassName } from "../../../interfaces/interfaces.components.ui";

export interface SearchProps extends PropsWithChildren, PropsWithClassName {
  placeholder?: string;
  defaultValue?: string;
}
