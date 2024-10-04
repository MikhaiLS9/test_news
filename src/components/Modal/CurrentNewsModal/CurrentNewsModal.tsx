import {
  ModalProps,
  NewsItemProps,
} from "../../../interfaces/interfaces.components";

import getDateRu from "../../helpers/getDateRu";
import Button from "../../ui/Button/Button";
import Htag from "../../ui/Htag/Htag";
import Ptag from "../../ui/Ptag/Ptag";

import FormNewsModal from "../FormNewsModal/FormNewsModal";

import styles from "./CurrentNewsModal.module.css";

export type NewsProps = { news: NewsItemProps };
export type CurrentNewsModalProps = {} & ModalProps & NewsProps;

const CurrentNewsModal = ({
  isDisable,
  isVisible,
  setIsVisible,
  zIndex,
  news,
}: CurrentNewsModalProps) => {
  console.log(news);

  return (
    <FormNewsModal
      isDisable={isDisable}
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      zIndex={zIndex}
      className={styles.currentNewsModal}
    >
      <div className={styles.currentNewsModal}>
        <Ptag size="s" className={styles.currentNewsDate}>
          {getDateRu(news?.date)}
        </Ptag>
        <Htag tag="h2" className={styles.currentNewsTitle}>
          {news?.title}
        </Htag>
        <div className={styles.currentNewsContent}>
          <Ptag size="m" className={styles.currentNewsContent__text}>
            {news.content}
          </Ptag>
        </div>

        <div className={styles.currentNewsModalButtons}>
          <Button appearance="accent" size="m" type="button">
            Удалить
          </Button>
          <Button appearance="secondary" size="m" type="button">
            Редактировать
          </Button>
        </div>
      </div>
    </FormNewsModal>
  );
};

export default CurrentNewsModal;
