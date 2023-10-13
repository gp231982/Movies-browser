import { Wrapper } from "../styled";
import { SectionTile } from "../../../features/MovieList/styled";
import { SpinnerIcon } from "./styled";

export const Loading = () => {
  return (
    <>
      <SectionTile>Search results for</SectionTile>
      <Wrapper>
        <SpinnerIcon />
      </Wrapper>
    </>
  );
};
