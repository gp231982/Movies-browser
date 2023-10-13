import { StyledState } from "./styled"
import { NoResultsImage } from "./styled"
import noresults from "./noresults.png"

export const NoResults = () => (
    <StyledState>
        <NoResultsImage src={noresults} alt="No results found" />
    </StyledState>
);