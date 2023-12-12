import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, ::before, ::after {
  box-sizing: border-box;
}

  :root {
--toastify-color-error: ${({ theme }) => theme.colors.error};
--toastify-color-success: ${({ theme }) => theme.colors.success};
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
  color: inherit
}

button {
  border-radius: none;
  box-shadow: none;
  background-color: transparent;
}

img {
  max-width: 100%;
}

html {
  font-family: ${({ theme }) => theme.fonts.content};
}

h1,
h2,
h3 {
  font-family: ${({ theme }) => theme.fonts.title};
  margin: 0;
}

p {
  margin: 0;
}
ol, ul {
  list-style: none;
  padding-inline-start: 0;
}

textarea {
    white-space: revert;
}

`;

export default GlobalStyles;
