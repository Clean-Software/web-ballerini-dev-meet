import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
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
