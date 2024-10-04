import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { EUseLocalStorage } from "../../../interfaces/enum";
import { NewsItemProps } from "../../../interfaces/interfaces.components";

import getDateRu from "../../helpers/getDateRu";
import Button from "../../ui/Button/Button";
import Htag from "../../ui/Htag/Htag";
import Ptag from "../../ui/Ptag/Ptag";

import styles from "./NewsCart.module.css";

export type NewsCartProps = { createNews: NewsItemProps[] | null };

const NewsCart = ({ createNews }: NewsCartProps) => {
  const { getItem } = useLocalStorage(EUseLocalStorage.NEWS);
  const localNewsData = getItem();

  const currentNews: NewsItemProps[] = createNews ? createNews : localNewsData;
  console.log(currentNews);

  return (
    <section className={styles.newsCart}>
      {!currentNews && <div>новость нет</div>}
      {currentNews && <CurrentNewsItems currentNews={currentNews} />}
    </section>
  );
};

export default NewsCart;

export type CurrentNewsItems = { currentNews: NewsItemProps[] };

const CurrentNewsItems = ({ currentNews }: CurrentNewsItems) => {
  return (
    <>
      {currentNews.map((news) => (
        <div key={news?.id} className={styles.currentNews}>
          <Ptag size="s">{getDateRu(news?.date)}</Ptag>
          <Htag tag="h2"  className={styles.currentNewsTitle}>{news?.title}</Htag>
          <Ptag size="m" className={styles.currentNewsContent}>{news?.content}</Ptag>
          <Button appearance="ghost" size="none">просмотреть полностью...</Button>
        </div>
      ))}
    </>
  );
};
