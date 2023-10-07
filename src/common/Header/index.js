import { NavLink } from "react-router-dom";
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

const Header = () => {
  return (
    <MoviesHeaderWrapper>
      <MoviesHeader>
        <NavLink to="/">
          <PageLinkFrame>
            <StyledCameraIcon />
            <MainPage content="Movie Browser"/>
          </PageLinkFrame>
        </NavLink>
        <MenuItemsWrapper>
          <NavLink to="/movies">
            <MenuItem>
              <MenuItemContent content="Movies" />
            </MenuItem>
          </NavLink>
          <NavLink to="/people">
            <MenuItem>
              <MenuItemContent content="People" />
            </MenuItem>
          </NavLink>
        </MenuItemsWrapper>
        <SearchWrapper>
          <StyledSearchIcon />
          <SearchInput placeholder="Search for movies..." />
        </SearchWrapper>
      </MoviesHeader>
    </MoviesHeaderWrapper>
  );
};

export default Header;
