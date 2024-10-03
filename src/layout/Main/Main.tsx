import { PropsWithChildren } from "react";
import { PropsWithClassName } from "../../interfaces/interfaces.custom";

import cn from "classnames";
import styles from "./Main.module.css";

type MainProps = {} & PropsWithChildren & PropsWithClassName;
const Main = ({ children, className }: MainProps) => {
  return <div className={cn(styles.main, className)}>{children}</div>;
};

export default Main;
