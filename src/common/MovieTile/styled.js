import styled from "styled-components";
import { ReactComponent as RateIc } from "./rate.svg";

export const MovieWrapper = styled.button`
  min-width: 100%;
  height: 650px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  padding: 16px;
  display: grid;
  border: none;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    column-gap: 16px;
    min-width: 100%;
    height: 201px;
  }
`;

export const Picture = styled.img`
  max-width: 292px;
  max-height: 434px;
  justify-self: center;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    width: 114px;
    height: 169px;
    grid-column: 1;
    grid-row: 1 / 3;
  }
`;

export const Description = styled.div`
  height: 134px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    height: auto;
    grid-column: 2;
    grid-row: 1;
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
  max-width: 300px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    font-size: 16px;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    font-size: 13px;
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    grid-column: 2;
    grid-row: 2;
    column-gap: 8px;
  }
`;

export const RateIcon = styled(RateIc)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    width: 16px;
    height: 16px;
  }
`;

export const Rate = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    font-size: 13px;
  }
`;

export const Votes = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.color.waterloo};
  font-weight: 400;
  line-height: 1.5;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
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
