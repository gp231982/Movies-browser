import { StyledState } from "./styled";
import { NoResultsImage, NoResultsInfo } from "./styled";
import noresults from "./noresults.png";
import { useQueryParameter } from "../../queryParameters";
import searchQueryParamName from "../../searchQueryParamName";

export const NoResults = () => {
  const query = useQueryParameter(searchQueryParamName);
  return (
    <StyledState>
      <NoResultsInfo>{`Sorry, there are no results for "${query}"`}</NoResultsInfo>
      <NoResultsImage src={noresults} alt="No results found" />
    </StyledState>
  );
};
