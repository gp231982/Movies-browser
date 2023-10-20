import styled from "styled-components";

export const Genre = styled.div`
  background-color: ${({ theme }) => theme.color.mystic};
  padding: 8px 16px 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 10px;
    font-weight: 400;
    line-height: 1.2;
    padding: 4px 8px;
  }
`;
