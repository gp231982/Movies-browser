import styled from "styled-components";

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
`;

export const Picture = styled.img`
  max-width: 292px;
  height: 434px;
  justify-self: center;
  border-radius: 5px;
`;

export const Description = styled.div`
  height: 134px;
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
`;

export const Date = styled.p`
  font-size: 16px;
  display: flex;
  align-self: flex-start;
  font-weight: 400;
  line-height: 1.5;
  margin: 8px 0 0 0;
  color: ${({ theme }) => theme.color.waterloo};
`;

export const Rating = styled.div`
  align-self: flex-start;
  align-items: center;
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  height: 24px;
  margin: 16px 0 0 0;
`;

export const Rate = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  margin: 0;
`;

export const Votes = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.color.waterloo};
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
`;

export const RateIconBox = styled.div`
  width: 24px;
  height: 24px;
`;
