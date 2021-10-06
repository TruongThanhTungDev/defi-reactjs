import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  :root {
    --primary-color: #ffffff;
    --secondary-color: #DBA83D;
    --primary-bg: #232732; 
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }

`;
