import { ButtonBaseProps } from "../../../interfaces/interfaces.components.ui";

import cn from "classnames";
import styles from "./Button.module.css";

const Button = ({
  type = "submit",
  className,
  children,
  appearance,
  onClick,
  isDisabled = false,
  lightColorVersion = false,
  size,
  ...props
}: ButtonBaseProps) => {
  return (
    <button
      type={type}
      className={cn(
        styles.button,
        styles[size],
        styles[appearance],
        className,
        {
          [styles.light]: lightColorVersion,
          [styles.disabled]: isDisabled,
        }
      )}
      onClick={(!isDisabled && onClick) || undefined}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
