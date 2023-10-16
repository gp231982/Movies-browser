import styled from "styled-components";

export const StylesPersonDetails = styled.div`
    display: flex;
    flex-direction: column;
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
    justify-content: space-around;
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        width: 100%;
        gap: 16px;
        justify-content: center;
        align-items: center;
    }
`;
