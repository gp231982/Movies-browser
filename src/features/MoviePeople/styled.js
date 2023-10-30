import styled from "styled-components";

export const MoviePeopleWrapper = styled.div`
  max-width: 1368px;
  margin: 0 auto;
`;

export const StyledHeader = styled.h2`
  color: ${({ theme }) => theme.color.waterloo};
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
`;

export const TilesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  flex-wrap: wrap;
  flex-shrink: 0;
  gap: 24px;


  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDual}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDual}) {
    gap: 16px;
  }
`;
