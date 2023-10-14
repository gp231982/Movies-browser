import styled from "styled-components";

export const MoviePeopleWrapper = styled.div`
  max-width: 1368px;
  ${"" /* height: 777px; */}
  margin: 0 auto;
`;

export const StyledHeader = styled.h2`
  color: #000;

  /* Desktop/H1 */
  font-family: Poppins;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 43.2px */
`;

export const TilesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  flex-wrap: wrap;
  flex-shrink: 0;
  gap: 24px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
