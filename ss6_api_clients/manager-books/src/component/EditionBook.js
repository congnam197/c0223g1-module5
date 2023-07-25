import React, { useEffect, useState } from "react";
import { editBook, getBooksList } from "../service/bookService";
import { useParams } from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
export default function EditionBook() {
  const navigate = useNavigate();
  const param = useParams();

  const [book, setBook] = useState();
  useEffect(() => {
    const getBooks = async () => {
      const data = await getBooksList();
      const book = data.filter((b) => b.id === +param.id)[0];
      setBook(book);
    };
    getBooks();
  }, [param.id]);
  if (!book) {
    return null;
  }

  return (
    <>
      <Formik
        initialValues={{
          id: book?.id,
          title: book?.title || "",
          quantity: book?.quantity,
        }}
        validationSchema={yup.object({
          title: yup.string().required("required"),
          quantity: yup.number().required("required").max(100,"no more than 100"),
        })}
        onSubmit={(value) => {
          editBook(value)
            .then(() => {
              navigate("/");
            })
            .catch(() => {
              navigate(`/book/edit/${value.id}`);
            });
        }}
      >
        <Form>
          <div className="container">
            <div className="title">
              <h1>Edit</h1>
            </div>
            <label htmlFor="title">Title</label>
            <Field id="title" name="title" type="text" />
            <ErrorMessage name="title" className="error" component="div" />
            <label htmlFor="quantity"> Quantity</label>
            <Field id="quantity" name="quantity" type="number" />
            <ErrorMessage name="quantity" className="error" component="div" />
            <div>
              <button type="submit" className="btn-add">
                Update
              </button>
            </div>
            <button className="back">
              {" "}
              <NavLink to="/">Back Home Page</NavLink>
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}
