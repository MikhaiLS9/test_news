import FormNewsModal from "../FormNewsModal/FormNewsModal";
import CreateNewsForm from "./CreateNewsForm/CreateNewsForm";
import { ModalProps } from "../../../interfaces/interfaces.components";

export type CreateNewsModalProps = {} & ModalProps;

const CreateNewsModal = ({
  isDisable,
  isVisible,
  setIsVisible,
  zIndex,
}: CreateNewsModalProps) => {
 

  return (
    <FormNewsModal
      isDisable={isDisable}
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      zIndex={zIndex}
    >
      <CreateNewsForm  setIsVisible={setIsVisible}/>
    </FormNewsModal>
  );
};

export default CreateNewsModal;
