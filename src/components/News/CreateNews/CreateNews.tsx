import Htag from "../../ui/Htag/Htag";
import CreateNewsForm from "./CreateNewsForm/CreateNewsForm";

import styles from "./CreateNews.module.css";
import { CreateNewsProps } from "../../../interfaces/interfaces.components";

const CreateNews = ({ setCreateNews }: CreateNewsProps) => {
  return (
    <section className={styles.createNews}>
      <Htag tag="h2">Создайте новость</Htag>

      <CreateNewsForm setCreateNews={setCreateNews} />
    </section>
  );
};

export default CreateNews;

// 520 px текст ареа
