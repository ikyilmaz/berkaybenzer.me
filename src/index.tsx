import React from "react";
import ReactDOM from "react-dom";
import "./i18n/i18n.ts";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

const GlobalStyles = createGlobalStyle(
  ({ theme }) => `
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    
     
    ::selection {
      color: ${theme.palette.primaryDark};
      background: ${theme.palette.black};
    }
    
    html {
      font-size: 62.5%;
      font-family: ${theme.font.families.montserrat};
    
      scrollbar-face-color: #646464;
      scrollbar-base-color: #646464;
      scrollbar-3dlight-color: #646464;
      scrollbar-highlight-color: #646464;
      scrollbar-track-color: #000;
      scrollbar-arrow-color: #000;
      scrollbar-shadow-color: #646464;
    }
    
    
    body {
      box-sizing: border-box;
      overflow-x: hidden;
    }
    
    ::-webkit-scrollbar {
      width: 8px;
      height: 3px;
    }
    
    ::-webkit-scrollbar-button {
      background-color: ${theme.palette.primaryDark};
    }
    
    ::-webkit-scrollbar-track {
      background-color: #646464;
    }
    
    ::-webkit-scrollbar-track-piece {
      background-color: ${theme.palette.black};
    }
    
    ::-webkit-scrollbar-thumb {
      height: 50px;
      background-color: ${theme.palette.primaryDark};
    }
    
    ::-webkit-scrollbar-corner {
      background-color: #646464;
    }
    
    ::-webkit-resizer {
      background-color: #666;
    }  
`
);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
