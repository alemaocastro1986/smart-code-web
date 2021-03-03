import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body {
    height: 100vh;
    width: 100vw;
    background-color: var(--primary);
  }

  body, #root {
    font-size: 16px;
    font-family: 'Raleway', sans-serif;    
    display: flex;
    align-items:center;
    justify-content: center;
  }  
  
  button, a {
    cursor: pointer;
  }

  input {
    border: none;
    height: 44px;
  }
 
  :root {
    --primary: #262525;
    --secondary: #017191;
    --secondary-hover: #025066;
    --bg-light: #fafbfd;
    --gray: #b3b3b3;
    --white: #fff;
    --back-input: #1a1a1a;
    --placeholder: #666360;
    --light: #f0f0f0;
    --danger: #c53030;
    
  }

`;
