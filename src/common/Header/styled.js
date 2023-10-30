import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as CameraIcon } from "./camera.svg";
import { ReactComponent as SearchIcon } from "./search.svg";

export const MoviesHeaderWrapper = styled.div`
  max-width: 100vw;
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin-left: none;
  }
`;

export const MoviesHeader = styled.header`
  height: 94px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    justify-content: center;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    align-content: space-evenly;
    justify-content: space-between;
    height: 142px;
    padding: 0 15px;
    width: 100%;
  }
`;

export const StyledCameraIcon = styled(CameraIcon)`
  width: 40px;
  height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    margin-right: 8px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile2}) {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    margin-right: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile1}) {
    width: 17px;
    height: 17px;
    flex-shrink: 0;
    margin-right: 8px;
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  width: 24px;
  height: 24px;
  margin-left: 24px;
`;
export const PageLinkFrame = styled.div`
  width: 220px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 80px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDual}) {
    margin-right: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    justify-content: flex-start;
    width: fit-content;
    margin-right: 0px;
  }
`;
export const StyledMainPage = styled.div`
  width: 168px;
  height: 40px;
  color: ${({ theme }) => theme.color.white};
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -1.5px;
  text-transform: capitalize;
  transition: all 0.3s;
  &:hover {
    color: ${({ theme }) => theme.color.transparentWhite};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    font-size: 20px;
    font-style: normal;
    letter-spacing: -0.5px;
    width: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile2}) {
    font-size: 17px;
    font-style: normal;
    letter-spacing: -0.5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile1}) {
    font-size: 13px;
    font-style: normal;
    letter-spacing: -0.5px;
  }
`;
export const MenuItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    grid-gap: 10px;
  }
`;
export const MenuItem = styled.div`
  height: 48px;
  padding: 8px 24px;
  flex-shrink: 0;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDual}) {
    height: 34px;
    padding: 8px 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    height: 34px;
    padding: 8px 12px;
  }
`;
export const StyledMenuItemContent = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: ${({ theme }) => theme.color.transparentWhite};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    font-size: 12px;
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
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.mystic};
  color: ${({ theme }) => theme.color.waterloo};
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin-left: calc(100vw - 983px);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 100%;
    margin: 0 auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    height: 44px;
    margin: 8px auto 8px;
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    width: 180px;
    margin-right: 50px;
  }
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
    outline: 1px solid ${({ theme }) => theme.color.white};
    border-radius: 29px;
  }
  & {
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
    font-weight: normal;
    border-radius: 29px;
  }
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
`;
