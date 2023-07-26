import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

export default function ContractCreate() {
  return (
    <div className="container" id="contract-creation">
      <h1>Creation Contract</h1>
      <div className="row gutters">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
            <div className="card-body">
              <div className="account-settings">
                <div className="user-profile">
                  <div className="user-avatar">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Maxwell Admin"
                    />
                  </div>
                  <h5 className="user-name">Furama Resort</h5>
                  <h6 className="user-startDate">furama@luxury.com</h6>
                </div>
                <div className="about">
                  <h5>About</h5>
                  <p>
                    THIS WORLD CLASS RESORT, FURAMA DANANG, REPUTABLE FOR BEING
                    A CULINARY RESORT IN VIETNAM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Formik
          initialValues={{
            contractNumber: "",
            startDate: "",
            endDate: "",
            prepaidAmount: "",
            totalPayment: "",
          }}
          validationSchema={yup.object().shape({
            contractNumber: yup.string().required("required"),
            startDate: yup.date().required("required"),
            endDate: yup.date().required("required"),
            prepaidAmount: yup.number().required("required"),
            totalPayment: yup.number().required("required"),
          })}
          onSubmit={(values) => {
            console.log(values);
            alert("SUCCESS!! :-)\n\nThank you for submitting the form.");
          }}
        >
          <Form className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="row gutters" />
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-2 text-primary">Contract Details</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="contactNumber">Contract Number</label>
                      <Field
                        type="text"
                        className="form-control"
                        id="contactNumber"
                        name="contractNumber"
                        placeholder="Enter Contract Number"
                      />
                      <ErrorMessage className="error" name="contractNumber" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      {/* <label for="contactNumber">Contract Number</label>
                      <Field type="text" class="form-control" id="contactNumber" placeholder="Enter Contract Number"> */}
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="startDate">Start Date</label>
                      <Field
                        type="date"
                        className="form-control"
                        id="startDate"
                        name="startDate"
                        placeholder="Enter the Start Date"
                      />
                      <ErrorMessage className="error" name="startDate" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="endDate">End Date</label>
                      <Field
                        type="date"
                        className="form-control"
                        id="endDate"
                        name="endDate"
                        placeholder="Enter rentol End Date"
                      />
                      <ErrorMessage className="error" name="endDate" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="prepaidAmount">Prepaid Amount</label>
                      <Field
                        type="url"
                        className="form-control"
                        id="prepaidAmount"
                        name="prepaidAmount"
                        placeholder="Ente Prepaid Amount"
                      />
                      <ErrorMessage className="error" name="prepaidAmount" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="totalPayment">Total Payment</label>
                      <Field
                        type="name"
                        className="form-control"
                        id="totalPayment"
                        name="totalPayment"
                        placeholder="Enter Total Payment"
                      />
                      <ErrorMessage className="error" name="totalPayment" />
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
                          type="submit"
                          id="submit"
                          name="submit"
                          className="btn btn-primary"
                        >
                          Create
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
