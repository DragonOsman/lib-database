import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.scss';

import CreateBook from "./components/CreateBook";
import ShowBookList from "./components/ShowBookList";
import ShowBookDetails from "./components/ShowBookDetails";
import UpdateBookInfo from "./components/UpdateBookInfo";

function App():JSX.Element {
  return (
    <>
      <header>
        <img src="logo.png" alt="dragon logo" />
        <h1>DragonOsman Library Database</h1>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<ShowBookList />} />
          <Route path="/create-book" element={<CreateBook />} />
          <Route path="/edit-book/:id" element={<UpdateBookInfo />} />
          <Route path="/show-book/:id" element={<ShowBookDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
