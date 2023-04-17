import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: #E60023;
        --colorRedHovered: #ad081b;
        --greyHover: #f5f5f5;
        --colorGreyHovered: #e2e2e2;
        --standardGrey: #ededed
    }

    * {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    body {
        margin: 0;
        padding: 0;
    }
`;
