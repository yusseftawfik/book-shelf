import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookDetails } from "./components/BookDetails";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="search" element={<SearchPage />} />
          <Route exact path="book/:id" element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
