import { Component, useContext } from "react";

import { ThemeContext } from "../Context/ThemeContext";
import { AuthContext } from "../Context/AuthContext";

const Navigation = () => {
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px",
        background: theme.ui,
        color: theme.syntax,
        // maxWidth: "400px"
      }}
    >
      <div>
        <h4>Logo</h4>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <button onClick={toggleAuth}>
          {isAuthenticated ? "Logged In" : "Logged Out "}
        </button>
        <a style={{ textDecoration: "none", color: theme.syntax }} href="">
          Home
        </a>
        <a style={{ textDecoration: "none", color: theme.syntax }} href="">
          About
        </a>
        <a style={{ textDecoration: "none", color: theme.syntax }} href="">
          Service
        </a>
        <a style={{ textDecoration: "none", color: theme.syntax }} href="">
          Contact
        </a>
      </div>
      <div>
        <button onClick={toggleTheme}>{isLightTheme ? "Dark" : "Light"}</button>
      </div>
    </nav>
  );
};


export default Navigation;