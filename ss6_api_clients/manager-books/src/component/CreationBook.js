import React, { useState, useEffect } from "react";
import { getBooksList } from "../service/bookService";
import { createAddNewBook } from "../service/bookService";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
export default function () {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      const data = await getBooksList();
      setBooks(data);
    };
    getBooks();
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          title: "",
          quantity: 0,
        }}
        validationSchema={yup.object({
          title: yup.string().required("required"),
          quantity: yup
            .number()
            .required("required")
            .max(100, "no more than 100"),
        })}
        onSubmit={(values) => {
          createAddNewBook(values)
            .then(() => {
              navigate("/");
            })
            .catch(() => {
              navigate("/books/create");
            });
        }}
      >
        <div className="container">
          <div className="title">
            <h1>Add a new Book</h1>
          </div>
          <Form>
            <label htmlFor="title">Title</label>
            <Field id="title" name="title" type="text" required />
            <ErrorMessage name="title" className="error" component="div" />
            <label htmlFor="quantity"> Quantity</label>
            <Field id="quantity" name="quantity" type="number" />
            <ErrorMessage name="quantity" className="error" component="div" />
            <div>
              <button type="submit" className="btn-add">
                {" "}
                Add{" "}
              </button>
            </div>
          </Form>
          <button className="back">
            {" "}
            <NavLink to="/">Back Home Page</NavLink>
          </button>
        </div>
      </Formik>
    </>
  );
}
