import { PropsWithChildrenAndClassName } from "../../interfaces/interfaces.components";

import DefaultLayout from "../DefaultLayout/DefaultLayout";

import cn from "classnames";
import styles from "./Main.module.css";

const Main = ({ children, className }: PropsWithChildrenAndClassName) => {
  return (
    <DefaultLayout className={cn(styles.main, className)}>
      {children}
    </DefaultLayout>
  );
};

export default Main;
