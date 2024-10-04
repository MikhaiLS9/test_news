import { FormEvent } from "react";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import { EUseLocalStorage } from "../../../../interfaces/enum";
import { CreateNewsProps } from "../../../../interfaces/interfaces.components";
import { v4 } from "uuid";

import Button from "../../../ui/Button/Button";
import Input from "../../../ui/Input/Input";
import TextArea from "../../../ui/TextArea/TextArea";

import styles from "./CreateNewsForm.module.css";

const CreateNewsForm = ({ setCreateNews }: CreateNewsProps) => {
  const { setItem, getItem } = useLocalStorage(EUseLocalStorage.NEWS);

  const submitCreateNews = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.currentTarget));
    const date = new Date();

    const newItem = { ...data, id: v4(), date };

    const currentItems = getItem() || [];
    const updatedItems = [...currentItems, newItem];

    setItem(updatedItems);
    setCreateNews(updatedItems);
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
