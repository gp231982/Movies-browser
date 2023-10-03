import styled from "styled-components";

export const Content = styled.div`
  margin-top: 150px 276px;
  max-width: 1368px;
  height: 1391px;
  flex-shrink: 0;
  margin: 0 auto;
`;

export const SectionTile = styled.h1`
  font-size: 36px;
  font-size: normal;
  font-weight: 600;
  line-height: 1.2;
  color: #181818;
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
  background-color: #fff;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
  cursor: pointer;
  border: none;

  &:hover {
    box-shadow: 0px 10px 20px 0px rgba(186, 199, 213, 0.5);
    transform: translate(-1px, -1px);
    transition: all 0.3s;
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
  color: #7e839a;
`;

export const TypesWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Type = styled.div`
  background-color: #e4e6f0;
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
  color: #7e839a;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
`;
