import { useState } from "react";

import CreateNewsModal from "../../Modal/CreateNewsModal/CreateNewsModal";
import Button from "../../ui/Button/Button";

import styles from "./CreateNews.module.css";

const CreateNews = () => {
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
      <CreateNewsModal
        isDisable={false}
        isVisible={modalIsVisible}
        setIsVisible={setModalIsVisible}
        zIndex="100"
      />
    </section>
  );
};

export default CreateNews;
