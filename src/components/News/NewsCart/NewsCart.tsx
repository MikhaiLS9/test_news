import { useEffect, useState } from "react";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { EUseLocalStorage } from "../../../interfaces/enum";
import { NewsItemProps } from "../../../interfaces/interfaces.components";

import getDateRu from "../../helpers/getDateRu";
import CurrentNewsModal from "../../Modal/CurrentNewsModal/CurrentNewsModal";
import Button from "../../ui/Button/Button";
import Htag from "../../ui/Htag/Htag";
import Ptag from "../../ui/Ptag/Ptag";

import styles from "./NewsCart.module.css";

export type NewsCartProps = {
  setCreateNews: React.Dispatch<React.SetStateAction<NewsItemProps[] | null>>;
};

const NewsCart = () => {
  const { getItem } = useLocalStorage(EUseLocalStorage.NEWS);
  const localNewsData = getItem();

  const [currentNews, setCurrentNews] = useState<NewsItemProps[]>(
    localNewsData || []
  );

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedNews = getItem();
      if (updatedNews) {
        setCurrentNews(updatedNews);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [getItem]);

  return (
    <section className={styles.newsCart}>
      {currentNews.length === 0 ? (
        <div>Новость нет</div>
      ) : (
        <CurrentNewsItems
          currentNews={currentNews}
          // setCreateNews={setCreateNews}
        />
      )}
    </section>
  );
};

export default NewsCart;

export type CurrentNewsItems = {
  currentNews: NewsItemProps[];
};

const CurrentNewsItems = ({ currentNews }: CurrentNewsItems) => {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
  const [visibleModalId, setVisibleModalId] = useState<number | null | boolean>(
    null
  );

  const handleCondolerModal = (id: number) => {
    if (id) {
      setVisibleModalId(id);
      setModalIsVisible(!modalIsVisible);
    }
  };

  return (
    <>
      {Array.isArray(currentNews) &&
        currentNews.map((news) => (
          <div key={news?.id} className={styles.currentNews}>
            <Ptag size="s">{getDateRu(news?.date)}</Ptag>
            <Htag tag="h2" className={styles.currentNewsTitle}>
              {news?.title}
            </Htag>
            <Ptag size="m" className={styles.currentNewsContent}>
              {news?.content}
            </Ptag>
            <Button
              appearance="ghost"
              size="none"
              onClick={() => handleCondolerModal(news?.id)}
            >
              читать полностью...
            </Button>

            {visibleModalId === news.id && (
              <CurrentNewsModal
                news={news}
                isDisable={false}
                isVisible={modalIsVisible}
                setIsVisible={setVisibleModalId}
                zIndex="100"
                currentNews={currentNews}
              />
            )}
          </div>
        ))}
    </>
  );
};
