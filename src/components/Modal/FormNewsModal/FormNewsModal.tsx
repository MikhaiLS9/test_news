import { ModalProps } from "../../../interfaces/interfaces.components";

import Modal from "../Modal";

import styles from "./FormNewsModal.module.css";

const FormNewsModal = ({
  isDisable,
  isVisible,
  setIsVisible,
  children,
  zIndex,
}: ModalProps) => {
  return (
    <Modal
      isDisable={isDisable}
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      zIndex={zIndex}
      className={styles.formNewsModal}
    >
      <div className={styles.header}>header</div>
      <div className={styles.main}>{children}</div>
    </Modal>
  );
};

export default FormNewsModal;
