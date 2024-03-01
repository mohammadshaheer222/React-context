import { Component } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export class BookList extends Component {
  static contextType = ThemeContext; //ContextApi can do 2 ways .this is the first version, second version done in Navigation.jsx
  render() {
    console.log(this.context);
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        style={{ color: theme.syntax, background: theme.bg }}
        className="book-list"
      >
        <ul>
          <li style={{ background: theme.ui }}>The way of Kings</li>
          <li style={{ background: theme.ui }}>The Name of the wind</li>
          <li style={{ background: theme.ui }}>The Final Empire</li>
        </ul>
      </div>
    );
  }
}
