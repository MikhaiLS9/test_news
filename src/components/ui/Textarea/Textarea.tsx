import { TextAreaProps } from "../../../interfaces/interfaces.components.ui";

import Ptag from "../Ptag/Ptag";

import cn from "classnames";
import styles from "./TextArea.module.css";

const TextArea = ({ label, error, className, ...props }: TextAreaProps) => {
  return (
    <div className={cn(styles.textarea, className)}>
      {label && <label>{label}</label>}
      <textarea {...props} />
      {error && (
        <Ptag size="s" isError>
          {error}
        </Ptag>
      )}
    </div>
  );
};

export default TextArea;
