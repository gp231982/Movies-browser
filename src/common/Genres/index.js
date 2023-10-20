import styled from "styled-components";

export const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  row-gap: 2px;
  margin: 8px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }
`;
