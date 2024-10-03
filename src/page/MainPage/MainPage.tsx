import { PropsWithChildren } from "react";

type MainPageProps = {} & PropsWithChildren;

const MainPage = ({ children }: MainPageProps) => {
  return <div>{children}</div>;
};

export default MainPage;
