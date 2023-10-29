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

  @media (max-width: 1380px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1050px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
