import { styled } from "styled-components";

export const StyledState = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        gap: 15px;
    }
`;

export const NoResultsImage = styled.img`
    width: 100%;
    max-width: 668px;
`