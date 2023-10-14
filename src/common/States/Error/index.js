import { Wrapper } from "../styled";
import { Header, SubHeader, ErrorButon, ErrorIcon } from "./styled";

export const Error = () => {
  return (
    <Wrapper>
      <ErrorIcon />
      <Header>Ooops! Something went wrong...</Header>
      <SubHeader>Please check your network connection and try again</SubHeader>
      <ErrorButon to="/movies">Back to movie page</ErrorButon>
    </Wrapper>
  );
};
