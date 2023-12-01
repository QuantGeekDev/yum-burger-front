import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, ::before, ::after {
  box-sizing: border-box;
}

html {
  line-height: 1.15; 
  -webkit-text-size-adjust: 100%; 
}

body {
  padding: 0;
  margin: 0;
}

a {
  background-color: none;
  text-decoration: none;
}

img {
  max-width: 100%;
}

ol, ul {
  list-style: none;
}

textarea {
    white-space: revert;
}


`;

export default GlobalStyles;
