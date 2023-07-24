import React from "react";
import { Link } from "react-router-dom";
import { deleteBook, getBooksList } from "../service/BookService";
import { useState, useEffect } from "react";
export default function BooksManager() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      const data = await getBooksList();
      setBooks(data);
    };
    getBooks();
  }, []);

  return (
    <div className="container">
      <div className="title">
        <h1>Library</h1>
        <button>
          <Link to="/books/create"> Add a new book </Link>
        </button>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Quantity</th>
              <th scope="col" colSpan={2}>                
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => {
              return (
                <tr key={book.index}>
                  <td>{book.title}</td>
                  <td>{book.quantity}</td>
                  <td>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      // data-bs-toggle="modal"
                      // data-bs-target="#exampleModal"
                      onClick={async () => {
                        try {
                          deleteBook(book.id);
                          alert("delete successfully")
                          const data = await getBooksList();
                          // console.log(data)
                          setBooks(data);
                        } catch (error) {
                          console.log(error.message);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-danger">
                      {" "}
                      <Link to={`/books/edit/${book.id}`}>Edit</Link>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                DeleteBook
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Do you want to delete a book<span id="titleBookDelete"></span>?
              </p>
              <p className="warning">This action cannot be recovered</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
