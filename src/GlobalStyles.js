import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    body {
        background-color: rgb(245, 245, 250);
        font-family: 'Poppins', sans-serif;
        margin: 0;
    }
`;