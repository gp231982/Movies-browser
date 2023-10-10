import styled from "styled-components";

export const Content = styled.div`
  margin-top: 150px 276px;
  max-width: 1368px;
  flex-shrink: 0;
  margin: 0 auto;
`;

export const SectionTile = styled.h1`
  font-size: 36px;
  font-size: normal;
  font-weight: 600;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.woodSmoke};
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 24px;
  grid-column-gap: 24px;
`;

