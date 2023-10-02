import {
  MoviesHeaderWrapper,
  MenuItem,
  MoviesHeader,
  StyledCameraIcon,
  StyledSearchIcon,
  PageLinkFrame,
  PageTitle,
  MenuItemsWrapper,
  SearchWrapper,
  SearchInput,
} from "./styled";
import MenuItemContent from "./MenuItemContent";

const Header = () => {
  return (
    <MoviesHeaderWrapper>
      <MoviesHeader>
        <PageLinkFrame>
          <StyledCameraIcon />
          <PageTitle>Movies Browser</PageTitle>
        </PageLinkFrame>
        <MenuItemsWrapper>
          <MenuItem>
            <MenuItemContent content="Movies" />
          </MenuItem>
          <MenuItem>
            <MenuItemContent content="People" />
          </MenuItem>
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
