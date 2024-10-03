import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { EUseLocalStorage } from "../../../interfaces/enum";
import { NewsItemProps } from "../../../interfaces/interfaces.components";
import Htag from "../../ui/Htag/Htag";
import Ptag from "../../ui/Ptag/Ptag";

type NewsCartProps = { createNews: NewsItemProps[] | null };

const NewsCart = ({ createNews }: NewsCartProps) => {
  const { getItem } = useLocalStorage(EUseLocalStorage.NEWS);
  const localNewsData = getItem();

  const currentNews: NewsItemProps[] = createNews ? createNews : localNewsData;
  console.log(currentNews);

  return (
    <section>
      {!currentNews && <div>новость нет</div>}
      {currentNews &&
        currentNews.map((news) => (
          <div key={news?.id}>
            <Htag tag="h2">{news?.title}</Htag>
            <Ptag size="m">{news?.content}</Ptag>
          </div>
        ))}
    </section>
  );
};

export default NewsCart;
