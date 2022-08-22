import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../App.scss";

function UpdateBookInfo() {
  const [state, setState] = useState({
    title: "",
    isbn: "",
    author: "",
    description: "",
    published_date: "",
    publisher: ""
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/books/${id}`)
      .then(res => {
        setState({
          title: res.data.title,
          isbn: res.data.isbn,
          author: res.data.author,
          description: res.data.description,
          published_date: res.data.published_date,
          publisher: res.data.publisher
        })
      })
      .catch(err => console.log(`Error from UpdateBookInfo: ${err.message}`));
  }, [id]);

  const onChange = (e:Event) => {
    const target = e.target as HTMLInputElement;
    setState(prev => ({...prev, [target?.name]: target?.value}));
  };

  const onSubmit = (e:Event) => {
    e.preventDefault();

    const data = {
      title: state.title,
      isbn: state.isbn,
      author: state.author,
      description: state.description,
      published_data: state.published_date,
      publisher: state.publisher
    };

    axios
      .put(`http://localhost:8082/api/books/${id}`, data)
      .then(res => {
        navigate(`/show-book/${id}`);
      })
      .catch(err => console.log(`Error from UpdateBookInfo: ${err.message}`));
  };

  return (
    <div className="UpdateBookInfo">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show Book List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Edit Book</h1>
            <p className="lead text-center">Update Book Info</p>
          </div>
        </div>

        <div className="col-md-8 m-auto">
          <form noValidate onSubmit={() => onSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Title of the Book"
                name="title"
                value={state.title}
                onChange={() => onChange}
                className="form-control"
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="ISBN">ISBN</label>
              <input
                type="text"
                placeholder="ISBN"
                name="ISBN"
                className="form-control"
                value={state.isbn}
                onChange={() => onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                placeholder="Author"
                name="author"
                className="form-control"
                value={state.author}
                onChange={() => onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                placeholder="Describe this book"
                name="description"
                className="form-control"
                value={state.description}
                onChange={() => onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="published_date">Publication Date</label>
              <input
                type="text"
                placeholder="published_date"
                name="published_date"
                className="form-control"
                value={state.published_date}
                onChange={() => onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="publisher">Publisher</label>
              <input
                type="text"
                placeholder="Publisher of this book"
                name="publisher"
                className="form-control"
                value={state.publisher}
                onChange={() => onChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-outline-info btn-lg btn-block"
            >
              Update Book
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateBookInfo;
