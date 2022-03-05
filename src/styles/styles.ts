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

    body {
        background-color: ${(props) => props.theme.palette.background};
        color: ${(props) => props.theme.palette.primary.white};
    }

    input, button, h1, h2, h3, h4, span, p {
        font-family: 'Epilogue', sans-serif;
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

    #__next {
        max-width: 1240px;
        margin: 0 auto;
        padding: 0 2rem;
    }
`;

export { GlobalStyles };
