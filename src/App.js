import React from 'react';
import './App.css';
import AddBookComponent from './components/AddBooksComponent/AddBookComponent';
import AppBarComponent from './components/AppBarComponents/AppBarComponent';
import { Routes, Route } from 'react-router-dom';
import NewBooksComponent from './components/NewBooksComponent/NewBooksComponent';
import BookCollectionComponent from './components/BookCollectionComponent/BookCollectionComponent';
import EditBookComponent from './components/EditBooksComponent/EditBookComponent';
import ContextProvider from './store/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <AppBarComponent />
      <Routes>
        <Route path="/" element={<BookCollectionComponent />} />
        <Route path="/newbooks" element={<NewBooksComponent />} />
        <Route path="/addbooks" element={<AddBookComponent />} />
        <Route path="/editbooks/:id" element={<EditBookComponent />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
