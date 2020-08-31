import React, { useContext } from "react";
import Switch from "react-switch";
import { Container } from "./styles";
import { ThemeContext } from "styled-components";

function Header({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <div>
      <Container>
        <h1>Hello World</h1>
        <Switch
          onChange={toggleTheme}
          checked={title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          onColor={colors.secundary}
        />
      </Container>
    </div>
  );
}

export default Header;
