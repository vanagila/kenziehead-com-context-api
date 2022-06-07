import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin:auto;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    list-style: none;
  }

  :root { 
  --cor-primaria: #007BFF;
  --cor-secundaria: #6b54de;
  --cinza-cem: #333333;
  --cinza-cinquenta: #828282;
  --cinza-zero: #f5f5f5;
  }
  

  body, input, button, h1, h2, h3, h4, h5, h6, p, span {
    font-family: 'Bebas Neue', cursive;
  }

  body {
    
  }

  button {
    cursor: pointer;
  }

`;
