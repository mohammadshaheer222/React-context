import { Component } from "react";

import { ThemeContext } from "../Context/ThemeContext";
import { AuthContext } from "../Context/AuthContext";

export class Navigation extends Component {
  state = {
    isOpen: false,
  };
  //   static contextType = ThemeContext;
  render() {
    // console.log(this.context);
    // const { isLightTheme, light, dark } = this.context;
    // const theme = isLightTheme ? light : dark;
    return (
      <AuthContext.Consumer>
        {(authContext) => (
          <ThemeContext.Consumer>
            {(themeContext) => {
              const { isLightTheme, light, dark, toggleTheme } = themeContext;
              const theme = isLightTheme ? light : dark;
              const { isAuthenticated, toggleAuth } = authContext;
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
                    <a
                      style={{ textDecoration: "none", color: theme.syntax }}
                      href=""
                    >
                      Home
                    </a>
                    <a
                      style={{ textDecoration: "none", color: theme.syntax }}
                      href=""
                    >
                      About
                    </a>
                    <a
                      style={{ textDecoration: "none", color: theme.syntax }}
                      href=""
                    >
                      Service
                    </a>
                    <a
                      style={{ textDecoration: "none", color: theme.syntax }}
                      href=""
                    >
                      Contact
                    </a>
                  </div>
                  <div>
                    <button onClick={toggleTheme}>
                      {isLightTheme ? "Dark" : "Light"}
                    </button>
                  </div>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}
