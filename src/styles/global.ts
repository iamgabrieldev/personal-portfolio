import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button, textarea, input {
    font-family: 'Roboto', sans-serif;
  }

  body {

    @media(max-width:1080px) {
      font-size: 14px;
    }

    font-size: 16px;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.white}
  }

  button {
    border: 0;
    cursor: pointer;
  }

`
