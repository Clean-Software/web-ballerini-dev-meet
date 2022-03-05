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

    .orange {
        color: ${(props) => props.theme.palette.primary.orange}!important;
    }

    #__next {
        max-width: 1600px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    ::-webkit-scrollbar {
        width: 7px;
        height: 7px;
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 10px;
    }
`;

export { GlobalStyles };
