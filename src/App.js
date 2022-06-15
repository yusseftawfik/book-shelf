import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as apiFunctions from "./API";
import { BookDetails } from "./components/BookDetails";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";

function App () {
  const [result, setResult] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await apiFunctions.getAll().then((res) => setResult(res));
    };
    getData();
  }, []);
  const updateBook = (book, shelf) => {
    book.shelf = shelf
    apiFunctions.update(book, shelf).then(() => {
      setResult([...result.filter(b => b.id !== book.id), book])
    })
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/book-shelf" element={<Home books={result} updateBook={updateBook} />} />
          <Route exact path="/book-shelf/search" element={<SearchPage books={result} updateBook={updateBook} />} />
          <Route exact path="/book-shelf/book/:id" element={<BookDetails />} />
          <Route exact path="/book-shelf/search/book/:id" element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
