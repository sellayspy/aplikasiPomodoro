import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import App from "./App.jsx";

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  html,body{
    background-color: ${(props) => props.theme.colors.bg};;
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    color: white;
  }

`;

const theme = {
  colors: {
    primary: "#b85600",
    secondary: "#08002b",
    bg: "#220045",
  },
};

createRoot(document.getElementById("root")).render(<StrictMode></StrictMode>);
