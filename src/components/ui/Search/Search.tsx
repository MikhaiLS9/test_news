import { PropsWithClassName } from "../../../interfaces/interfaces.components.ui";

import cn from "classnames";
import styles from "./Search.module.css";

type SearchProps = {
  placeholder?: string;
  defaultValue?: string;
} & PropsWithClassName;
const Search = ({ className, placeholder, defaultValue }: SearchProps) => {
  return (
    <div className={cn(styles.input__wrapper, className)}>
      <input
        className={styles.search__input}
        placeholder={placeholder || "Поиск..."}
        type="text"
        defaultValue={defaultValue ?? undefined}
      />
    </div>
  );
};

export default Search;
