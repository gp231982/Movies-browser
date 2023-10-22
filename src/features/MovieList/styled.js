import styled from "styled-components";
import { Link } from "react-router-dom";

export const Content = styled.div`
  margin-top: 150px 276px;
  max-width: 1368px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-left: 16px;
    margin-right: 16px;
    display: inline-block;
  }
`;

export const SectionTile = styled.h1`
  font-size: 36px;
  font-size: normal;
  font-weight: 600;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.woodSmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.2;
    display: inline-block;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 24px;
  grid-column-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
