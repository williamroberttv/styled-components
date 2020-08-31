import React, { useState } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";

import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

function App() {
  const [theme, setTheme] = useState(light);

  const handleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Header toggleTheme={handleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
