import { useState } from "react";
import { NewsItemProps } from "../../interfaces/interfaces.components";

import CreateNews from "./CreateNews/CreateNews";
import NewsCart from "./NewsCart/NewsCart";

import styles from "./News.module.css";

const News = () => {
  const [createNews, setCreateNews] = useState<null | NewsItemProps[]>(null);
  return (
    <div className={styles.news}>
      <CreateNews setCreateNews={setCreateNews} />
      <NewsCart createNews={createNews} />
    </div>
  );
};
export default News;
