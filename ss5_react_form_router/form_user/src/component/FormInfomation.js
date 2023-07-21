import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import React from "react";

function FormInformation() {
  // const FormContactSchema = yup.object().shape({
  //     name: yup.string().required("name is required"),
  //     email: yup.string().required("email is required").email("Invalid  Email"),
  //     phone: yup.string().required("phone is required"),
  //     message: yup.string().required("message is required"),
  //   });
  return (
    <div className="container">
      <h2>Contact Form</h2>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={yup.object({
         fullName: yup.string().required("name is required"),
          email: yup
            .string()
            .required("email is required")
            .email("Invalid  Email"),
          phone: yup.string().required("phone is required"),
          message: yup.string().required("message is required"),
        })}
        onSubmit={() => {
          //
          alert("submit susscessfuly");
        }}
      >
        <Form>
          <div>
            <label htmlFor="fullName">Name: </label>
            <Field id="fullName" name="fullName" type="text" />
            <ErrorMessage
              name="fullName"
              component="div"
              className="text-red"
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <Field id="email" name="email" type="text" />
            <ErrorMessage name="email" component="div" className="text-red" />
          </div>
          <div>
            <label htmlFor="phone">Phone: </label>
            <Field id="phone" name="phone" type="text" />
            <ErrorMessage name="phone" component="div" className="text-red" />
          </div>
          <div>
            <label htmlFor="message">Message: </label>
            <Field as="textarea" id="message" name="message" type="text" placeholder="Write something.."/>
            <ErrorMessage name="message" component="div" className="text-red" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
export default FormInformation;