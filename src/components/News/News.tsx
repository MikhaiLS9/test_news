import CreateNews from "./CreateNews/CreateNews";
import NewsCart from "./NewsCart/NewsCart";

import styles from "./News.module.css";

const News = () => {
  return (
    <div className={styles.news}>
      <CreateNews />
      <NewsCart />
    </div>
  );
};
export default News;
