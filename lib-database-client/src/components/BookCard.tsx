import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";

function BookCard(props:any) {
  const book = props.book;

  return (
    <div className="card-container">
      <img
        src="../../images/cairo-book-img.jpg"
        alt="Cover of The Book of Cairo"
      />
      <div className="desc">
        <h2>
          <Link to={`/show-book/${book._id}`}>
            {book.title}
          </Link>
        </h2>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
      </div>
    </div>
  );
}

export default BookCard;
