import { React, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { BookContext } from "../Context/BookContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      style={{ color: theme.syntax, background: theme.bg }}
      className="book-list"
    >
      {books &&
        books.map((book) => (
          <ul key={book.id}>
            <li style={{ background: theme.ui }}>{book.title}</li>
          </ul>
        ))}
    </div>
  );
};

export default BookList;
