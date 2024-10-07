import { FormEvent, useState } from "react";
import {
  ModalProps,
  NewsItemProps,
} from "../../../interfaces/interfaces.components";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { EUseLocalStorage } from "../../../interfaces/enum";
import { CurrentNewsItems } from "../../News/NewsCart/NewsCart";

import getDateRu from "../../helpers/getDateRu";
import Button from "../../ui/Button/Button";
import Htag from "../../ui/Htag/Htag";
import Ptag from "../../ui/Ptag/Ptag";
import FormNewsModal from "../FormNewsModal/FormNewsModal";
import Input from "../../ui/Input/Input";
import TextArea from "../../ui/TextArea/TextArea";

import styles from "./CurrentNewsModal.module.css";

export type NewsProps = { news: NewsItemProps };
export type CurrentNewsModalProps = {} & ModalProps &
  NewsProps &
  CurrentNewsItems;

export enum ECurrentNewsButtonsText {
  SAVE = "Сохранить",
  EDIT = "Редактировать",
}

const CurrentNewsModal = ({
  isDisable,
  isVisible,
  setIsVisible,
  zIndex,
  news,
  setCreateNews,
}: CurrentNewsModalProps) => {
  const [isEditMode, setIsEditMode] = useState<ECurrentNewsButtonsText>(
    ECurrentNewsButtonsText.EDIT
  );
  const { getItem, setItem } = useLocalStorage(EUseLocalStorage.NEWS);

  const getItemNews: NewsItemProps[] = getItem() || [];

  const handleSubmitEditMode = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.currentTarget));
    console.log(data);

    const updatedNews = getItemNews.map((item) =>
      item.id === news.id ? { ...item, ...data } : item
    );

    setItem(updatedNews);
    setCreateNews(updatedNews);
    setIsEditMode(ECurrentNewsButtonsText.EDIT);
    setIsVisible(false);
  };

  const handleDeleteNews = () => {
    const updatedNews = getItemNews.filter((item) => item.id !== news.id);

    setItem(updatedNews);
    setCreateNews(updatedNews);
    setIsVisible(false);
  };

  return (
    <FormNewsModal
      isDisable={isDisable}
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      zIndex={zIndex}
      className={styles.currentNewsModal}
    >
      <form className={styles.currentNewsModal} onSubmit={handleSubmitEditMode}>
        {isEditMode === ECurrentNewsButtonsText.EDIT ? (
          <CurrentNewsText news={news} />
        ) : (
          <CurrentNewsEdit news={news} />
        )}

        <div className={styles.currentNewsModalButtons}>
          <Button
            appearance="accent"
            size="m"
            type="button"
            onClick={handleDeleteNews}
          >
            Удалить
          </Button>

          {isEditMode === ECurrentNewsButtonsText.EDIT && (
            <Button
              appearance="secondary"
              size="m"
              type="button"
              onClick={() => setIsEditMode(ECurrentNewsButtonsText.SAVE)}
            >
              {ECurrentNewsButtonsText.EDIT}
            </Button>
          )}

          {isEditMode === ECurrentNewsButtonsText.SAVE && (
            <Button appearance="secondary" size="m" type="submit">
              {ECurrentNewsButtonsText.SAVE}
            </Button>
          )}
        </div>
      </form>
    </FormNewsModal>
  );
};

export default CurrentNewsModal;

const CurrentNewsText = ({ news }: NewsProps) => {
  return (
    <>
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
    </>
  );
};

const CurrentNewsEdit = ({ news }: NewsProps) => {
  return (
    <>
      <Ptag size="s" className={styles.currentNewsDate}>
        {getDateRu(news?.date)}
      </Ptag>

      <Input name="title" defaultValue={news.title} />
      <TextArea
        name="content"
        className={styles.currentNewsEditContent}
        defaultValue={news.content}
      />
    </>
  );
};
