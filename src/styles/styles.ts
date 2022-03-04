import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
         @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    input, button, h1, h2, h3, h4 {
        font-family: 'Epilogue', sans-serif;
    }

    span, p {
        font-family: 'Rajdhani', sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }
`;

export { GlobalStyles };
