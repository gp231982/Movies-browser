import styled from "styled-components";
import { ReactComponent as RateIc } from "../../common/MovieTile/rate.svg";

export const StyledMoviePage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  align-items: center;
  background: ${({ theme }) => theme.color.whisper};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
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
  left: 14%;
  bottom: 7%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  row-gap: 8px;
  column-gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    bottom: 6%;
    left: 13%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    bottom: 5%;
    left: 12%;
    row-gap: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDual}) {
    bottom: 4%;
    left: 12%;
    row-gap: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
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

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 64px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDual}) {
    font-size: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
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

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 25px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDual}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    font-size: 14px;
  }
`;

export const BackgorundSmallerValue = styled.span`
  font-size: 16px;
  font-weight: 400;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDual}) {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    font-size: 10px;
  }
`;

export const BackgroundVotes = styled.div`
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  margin-top: 5px;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDual}) {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    font-size: 10px;
    align-self: flex-end;
  }
`;

export const Tile = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  display: grid;
  grid-template-columns: 312px auto;
  grid-template-rows: auto auto;
  gap: 40px;
  padding: 40px;
  margin: 0 auto;
  margin-top: 30px;
  max-width: 1340px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    grid-template-columns: 114px auto;
    gap: 16px;
    padding: 16px;
    margin: 10px 10px 0 10px;
  }

  @media(max-width: ${({theme}) => theme.breakpoint.desktop}) {
    max-width: 100%;
    margin-left: 10px;
    margin-right: 10px;
    gap: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 2px;
  }
`;

export const Picture = styled.img`
  grid-row: 1 /3;
  max-width: 312px;
  height: 464px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    grid-row: 1;
    width: 114px;
    height: 169px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-row: 1;
    max-width: 280px;
    height: auto;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    grid-row: 1;
    grid-column: 2;
    gap: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    gap: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  text-align: left;
  color: ${({ theme }) => theme.color.black};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.3;
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 24px;
  }
`;

export const Year = styled.p`
  font-size: 22px;
  font-weight: 400;
  line-height: 1.2;
  text-align: left;
  color: ${({ theme }) => theme.color.black};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    font-size: 13px;
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 14px;
  }
`;

export const ProductionAndRelease = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  text-align: left;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    font-size: 12px;
    line-height: 2;
  }
`;

export const ProductionBox = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 6px
  }
`;

export const Production = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.stormGray};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 12px;
  }
`;

export const ProductionData = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.black};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    font-size: 12px;
    font-weight: 400;
    line-height: 1.3;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 12px;
  }
`;

export const ReleaseBox = styled.div`
  display: flex;
  gap: 10px;
  margin: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 6px
  }
`;

export const Release = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.stormGray};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 12px;
  }
`;

export const ReleaseData = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.black};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 12px;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.6;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
    grid-column: 1 / 3;
    max-width: 288px;
    margin: 0 0 0 -120px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 16px;
  }
`;

export const Rating = styled.div`
  display: flex;
  gap: 8px;
  text-align: left;
  align-items: baseline;
`;

export const Rate = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    font-size: 13px;
  }
`;

export const TotalRate = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    display: none;
  }
`;

export const Votes = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    font-size: 13px;
    font-weight: 400;
    line-height: 1.3;
  }
`;

export const RateIcon = styled(RateIc)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    width: 16px;
    height: 16px;
  }
`;
