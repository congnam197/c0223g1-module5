import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { getTypeCustomer } from "../service/typeCustomer";
import { useState,useEffect } from "react";
export default function CustomerCreate() {
  const [typeCustomer, setTypeCustomer] = useState([]);
  const typeCustomers = async () => {
    const data = await getTypeCustomer();
    setTypeCustomer(data);
  };
  useEffect(() => {
    typeCustomers();
  }, []);

  return (
    <div className="container" id="customer-creation">
      <h1>Creation Customer</h1>
      <div className="row gutters">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
            <div className="card-body">
              <div className="account-settings">
                <div className="user-profile">
                  <div className="user-avatar">
                    {/* <Field type="file" /> */}
                  </div>
                  [name]
                  <h6 className="user-email">
                    <a
                      href="/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                    >
                      [email&nbsp;protected]
                    </a>
                  </h6>
                </div>
                <div className="about">
                  <h5>About</h5>
                  <p>[Profile]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            phone: "",
            date_of_birth: "",
            address: "",
            gender: "",
            identity_card: "",
            type_customer: "",
          }}
          validationSchema={yup.object().shape({
            fullName: yup
              .string()
              .required("required")
              .matches(/^([A-Z][a-z]+\s)+([A-Z][a-z]+)$/, "Invalid name"),
            email: yup.string().required("required").email("Invalid Email"),
            phone: yup
              .string()
              .required("required")
              .matches(
                /^((091)|(091)|(8490)|(8491))[0-9]{7}$/,
                "Invalid phone number"
              ),
            identity_card: yup
              .string()
              .required("required")
              .matches(/^[0-9]{9}$/, "Invalid Identity Card"),
          })}
          onSubmit={() => {}}
        >
          <Form className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-2 text-primary">Personal Details</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name *</label>
                      <Field
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="fullName"
                        placeholder="Enter full name"
                      />
                      <ErrorMessage
                        name="fullName"
                        component="div"
                        className="text-error"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <Field
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter email ID"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-error"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="phone">Phone *</label>
                      <Field
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="Enter phone number"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-error"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="date_of_birth">Birthday *</label>
                      <div className="data-picker">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            format="MM/DD/YYYY"
                            name="date_of_birth"
                            slotProps={{
                              field: { shouldRespectLeadingZeros: true },
                            }}
                          />
                        </LocalizationProvider>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="address">Address *</label>
                      <Field
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        placeholder="Enter Address"
                      />
                      <ErrorMessage
                        name="address"
                        component="div"
                        className="text-error"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group gender">
                      <label style={{ fontSize: "15px" }}>Gender </label>
                      <label htmlFor="male" style={{ marginLeft: "20px" }}>
                        Nam{" "}
                      </label>
                      <Field
                        style={{ marginLeft: "10px" }}
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                      />
                      <label htmlFor="female" style={{ marginLeft: "20px" }}>
                        Nữ{" "}
                      </label>
                      <Field
                        style={{ marginLeft: "10px" }}
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="identity-card">Identity Card *</label>
                      <Field
                        type="text"
                        className="form-control"
                        id="identity_card"
                        name="identity_card"
                        placeholder="Enter Identity Card"
                      />
                      <ErrorMessage
                        name="identity_card"
                        component="div"
                        className="text-error"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="type_customer">Type Customer</label>
                      <select name="type_customer">
                        {typeCustomer.map((type) => {
                          return (
                            <option key={type.id} value={type.id}>
                              {type.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-right">
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        className="btn btn-secondary"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        className="btn btn-primary"
                      >
                        Add New
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
