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

  /* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  width: 12px;
    background: #2f3543;
    border-left: 0 solid #fff;
    border-right: 0 solid #fff;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #45484f;
    width: 0;
    height: 25%;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #45484f;
}

`;
