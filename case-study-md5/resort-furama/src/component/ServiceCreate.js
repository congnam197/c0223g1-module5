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
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Maxwell Admin"
                    />
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
          initialValues={{
            typeService: "",
          }}
        >
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
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
                        {typeService.map((type) => {
                          return (
                            <option key={type.id} value={type.id}>
                              {type.serviceName}
                            </option>
                          );
                        })}
                      </Field>
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-2 text-primary">Service Details</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="fullName">Service Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="serviceName"
                        name="serviceName"
                        placeholder="Enter service name"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="area">Area</label>
                      <input
                        type="number"
                        className="form-control"
                        id="area"
                        placeholder="Enter the area"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="phone">Rental Cost</label>
                      <input
                        type="number"
                        className="form-control"
                        id="phone"
                        placeholder="Enter rental cost"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="website">Capacity People</label>
                      <input
                        type="number"
                        className="form-control"
                        id="website"
                        placeholder="Entre capacity"
                      />
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="rentalType">Rental type</label>
                      <Field
                        as="select"
                        className="form-control"
                        id="rentalType"
                        name="rentalType"
                      >
                        {typeRental.map((type) => {
                          return (
                            <option key={type.id} value={type.id}>
                              {type.rentalName}
                            </option>
                          );
                        })}
                      </Field>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="standardRoom">Standard room</label>
                      <input
                        type="name"
                        className="form-control"
                        id="standardRoom"
                        name="standardRoom"
                        placeholder="Enter Standard room"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="otherAmenities">Other Amenities</label>
                      <input
                        type="name"
                        className="form-control"
                        id="otherAmenities"
                        name="otherAmenities"
                        placeholder="Enter Other Amenities"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="areaPool">Swimming Pool Area</label>
                      <input
                        type="name"
                        className="form-control"
                        id="areaPool"
                        name="areaPool"
                        placeholder="Enter Swimming Pool Area"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="floor">Number of floors</label>
                      <input
                        type="name"
                        className="form-control"
                        id="floor"
                        name="floor"
                        placeholder="Enter Number of Floors"
                      />
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
                      <label htmlFor="zIp">Accompanied service Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="accompanied-service"
                        placeholder="Accompanied service Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="zIp">Unit price</label>
                      <input
                        type="text"
                        className="form-control"
                        id="unit-price"
                        placeholder="Unit price"
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
          </div>
        </Formik>
      </div>
    </div>
  );
}
