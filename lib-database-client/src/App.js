import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams
} from "react-router-dom";
import './App.css';

import CreateBook from "./components/CreateBook";
import ShowBookList from "./components/ShowBookList";
import ShowBookDetails from "./components/ShowBookDetails";
import UpdateBookInfo from "./components/UpdateBookInfo";

function App() {
  const { id } = useParams();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowBookList />} />
        <Route path="/create-book" element={<CreateBook />} />
        <Route path="/edit-book/:id" element={<UpdateBookInfo id={id} />} />
        <Route path="/show-book/:id" element={<ShowBookDetails id={id} />} />
      </Routes>
    </Router>
  );
}

export default App;
