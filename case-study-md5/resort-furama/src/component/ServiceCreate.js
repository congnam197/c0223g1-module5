import React from "react";
import { getTypeService } from "../service/typeService";
import { useState } from "react";
import { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { getTypeRental } from "../service/typeRental";
export default function ServiceCreate() {
  const [typeService, setTypeService] = useState([]);
  const [typeRental, setTypeRental] = useState([]);
  const getListTypeService = async () => {
    const data = await getTypeService();
    setTypeService(data);
  };
  const getListTypeRental = async () => {
    const data = await getTypeRental();
    setTypeRental(data);
  };
  useEffect(() => {
    getListTypeService();
    getListTypeRental();
  }, []);

  return (
    <div className="container" id="service-creation">
      <h1>Creation Service</h1>
      <div className="row gutters">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
            <div className="card-body">
              <div className="account-settings">
                <div className="user-profile">
                  <div className="user-avatar">
                    <img src="/img/logo@2x.png" alt="Maxwell Admin" />
                  </div>
                  <h5 className="user-name">Furama Resort</h5>
                  <h6 className="user-area">furama@luxury.com</h6>
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
        // initialValues={{
        //   typeService: 0,
        //   service: "",
        //   usable_area: 0,
        //   costs: 0,
        //   max_people: 0,
        //   rental_type: 0,
        //   standard: "",
        //   description: "",
        //   floor: 0,
        //   pool: 0,
        //   free: "",
        //   image: "",
        //   unit_price: 0,
        // }}
        // validationSchema={yup.object().shape({
        //   typeService: yup
        //     .number()
        //     .required("Required")
        //     .min(1, "No service type selected"),
        //   service: yup.string().required("Required"),
        //   usable_area: yup.number().required("Required").min(40, "Min: 40m2"),
        //   costs: yup
        //     .number()
        //     .required("Required")
        //     .min(1000, "Min: 1000")
        //     .max(990000000, "Max: 10000000"),
        //   max_people: yup
        //     .number()
        //     .required("Required")
        //     .min(2, "Min: 2")
        //     .max(30, "Max: 30"),
        //   rental_type: yup
        //     .number()
        //     .required("Required")
        //     .min(1, "No rental type selected"),
        //   standard: yup
        //     .number()
        //     .test(
        //       "required-if-typeFacility-is-3",
        //       "No room standard selected",
        //       function (value) {
        //         if (typeService !== "3") {
        //           return yup
        //             .number()
        //             .required("Required")
        //             .min(1)
        //             .isValidSync(value);
        //         }
        //         return true;
        //       }
        //     ),
        //   description: yup.string(),
        //   floor: yup
        //     .number()
        //     .test(
        //       "required-if-typeFacility-is-3",
        //       "The floor number has not been entered",
        //       function (value) {
        //         if (typeService !== "3") {
        //           return yup
        //             .number()
        //             .required("Required")
        //             .min(1)
        //             .max(10, "Min 10")
        //             .isValidSync(value);
        //         }
        //         return true;
        //       }
        //     ),
        //   image: yup.string().required("Required"),
        //   pool: yup
        //     .number()
        //     .test(
        //       "required-if-typeFacility-is-1",
        //       "Pool area must be greater than 0",
        //       function (value) {
        //         if (typeService === "1") {
        //           return yup
        //             .number()
        //             .required("Required")
        //             .min(1)
        //             .isValidSync(value);
        //         }
        //         return true;
        //       }
        //     ),
        // })}
        >
          <Form className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-2 text-primary">Type Service</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <Field
                        as="select"
                        className="form-control"
                        id="typeService"
                        name="typeService"
                      >
                        {/* {typeService.map((type) => {
                          return (
                            <option key={type.id} value={type.id}>
                              {type.serviceName}
                            </option>
                          );
                        })} */}
                      </Field>
                      <ErrorMessage
                        component="div"
                        className="text-error"
                        name="typeService"
                      />
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-2 text-primary">Service Details</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="service">Service Name</label>
                      <Field
                        type="text"
                        className="form-control"
                        id="service"
                        name="service"
                        placeholder="Enter service name"
                      />
                      <ErrorMessage
                        component="div"
                        className="text-error"
                        name="service"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="usable_area">Area</label>
                      <Field
                        type="number"
                        className="form-control"
                        id="usable_area"
                        placeholder="Enter the area"
                      />
                      <ErrorMessage
                        component="div"
                        className="text-error"
                        name="usable_area"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="costs">Rental Cost</label>
                      <Field
                        type="number"
                        className="form-control"
                        id="costs"
                        placeholder="Enter rental cost"
                      />
                      <ErrorMessage
                        component="div"
                        className="text-error"
                        name="costs"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="max_people">Capacity People</label>
                      <Field
                        type="number"
                        className="form-control"
                        id="max_people"
                        placeholder="Entre capacity"
                      />
                      <ErrorMessage
                        component="div"
                        className="text-error"
                        name="max_people"
                      />
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="rental_type">Rental type</label>
                      <Field
                        as="select"
                        className="form-control"
                        id="rental_type"
                        name="rental_type"
                      >
                        {/* {typeRental.map((type) => {
                          return (
                            <option key={type.id} value={type.id}>
                              {type.rentalName}
                            </option>
                          );
                        })} */}
                      </Field>
                      <ErrorMessage
                        component="div"
                        className="text-error"
                        name="rental_type"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="standard">Standard room</label>
                      <Field
                        type="text"
                        className="form-control"
                        id="standard"
                        name="standard"
                        placeholder="Enter Standard room"
                      />
                      <ErrorMessage
                        component="div"
                        className="text-error"
                        name="standard"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="description">Other Amenities</label>
                      <Field
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        placeholder="Enter Other Amenities"
                      />
                      <ErrorMessage
                        component="div"
                        className="text-error"
                        name="description"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="pool">Swimming Pool Area</label>
                      <Field
                        type="number"
                        className="form-control"
                        id="pool"
                        name="pool"
                        placeholder="Enter Swimming Pool Area"
                      />
                      <ErrorMessage
                        component="div"
                        className="text-error"
                        name="pool"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="floor">Number of floors</label>
                      <Field
                        type="number"
                        className="form-control"
                        id="floor"
                        name="floor"
                        placeholder="Enter Number of Floors"
                      />
                      <ErrorMessage component="div" className="text-error" />
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mt-3 mb-2 text-primary">
                      Accompanied service
                    </h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="free">Accompanied service Name</label>
                      <Field
                        type="text"
                        className="form-control"
                        id="free"
                        name="free"
                        placeholder="Accompanied service Name"
                      />
                      <ErrorMessage
                        component="div"
                        className="text-error"
                        name="free"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="unit_price">Unit price</label>
                      <Field
                        type="text"
                        className="form-control"
                        id="unit_price"
                        placeholder="Unit price"
                      />
                      <ErrorMessage
                        component="div"
                        className="text-error"
                        name="unit_price"
                      />
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
