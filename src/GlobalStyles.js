import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    background-color: #F0E68C;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Open Sans', sans-serif;
  }

  button {
    font-family: 'Lato', sans-serif;
  }
`;

export default GlobalStyles;
