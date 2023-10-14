import styled from "styled-components";
import { ReactComponent as Error } from "./error.svg";

export const ErrorIcon = styled(Error)`
  margin-top: 180px;
`;

export const Header = styled.div`
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2;
`;

export const SubHeader = styled.div`
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
`;

export const ErrorButon = styled.button`
  padding: 16px 24px;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.scienceBlue};
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};
  transition: all 0.2s ease 0s;

  &:hover {
    transform: scale(1.05);
    background-color: ${({ theme }) => theme.color.royalBlue};
  }
`;
