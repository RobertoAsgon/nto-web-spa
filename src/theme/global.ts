import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
    * {
      padding: 0;
      margin: 0;
      border: 0;
      box-sizing: border-box
    }
    a {
      text-decoration: unset;
    }
  }
  `
export default GlobalStyle
