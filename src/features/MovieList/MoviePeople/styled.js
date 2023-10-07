import styled from "styled-components";

export const MoviePeopleWrapper = styled.div`
  width: 1368px;
  ${'' /* height: 777px; */}
  outline: 1px solid grey;
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
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  gap: 24px;
`;
