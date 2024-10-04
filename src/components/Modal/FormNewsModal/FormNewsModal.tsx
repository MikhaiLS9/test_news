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
      <div>header</div>
      <div>{children}</div>
      <div>footer</div>
    </Modal>
  );
};

export default FormNewsModal;
