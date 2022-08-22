import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.scss";
import axios from "axios";

function CreateBook() {
  const [state, setState] = useState({
    title: "",
    author: "",
    isbn: "",
    description: "",
    published_date: "",
    publisher: ""
  });
  const navigate = useNavigate();

  const onChange = (e:Event) => {
    const target = e.target as HTMLInputElement;
    setState(prev => ({...prev, [target?.name]: target?.value}));
  }

  const onSubmit = (e:SubmitEvent) => {
    e.preventDefault();

    const data = {
      title: state.title,
      isbn: state.isbn,
      author: state.author,
      description: state.description,
      published_date: new Date(state.published_date),
      publisher: state.publisher
    };

    axios
      .post("http://localhost:8082/api/books", data)
      .then(res => {
        setState({
          title: "",
          author: "",
          isbn: "",
          description: "",
          published_date: "",
          publisher: ""
        });
        navigate("/");
      })
      .catch(err => {
        console.error(`Error in CreateBook: ${err.message}`);
      });
    return axios;
  };

  return (
    <div className="CreateBook">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show Book List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Book</h1>
            <p className="lead text-center">
              Create New Book
            </p>

            <form noValidate onSubmit={() => onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  className="form-control"
                  value={state.title}
                  onChange={() => onChange}
                />
              </div>
              <br />

              <div className="form-group">
                <input
                  type="text"
                  placeholder="ISBN"
                  name="isbn"
                  className="form-control"
                  value={state.isbn}
                  onChange={() => onChange}
                 />
              </div>

              <div className="form-group">
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
                <input
                  type="date"
                  placeholder="Publication Date"
                  name="published_date"
                  className="form-control"
                  value={state.published_date}
                  onChange={() => onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Publisher of this Book"
                  name="publisher"
                  className="form-control"
                  value={state.publisher}
                  onChange={() => onChange}
                />
              </div>

              <input
                type="submit"
                value="Create Book"
                className="btn btn-outline-warning btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBook;
