import styled from "styled-components";
import { ReactComponent as RateIc } from "./rate.svg";

export const MovieWrapper = styled.button`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  padding: 16px;
  min-width: 324px;
  height: 650px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  cursor: pointer;
  border: none;
  transition: all 0.5s ease 0s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: grid;
    grid-template-columns: auto 1fr;
    width: 288px;
    margin: 0 16px 0 16px;
    gap: 16px;
    height: auto;
    grid-template-rows: auto;
  }
`;

export const Picture = styled.img`
  max-width: 292px;
  height: auto;
  justify-self: center;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 114px;
    max-height: 169px;
  }
`;

export const Description = styled.div`
  height: 134px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-height: 134;
  }
`;

export const Tile = styled.h2`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  text-align: left;
  margin: 8px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.3;
  }
`;

export const Date = styled.p`
  font-size: 16px;
  display: flex;
  align-self: flex-start;
  font-weight: 400;
  line-height: 1.5;
  margin: 8px 0 0 0;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 13px;
    font-weight: 400;
    line-height: 1.3;
  }
`;

export const Rating = styled.div`
  align-self: flex-start;
  align-items: center;
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  height: 24px;
  margin: 16px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 0px;
    gap: 8px;
    align-items: flex-start;
  }
`;

export const RateIcon = styled(RateIc)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 16px;
    height: 16px;
  }
`;

export const Rate = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 13px;
    font-weight: 600;
    line-height: 1.3;
  }
`;

export const Votes = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.color.waterloo};
  font-weight: 400;
  line-height: 1.5;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 13px;
    font-weight: 400;
    line-height: 1.3;
  }
`;

export const RateIconBox = styled.div`
  width: 24px;
  height: 24px;
`;

export const Main = styled.div``;
