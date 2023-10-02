import styled from "styled-components";
import { ReactComponent as CameraIcon } from "../../common/icons/camera.svg";
import { ReactComponent as SearchIcon } from "../../common/icons/search.svg";

export const MoviesHeaderWrapper = styled.div`
  width: 100vw;
  background-color: black;
  display: flex;
  justify-content: center;
`;

export const MoviesHeader = styled.header`
  ${"" /* margin: 0 auto; */}
  height: 94px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  ${'' /* outline: 3px solid grey; */}
`;

export const StyledCameraIcon = styled(CameraIcon)`
  width: 40px;
  height: 40px;
  color: red;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  width: 24px;
  height: 24px;
  color: red;
  margin-left: 24px;
`;

export const PageLinkFrame = styled.div`
  width: 220px;
  height: 48px;
  ${"" /* margin-left: 292px; */}
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 80px;
`;

export const PageTitle = styled.div`
  width: 168px;
  height: 40px;
  color: white;
  color: var(--ui-white, #fff);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -1.5px;
  text-transform: capitalize;
`;

export const MenuItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  align-items: center;
`;

export const MenuItem = styled.div`
  height: 48px;
  padding: 8px 24px;
  align-items: center;
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

export const StyledMenuItemContent = styled.p`
  color: var(--White, #fff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
`;

export const SearchWrapper = styled.div`
  width: 432px;
  height: 48px;
  margin-left: 387px;
  display: flex;
  justify-items: center;
  border-radius: 33px;
  flex-shrink: 0;
  background: var(--White, #fff);
  border: 1px solid var(--color-divider, #e4e6f0);
  color: var(--Darker-grey, #7e839a);
  align-items: center;
  ${"" /* margin-right: 293px; */}

  @media(max-width: 1360px) {
    margin-left: 0;
  }
`;

export const Search = styled.input`
  flex-grow: 0.9;
  flex-shrink: 0;
  border: none;
  margin-left: 16px;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export const SearchInput = styled(Search)`
  &:focus {
    outline: none;
  }
`;
