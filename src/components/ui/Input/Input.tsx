import { ForwardedRef, forwardRef } from "react";
import { InputProps } from "../../../interfaces/interfaces.components.ui";

import cn from "classnames";
import styles from "./Input.module.css";

const Input = forwardRef(
  (
    {
      label,
      name,
      type = "text",
      placeholder,
      customClassName,
      ...props
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={cn(styles.container, customClassName?.container)}>
        {label && (
          <label
            htmlFor={name}
            className={cn(styles.label, customClassName?.label)}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          {...props}
          type={type}
          name={name}
          className={cn(styles.input, customClassName?.input)}
          placeholder={placeholder}
        />
      </div>
    );
  }
);

export default Input;
