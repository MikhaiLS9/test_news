import { PtagProps } from "../../../interfaces/interfaces.components.ui";

import cn from "classnames";
import styles from "./Ptag.module.css";

const Ptag = ({
  children,
  size,
  accent,
  isActive,
  isError,
  className,
  fontWeight,
  isOpacity,
  isBold,
  isAccentColor,
  ...props
}: PtagProps) => {
  return (
    <p
      className={cn(
        styles.p,
        styles[size],
        className,
        {
          [styles.fontWeight500]: fontWeight === "500",
          [styles.fontWeight700]: fontWeight === "700",
          [styles.fontWeight800]: fontWeight === "800",
        },
        {
          [styles.isError]: isError,
          [styles.accent]: accent,
          [styles.isActive]: isActive,
          [styles.fontWeight]: fontWeight,
          [styles.opacity]: isOpacity,
          [styles.accent]: isAccentColor,
          [styles.bold]: isBold,
        }
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export default Ptag;
