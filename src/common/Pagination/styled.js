import styled, { css } from "styled-components";
import { ReactComponent as prevArrow } from "../../images/prevArrow.svg";
import { ReactComponent as nextArrow } from "../../images/nextArrow.svg";

export const StyledPagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 100px;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 5px;
    background-color: ${({theme}) => theme.color.pattensBlue};
    color: ${({theme}) => theme.color.mineShaft};
    padding: 8px 12px;
    margin-right: 12px;
    cursor: pointer;

    &disabled {
        background-color: ${({theme}) => theme.color.mystic};
        color: ${({theme}) => theme.color.woodSmoke};
        cursor: auto;
    }
`;

export const PreviousArrowIcon = styled(prevArrow)`
    color: ${({theme}) => theme.color.scienceBlue};
    margin: 0 5px 0 5px;

    ${({arrowDisabled}) => 
        arrowDisabled && 
        css`
            color: ${({theme}) => theme.color.waterloo};
        `};
`;

export const NextArrowIcon = styled(nextArrow)`
    color: ${({theme}) => theme.color.scienceBlue};
    margin: 0 5px 0 5px;

    ${({arrowDisabled}) => 
        arrowDisabled && 
        css`
            color: ${({theme}) => theme.color.waterloo};
        `};
`;

export const ButtonText = styled.p`
    margin: 0 5px 0 5px;
`;

export const PagesCounter = styled.div`
    font-size: 16px;
    color: ${({theme}) => theme.color.waterloo};
    margin: 0 24px 0 16px;
`;

export const PageNumber = styled.span`
    font-size: 16px;
    color: ${({theme}) => theme.color.woodSmoke};
    margin: 0 8px 0 8px;
    font-weight: 600;
`;