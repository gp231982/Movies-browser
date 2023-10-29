import styled from "styled-components";
import { Link } from "react-router-dom";

export const Content = styled.div`
  max-width: 1408px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    padding: 0 16px;
  }
`;

export const SectionTile = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  text-align: left;
  margin: 56px 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    width: 288px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  justify-content: space-around;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
    width: 100%;
    gap: 16px;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
