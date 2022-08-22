import { useState, useEffect } from "react";
import "../App.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";

function ShowBookList() {
  const [booksArr, fillBooksArr] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/books")
      .then(res => {
        fillBooksArr(res.data);
      })
      .catch(err => {
        console.error(`Error from ShowBookList: ${err.message}`);
      });
  }, []);

  const books = booksArr;
  let bookList;

  if (!books) {
    bookList = "There is no book record!";
  } else {
    bookList = books.map((book, k:number) => <BookCard book={book} key={k} />);
  }

  return (
    <div className="ShowBookList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Book List</h2>
          </div>

          <div className="col-md-11">
            <Link to="/create-book" className="btn btn-outline-warning float-right">
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className="list">
          {bookList}
        </div>
      </div>
    </div>
  );
}

export default ShowBookList;
