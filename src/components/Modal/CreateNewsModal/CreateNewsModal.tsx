import FormNewsModal from "../FormNewsModal/FormNewsModal";
import CreateNewsForm from "./CreateNewsForm/CreateNewsForm";
import { ModalProps } from "../../../interfaces/interfaces.components";
import { FormEvent } from "react";
import { v4 } from "uuid";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { EUseLocalStorage } from "../../../interfaces/enum";

export type CreateNewsModalProps = {} & ModalProps;

const CreateNewsModal = ({
  isDisable,
  isVisible,
  setIsVisible,
  zIndex,
}: CreateNewsModalProps) => {
  const { setItem, getItem } = useLocalStorage(EUseLocalStorage.NEWS);

  const submitCreateNews = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.currentTarget));
    const date = new Date();
    const newItem = { ...data, id: v4(), date };

    const currentItems = getItem() || [];
    const updatedItems = [...currentItems, newItem];

    setItem([...updatedItems]);

    setIsVisible(false);
  };

  return (
    <FormNewsModal
      isDisable={isDisable}
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      zIndex={zIndex}
    >
      <CreateNewsForm onSubmit={submitCreateNews} />
    </FormNewsModal>
  );
};

export default CreateNewsModal;
