import { FormEvent } from "react";

import Button from "../../../ui/Button/Button";
import Input from "../../../ui/Input/Input";
import TextArea from "../../../ui/TextArea/TextArea";

import styles from "./CreateNewsForm.module.css";
import { v4 } from "uuid";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import { EUseLocalStorage } from "../../../../interfaces/enum";

const CreateNewsForm = ({
  setIsVisible,
}: {
  setIsVisible: (event: boolean) => void;
}) => {
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
    <form className={styles.createNewsForm} onSubmit={submitCreateNews}>
      <Input name="title" placeholder="Название статьи" />
      <TextArea name="content" placeholder="Описание статьи" />
      <Button appearance="accent" size="l">
        Опубликовать новость
      </Button>
    </form>
  );
};

export default CreateNewsForm;
