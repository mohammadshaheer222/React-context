import React, { Component } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export class ThemeToggle extends Component {
  static contextType = ThemeContext;

  render() {
    const { toggleTheme, isLightTheme } = this.context;
    return (
      <button onClick={toggleTheme}> {isLightTheme ? "Dark" : "Light"}</button>
    );
  }
}

export default ThemeToggle;
