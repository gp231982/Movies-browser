import styled from "styled-components";

export const StyledPersonDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PersonTile = styled.article`
    background-color: ${({ theme }) => theme.color.white};
    max-width: 1368px;
    padding: 40px;
    margin-top: 60px;
    align-content: start;
    justify-content: start;
    display: grid;
    grid-gap: 0px 40px;
    grid-template-columns: 0fr 3fr;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        padding: 16px;
        grid-gap: 0px 16px;
        grid-template-columns: 1fr 5fr;
    }
`;

export const Picture = styled.img`
    width: 399px;
    height: 564px;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        width: 116px;
        height: 163px;
    }
`;

export const Main = styled.div`
    padding: 8px 0px 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        padding: 4px 0px 4px 0px;
        gap: 16px;
    }
`;

export const PersonTitle = styled.h1`
    font-size: 36px;
    font-weight: 600;
    line-height: 43.2px;
    margin-bottom: 24px;
    margin-top: 0px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        font-size: 14px;
        font-weight: 500;
        line-height: 18.2px;
        margin-bottom: 12px;
    }
`;

export const PersonBirthDetails = styled.div`
    font-size: 18px;
    font-weight: 400;
    line-height: 21.6px;
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        font-size: 12px;
        line-height: 14.4px;
        flex-direction: column;
    }
`;

export const PersonInfo = styled.p`
    color: ${({ theme }) => theme.color.stormGray};
    margin: 0px 10px 3px 0px;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 11px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        display: flex;
        margin-right: 4px;
        gap: 8px;
    }
`;

export const PersonBirthData = styled.p`
    color: ${({ theme }) => theme.color.black};
    margin: 0px 10px 3px 0px;
`;

export const Biography = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    margin: 0px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        font-size: 12px;
        line-height: 22.4px;
    }
`;

export const CastPerson = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 40px 0px 40px;
`;

export const CrewPerson = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 40px 0px 40px;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
    font-weight: 500;
    line-height: 18.2px;
  }
`;

export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
    gap: 16px;
    justify-content: center;
    align-items: center;
  }
`;
