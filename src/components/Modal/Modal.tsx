import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalProps } from "../../interfaces/interfaces.components";

import cn from "classnames";
import styles from "./Modal.module.css";

const Modal = ({
  children,
  isVisible,
  setIsVisible,
  zIndex,
  isDisable,
  className,
}: ModalProps) => {
    
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible, setIsVisible]);

  if (!isVisible) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsVisible(false);
    }
  };

  return createPortal(
    <>
      <div className={styles.overlay} onClick={handleOverlayClick} />
      <div
        className={cn(styles.modal, className, {
          [styles.first]: zIndex === "100",
          [styles.second]: zIndex === "200",
          [styles.three]: zIndex === "300",
          [styles.disable]: isDisable,
        })}
      >
        {children}
      </div>
    </>,
    document.body
  );
};

export default Modal;
