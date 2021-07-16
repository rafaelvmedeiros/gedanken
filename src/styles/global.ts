import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
  }

  body {
    background: #232222;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serig;
  }

  button, textarea, input {
    outline: 0;
  }

  a, :visited, :hover {
    color: #fff;
    text-transform: none;
    text-decoration: none;
    transition-duration: 0.2s;

    :hover {
      color: orange;
    }

  }

`;
