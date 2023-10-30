import styled, { css } from "styled-components";

export const StyledPersonDetails = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile3}) {
    margin: 16px;
  }
`;

export const PersonTile = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  max-width: 1368px;
  padding: 40px;
  margin-top: 56px;
  align-content: start;
  justify-content: start;
  display: grid;
  grid-gap: 0px 40px;
  grid-template-columns: 0fr 3fr;
  grid-template-rows: 0fr 3fr;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 24px 24px 134px 24px;
    margin-top: 24px;
    grid-gap: 0px 24px;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 0fr 80%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDual}) {
    padding: 16px;
    margin-top: 10px;
    grid-gap: 0px 16px;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 1fr auto;
  }
`;

export const Picture = styled.img`
  max-width: 399px;
  max-height: 564px;
  border-radius: 5px;
  align-self: start;
  justify-self: end;
  grid-area: 1 / 1 / span 2 / 2;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 212px;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDual}) {
    width: 116px;
    height: 163px;
    justify-self: start;
    grid-area: 1 / 1 / 2 / 2
  }
`;

export const MainInfo = styled.div`
  padding: 8px 0px 24px 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-bottom: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDual}) {
    padding-bottom: 16px;
  }
`;

export const PersonTitle = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
  margin-bottom: 24px;
  margin-top: 0px;
  color: ${({theme}) => theme.color.woodSmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 24px;
    font-weight: 600;
    line-height: 18.2px;
    margin-bottom: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDual}) {
    font-size: 14px;
    font-weight: 500;
    line-height: 18.2px;
    margin-bottom: 12px;
  }
`;

export const PersonBirthDetails = styled.div`
  display: flex;
  flex-direction: row;

  ${({ "data-mobile": mobileDual }) =>
    mobileDual &&
    css`
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileDual}) {
         font-size: 12px;
         display: flex;
         flex-direction: column;
        }
    `}
`;

export const DateLabel = styled.div`
  color: ${({ theme }) => theme.color.stormGray};
  font-size: 18px;
  font-weight: 400;
  line-height: 14.4px;
  margin: 0px 10px 12px 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 15px;
    margin-right: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDual}) {
    display: none;
  }

  ${({ "data-none": none }) =>
    none &&
    css`
        display: none;
  `}

  ${({ "data-mobile": mobileDual }) =>
    mobileDual &&
    css`
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileDual}) {
         display: flex;
         font-size: 12px;
         margin-right: 4px;
    }
  `}
`;

export const PlaceLabel = styled.div`
  color: ${({ theme }) => theme.color.stormGray};
  font-size: 18px;
  font-weight: 400;
  line-height: 14.4px;
  margin: 0px 10px 3px 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 15px;
    margin-right: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDual}) {
    font-size: 12px;
  }
`;


export const PersonBirthData = styled.div`
    color: ${({theme}) => theme.color.woodSmoke};
  font-size: 18px;
  font-weight: 400;
  line-height: 14.4px;
  margin: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDual}) {
    font-size: 12px;
  }
`;

export const Biography = styled.p`
  color: ${({theme}) => theme.color.woodSmoke};
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  margin: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDual}) {
    margin-top: 16px;
    font-size: 12px;
    line-height: 22.4px;
    grid-area: 2 / 1 / 3 / 3;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
  color: ${({theme}) => theme.color.woodSmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDual}) {
    font-size: 14px;
    font-weight: 500;
    line-height: 18.2px;
    grid-area: 2 / 1 / 3 / 3;
  }
`;

