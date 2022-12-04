import React, { createContext, useState, useEffect } from 'react';

export const BooksContext = createContext({});

const ContextProvider = (props) => {
  const [books, setBooks] = useState(
    JSON.parse(window.localStorage.getItem('booksCollection')) || []
  );

  useEffect(() => {
    setBooks(JSON.parse(window.localStorage.getItem('booksCollection')) || []);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('booksCollection', JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    setBooks((prevData) => [...prevData, book]);
  };

  const getBook = (id) => {
    return books[books.findIndex((book) => +book.id === +id)];
  };

  const updateBook = (id, updatedBook) => {
    const updatedBooks = [...books];
    const index = books.findIndex((book) => +book.id === +id);

    updatedBooks[index] = {
      id: +id,
      ...updatedBook,
    };
    setBooks(updatedBooks);
  };

  const context = {
    books: books,
    addBook: addBook,
    updateBook: updateBook,
    getBook: getBook,
  };

  return (
    <BooksContext.Provider value={context}>
      {props.children}
    </BooksContext.Provider>
  );
};

export default ContextProvider;
