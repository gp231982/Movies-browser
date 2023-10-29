import { styled } from "styled-components";

export const StyledState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    gap: 15px;
  }
`;

export const NoResultsInfo = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-family: Poppins;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  width: 100%;
  margin-left: 276px;
  margin-top: 56px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 22px;
    font-weight: 500;
    line-height: 130%;
    margin-left: 176px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDual}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    font-size: 14px;
    margin-left: 40px;
  }
`;

export const NoResultsImage = styled.img`
  width: 100%;
  max-width: 668px;
`;
