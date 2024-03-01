import { Component } from "react";
import ThemeContextProvider from "./Context/ThemeContext";
import { Navigation } from "./Components/Navigation";
import { BookList } from "./Components/BookList";
import ThemeToggle from "./Components/ThemeToggle";
import AuthContextProvider from "./Context/AuthContext";

export class App extends Component {
  render() {
    return (
      <>
        <ThemeContextProvider>
          <AuthContextProvider>
            <Navigation />
            <BookList />
            <ThemeToggle />
          </AuthContextProvider>
        </ThemeContextProvider>
      </>
    );
  }
}
