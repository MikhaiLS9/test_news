import { FormEvent } from "react";

import Button from "../../../ui/Button/Button";
import Input from "../../../ui/Input/Input";
import TextArea from "../../../ui/TextArea/TextArea";

import styles from "./CreateNewsForm.module.css";

const CreateNewsForm = ({
  onSubmit,
}: {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form className={styles.createNewsForm} onSubmit={onSubmit}>
      <Input name="title" placeholder="Название статьи" />
      <TextArea name="content" placeholder="Описание статьи" />
      <Button appearance="accent" size="xxl">
        Опубликовать новость
      </Button>
    </form>
  );
};

export default CreateNewsForm;
