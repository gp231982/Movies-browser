import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as CameraIcon } from "./camera.svg";
import { ReactComponent as SearchIcon } from "./search.svg";

export const MoviesHeaderWrapper = styled.div`
  max-width: 100vw;
  background-color: black;
  display: flex;
  justify-content: center;

  @media (max-width: 1360px) {
    margin-left: none;
  }
`;

export const MoviesHeader = styled.header`
  height: 94px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1360px) {
    height: 142px;
    justify-content: center;
  }

  @media (max-width: 1000px) {
    align-content: space-around;
  }

  @media (max-width: 600px) {
    width: 288px;
  }
`;

export const StyledCameraIcon = styled(CameraIcon)`
  width: 40px;
  height: 40px;

  @media (max-width: 600px) {
    width: 17px;
    height: 17px;
    flex-shrink: 0;
  }
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 80px;
  outline: 1px solid grey;

  @media (max-width: 600px) {
    height: 34px;
    width: 120px;
    margin-right: 16px;
    margin-top: 24px;
  }
`;

export const StyledMainPage = styled.div`
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

  @media (max-width: 600px) {
    color: var(--ui-white, #fff);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.5px;
    text-transform: capitalize;
    width: 95px;
  }
`;

export const MenuItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  align-items: center;

  @media (max-width: 600px) {
    grid-gap: 10px;
    margin-top:25px
  }
`;

export const MenuItem = styled.div`
  height: 48px;
  padding: 8px 24px;
  flex-shrink: 0;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    height: 34px;
    padding: 8px 12px;
  }
`;

export const StyledMenuItemContent = styled.p`
  ${"" /* color: var(--White, #fff); */}
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  coursor: pointer;

  @media (max-width: 600px) {
    color: var(--White, #fff);
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
  }
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

  @media (max-width: 1360px) {
    margin-left: calc(100vw - 983px);
  }

  @media (max-width: 1000px) {
    width: 516px;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    width: 288px;
    height: 44px;
    margin: 24px auto 16px;
  }
`;

export const Search = styled.input`
  flex-grow: 0.8;
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

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  &.${activeClassName} {
    outline: 1px solid white;
    border-radius: 29px;
  }
  & {
    text-decoration: none;
    color: white;
    font-weight: normal;
    transition: 0.3s;
  }
  &:hover {
    color: rgb(255, 255, 255, 0.8);
  }
`;
