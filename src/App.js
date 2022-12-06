import React from 'react';
import './App.css';
import AddBook from './components/AddBooksComponent/AddBook';
import AppBarComponent from './components/AppBarComponents/AppBarComponent';
import { Routes, Route } from 'react-router-dom';
import ContextProvider from './store/ContextProvider';
import BookList from './components/BookCollectionComponent/BookList';
import EditBook from './components/EditBooksComponent/EditBook';

function App() {
  return (
    <ContextProvider>
      <AppBarComponent />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/addbooks" element={<AddBook />} />
        <Route path="/editbooks/:id" element={<EditBook />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
