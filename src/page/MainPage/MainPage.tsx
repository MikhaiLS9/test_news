import News from "../../components/News/News";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import Main from "../../layout/Main/Main";
import DefaultLayout from "../DefaultLayout/DefaultLayout";

const MainPage = () => {
  return (
    <DefaultLayout>
      <Header />
      <Main>
        <News />
      </Main>
      <Footer />
    </DefaultLayout>
  );
};

export default MainPage;
