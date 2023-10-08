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

export const MovieWrapper = styled.button`
  padding: 16px;
  max-width: 324px;
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
  flex-shrink: 0;
  border-radius: 5px;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const Tile = styled.h2`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin-top: 16px;
  margin-bottom: 0;
`;

export const Date = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  margin: 0 0 8px 0;
  color: ${({ theme }) => theme.color.waterloo};
`;

export const TypesWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Type = styled.div`
  background-color: ${({ theme }) => theme.color.mystic};
  border-radius: 5px;
  padding: 8px 16px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 39px;
`;

export const Rate = styled.p`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 600;
  margin: 0;
`;

export const Votes = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.color.waterloo};
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
`;
