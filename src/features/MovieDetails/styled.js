import styled from "styled-components";

export const StyledMoviePage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  align-items: center;
  background: ${({ theme }) => theme.color.whisper};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    row-gap: 15px;
  }
`;

export const BigPoster = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    img {
    width: 72%;
    height: auto;
    object-fit: cover;
    }

    &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        189.44deg, 
        rgba(0, 0, 0, 0) 58.48%, 
        rgba(0, 0, 0, 0.106473) 63.17%, 
        rgba(0, 0, 0, 0.235359) 68.85%, 
        rgba(0, 0, 0, 0.492821) 78.08%, 
        rgba(0, 0, 0, 0.740286) 85.86%, 
        #000000 92.87%
    ),
    linear-gradient(
        270deg, 
        #000000 14.11%, 
        rgba(0, 0, 0, 0.873268) 15.08%, 
        rgba(0, 0, 0, 0.720529) 16.51%, 
        rgba(0, 0, 0, 0.294577) 19.99%, 
        rgba(0, 0, 0, 0.159921) 21.88%, 
        rgba(0, 0, 0, 0) 25.68%
    ),
    linear-gradient(
        180deg, 
        #000000 0%, 
        rgba(0, 0, 0, 0.689555) 4.66%, 
        rgba(0, 0, 0, 0.439033) 9.34%, 
        rgba(0, 0, 0, 0.20628) 15.16%, 
        rgba(0, 0, 0, 0) 24.22%
    ),
    linear-gradient(
        90deg, 
        #000000 13.6%, 
        rgba(0, 0, 0, 0.984059) 14.58%, 
        rgba(0, 0, 0, 0.967732) 15.44%, 
        rgba(0, 0, 0, 0.865569) 16.3%, 
        rgba(0, 0, 0, 0.230315) 22.87%, 
        rgba(0, 0, 0, 0) 26.64%
    );
  }
`;

export const MainInfo = styled.div`
  position: absolute;
  left: 15%;
  bottom: 5%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  row-gap: 8px;
  column-gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    bottom: 3%;
    left: 3%;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    row-gap: 0;
  }
`;

export const BackgroundTitle = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-size: 64px;
  font-weight: 600;
  line-height: 1.2;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 24px;
    grid-column: 1/3;
  }
`;

export const BackgroundRating = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 8px;
`;

export const BackgroundStar = styled.div`
  width: 40px;
  height: 40px;
  img {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 16px;
    height: 15px;
  }
`;

export const BackgroundValue = styled.div`
  font-size: 30px;
  font-weight: 500;
  line-height: 1.3;
  text-align: left;
  align-items: baseline;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
  }
`;

export const BackgorundSmallerValue = styled.span`
  font-size: 16px;
  font-weight: 400;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 10px;
  }
`;

export const BackgroundVotes = styled.div`
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  margin-top: 5px;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 10px;
    align-self: flex-end;
  }
`;

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


