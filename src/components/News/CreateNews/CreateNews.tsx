import { CreateNewsProps } from "../../../interfaces/interfaces.components";
import { useState } from "react";

import CreateNewsForm from "./CreateNewsForm/CreateNewsForm";
import Button from "../../ui/Button/Button";

import styles from "./CreateNews.module.css";

const CreateNews = ({ setCreateNews }: CreateNewsProps) => {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
  return (
    <section className={styles.createNews}>
      <Button
        appearance="accent"
        size="m"
        onClick={() => setModalIsVisible(!modalIsVisible)}
      >
        Создайте новость
      </Button>

      {modalIsVisible && <CreateNewsForm setCreateNews={setCreateNews} />}
    </section>
  );
};

export default CreateNews;

// 520 px текст ареа
