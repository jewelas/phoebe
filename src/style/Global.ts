import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: HelveticaNeueLTStd, sans-serif;
    }
    html, body {
        min-height: 100%;
        margin: 0px;
    }
`;

export default GlobalStyle;