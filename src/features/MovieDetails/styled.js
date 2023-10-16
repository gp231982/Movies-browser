import styled from "styled-components";

export const Tile = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: 40px;
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  gap: 40px;
  display: grid;
  grid-template-columns: auto 1fr;
  margin-bottom: 20px;
  width: 1368px;
  height: 464;
  padding: 40px;
  margin: 0 auto;
  margin-bottom: 64px;
  margin-top: 64px;
`;

export const Picture = styled.img`
  width: 312px;
  height: 464px;
  border-radius: 5px;
  align-self: center;
`;

export const Information = styled.div`
  display: flex;
  padding: 8px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.black};
  margin: 0px;
`;

export const Year = styled.p`
  font-size: 22px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.black};
  margin: 0;
`;

export const ProductionAndRelease = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const ProductionBox = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 0 8px 0;
`;

export const Production = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.stormGray};
  margin: 0;
`;

export const ProductionData = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.black};
  margin: 0;
`;

export const ReleaseBox = styled.div`
  display: flex;
  gap: 10px;
  margin: 0px;
`;

export const Release = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.stormGray};
  margin: 0;
`;

export const ReleaseData = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.black};
  margin: 0;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.6;
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
  color: ${({ theme }) => theme.color.black};
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0;
`;

export const TotalRate = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  margin: 0;
`;

export const Votes = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  margin: 0;
`;
