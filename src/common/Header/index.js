import { StyledNavLink } from "./styled";
import { NavLink, useLocation } from "react-router-dom";
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

const Header = () => {
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
        <NavLink to="/">
          <PageLinkFrame>
            <StyledCameraIcon />
            <MainPage content="Movie Browser" />
          </PageLinkFrame>
        </NavLink>
        <MenuItemsWrapper>
          <StyledNavLink to="/movies">
            <MenuItem>
              <MenuItemContent content="Movies" />
            </MenuItem>
          </StyledNavLink>
          <StyledNavLink to="/people">
            <MenuItem>
              <MenuItemContent content="People" />
            </MenuItem>
          </StyledNavLink>
        </MenuItemsWrapper>
        <SearchWrapper>
          <StyledSearchIcon />
          <SearchInput
            placeholder={`Search for ${
              path === "/people" ? "people" : "movies"
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
