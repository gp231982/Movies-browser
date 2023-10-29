import { StyledNavLink, HomeLink } from "./styled";
import { useLocation } from "react-router-dom";
import {
  MoviesHeaderWrapper,
  MenuItem,
  MoviesHeader,
  StyledCameraIcon,
  StyledSearchIcon,
  PageLinkFrame,
  MenuItemsWrapper,
  SearchWrapper,
  SearchInput,
} from "./styled";
import MenuItemContent from "./MenuItemContent";
import MainPage from "./MainPage";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";

const Header = ({ to }) => {
  const path = useLocation().pathname;
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <MoviesHeaderWrapper>
      <MoviesHeader>
        <HomeLink to="/">
          <PageLinkFrame>
            <StyledCameraIcon />
            <MainPage content="Movie Browser" />
          </PageLinkFrame>
        </HomeLink>
        <MenuItemsWrapper>
          <StyledNavLink
            to="/movies"
            className={
              path.startsWith("/movie") || path.startsWith("/movies")
                ? "active"
                : ""
            }
          >
            <MenuItem>
              <MenuItemContent content="Movies" />
            </MenuItem>
          </StyledNavLink>
          <StyledNavLink
            to="/people"
            className={
              path.startsWith("/person") || path.startsWith("/people")
                ? "active"
                : ""
            }
          >
            <MenuItem>
              <MenuItemContent content="People" />
            </MenuItem>
          </StyledNavLink>
        </MenuItemsWrapper>
        <SearchWrapper>
          <StyledSearchIcon />
          <SearchInput
            placeholder={`Search for ${
              path.startsWith("/people") || path.startsWith("/person")
                ? "people"
                : "movies"
            }...`}
            value={query || ""}
            onChange={onInputChange}
          />
        </SearchWrapper>
      </MoviesHeader>
    </MoviesHeaderWrapper>
  );
};

export default Header;
