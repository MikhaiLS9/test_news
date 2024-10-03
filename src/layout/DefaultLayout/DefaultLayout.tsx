import { PropsWithChildrenAndClassName } from "../../interfaces/interfaces.components";

import cn from "classnames";
import styles from "./DefaultLayout.module.css";

const DefaultLayout = ({
  children,
  className,
}: PropsWithChildrenAndClassName) => {
  return <div className={cn(styles.defaultLayout, className)}>{children}</div>;
};
export default DefaultLayout;
