import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

  const [isLightTheme, setIsLightTheme] = useState(false);
  const [light, setLight] = useState({
    syntax: "#555",
    ui: "#ddd",
    bg: "#eee",
  });
  const [dark, setDark] = useState({ syntax: "#ddd", ui: "#333", bg: "#555" });

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        isLightTheme: isLightTheme,
        light: light,
        dark: dark,
        toggleTheme: toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
// state = {
//   isLightTheme: false,
//   light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
//   dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
// };

export default ThemeContextProvider;
