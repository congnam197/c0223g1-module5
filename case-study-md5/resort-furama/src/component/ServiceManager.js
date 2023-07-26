import React, { useEffect, useState } from "react";
import Search from "./Search";
import Navigation from "./Navigation";
import { getListService } from "../service/service";
function Service() {
  const [services, setServices] = useState([]);

  const getServices = async () => {
    const data = await getListService();
    setServices(data);
  };

  useEffect(() => {
    getServices();
  }, []);
  return (
    <>
      <Navigation />
      <Search />
      <div className="popular_places_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center mb_70">
                <h3>Service Popular</h3>
              </div>
            </div>
          </div>
          {/* LIST SERVICE */}
          <div className="row">
            { services.map((service) =>{
              return(
                <div className="col-lg-4 col-md-6">
                <div className="single_place">
                  <div className="thumb">
                    <img
                      src="img/service/Furama_Garden-Deluxe-5-450x291.jpg"
                      alt=""
                    />
                    <a href="#" className="prise">
                      {service.costs}
                    </a>
                  </div>
                  <div className="place_info">
                    <a href="">
                      <h3>{service.service}</h3>
                    </a>
                    <p>
                      Room size: <span style={{color:'red'}}>{service.usable_area}</span>
                    </p>
                    <div className="rating_days d-flex justify-content-between">
                      <span className="d-flex justify-content-center align-items-center">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <a href="#">(20 Review)</a>
                      </span>
                      <div className="days">
                        <a
                          href="edit.html"
                          style={{ backgroundColor: "#1ec6b6", color: "white" }}
                          className="btn"
                        >
                          {" "}
                          Edit
                        </a>
                        <a
                          href="#deleteEmployeeModal"
                          data-toggle="modal"
                          style={{ backgroundColor: "#ff4a52", color: "white" }}
                          className="btn"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )
            })}
            <div className="col-lg-4 col-md-6">
              <div className="single_place">
                <div className="thumb">
                  <img
                    src="img/service/Furama_Garden-Deluxe-5-450x291.jpg"
                    alt=""
                  />
                  <a href="#" className="prise">
                    $500
                  </a>
                </div>
                <div className="place_info">
                  <a href="destination_details.html">
                    <h3>California</h3>
                  </a>
                  <p>
                    Room size: 43.7m<sup style={{ color: "gray" }}>2</sup>
                  </p>
                  <div className="rating_days d-flex justify-content-between">
                    <span className="d-flex justify-content-center align-items-center">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <a href="#">(20 Review)</a>
                    </span>
                    <div className="days">
                      <a
                        href="edit.html"
                        style={{ backgroundColor: "#1ec6b6", color: "white" }}
                        className="btn"
                      >
                        {" "}
                        Edit
                      </a>
                      <a
                        href="#deleteEmployeeModal"
                        data-toggle="modal"
                        style={{ backgroundColor: "#ff4a52", color: "white" }}
                        className="btn"
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_place">
                <div className="thumb">
                  <img
                    src="img/service/Furama_Ocean_Deluxe-2-450x291.jpg"
                    alt=""
                  />
                  <a href="#" className="prise">
                    $500
                  </a>
                </div>
                <div className="place_info">
                  <a href="destination_details.html">
                    <h3>OCEAN STUDIO SUITE</h3>
                  </a>
                  <p>
                    Room size: 41.4m<sup style={{ color: "gray" }}>2</sup>
                  </p>
                  <div className="rating_days d-flex justify-content-between">
                    <span className="d-flex justify-content-center align-items-center">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <a href="#">(20 Review)</a>
                    </span>
                    <div className="days">
                      <a
                        href="edit.html"
                        style={{ backgroundColor: "#1ec6b6", color: "white" }}
                        className="btn"
                      >
                        {" "}
                        Edit
                      </a>
                      <a
                        href="#deleteEmployeeModal"
                        data-toggle="modal"
                        style={{ backgroundColor: "#ff4a52", color: "white" }}
                        className="btn"
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_place">
                <div className="thumb">
                  <img
                    src="img/service/Presidential-Suite-F-370x239.jpg"
                    alt=""
                  />
                  <a href="#" className="prise">
                    $500
                  </a>
                </div>
                <div className="place_info">
                  <a href="">
                    <h3>LAGOON SUPERIOR</h3>
                  </a>
                  <p>
                    Room size: 46.8m<sup style={{ color: "gray" }}>2</sup>
                  </p>
                  <div className="rating_days d-flex justify-content-between">
                    <span className="d-flex justify-content-center align-items-center">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <a href="#">(20 Review)</a>
                    </span>
                    <div className="days">
                      <a
                        href="edit.html"
                        style={{ backgroundColor: "#1ec6b6", color: "white" }}
                        className="btn"
                      >
                        {" "}
                        Edit
                      </a>
                      <a
                        href="#deleteEmployeeModal"
                        data-toggle="modal"
                        style={{ backgroundColor: "#ff4a52", color: "white" }}
                        className="btn"
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_place">
                <div className="thumb">
                  <img
                    src="img/service/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
                    alt=""
                  />
                  <a href="#" className="prise">
                    $500
                  </a>
                </div>
                <div className="place_info">
                  <a href="destination_details.html">
                    <h3>OCEAN DELUXE</h3>
                  </a>
                  <p>
                    Room size: 130m<sup style={{ color: "gray" }}>2</sup>
                  </p>
                  <div className="rating_days d-flex justify-content-between">
                    <span className="d-flex justify-content-center align-items-center">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <a href="#">(20 Review)</a>
                    </span>
                    <div className="days">
                      <a
                        href="edit.html"
                        style={{ backgroundColor: "#1ec6b6", color: "white" }}
                        className="btn"
                      >
                        {" "}
                        Edit
                      </a>
                      <a
                        href="#deleteEmployeeModal"
                        data-toggle="modal"
                        style={{ backgroundColor: "#ff4a52", color: "white" }}
                        className="btn"
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_place">
                <div className="thumb">
                  <img
                    src="img/service/Vietnam_Danang_Furama_Villas_Pool_Villas-F-370x239.jpg"
                    alt=""
                  />
                  <a href="#" className="prise">
                    $500
                  </a>
                </div>
                <div className="place_info">
                  <a href="destination_details.html">
                    <h3>POOL VILLAS</h3>
                  </a>
                  <p>
                    Room size: 320m<sup style={{ color: "gray" }}>2</sup>
                  </p>
                  <div className="rating_days d-flex justify-content-between">
                    <span className="d-flex justify-content-center align-items-center">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <a href="#">(20 Review)</a>
                    </span>
                    <div className="days">
                      <a
                        href="edit.html"
                        style={{ backgroundColor: "#1ec6b6", color: "white" }}
                        className="btn"
                      >
                        {" "}
                        Edit
                      </a>
                      <a
                        href="#deleteEmployeeModal"
                        data-toggle="modal"
                        style={{ backgroundColor: "#ff4a52", color: "white" }}
                        className="btn"
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_place">
                <div className="thumb">
                  <img
                    src="img/service/Vietnam_Danang_Furama_Villas_Beach_Pool_Villas-_Exterior-1-F-370x239.jpg"
                    alt=""
                  />
                  <a href="#" className="prise">
                    $500
                  </a>
                </div>
                <div className="place_info">
                  <a href="destination_details.html">
                    <h3>BEACH FRONT VILLAS</h3>
                  </a>
                  <p>
                    Room size: 900m<sup style={{ color: "gray" }}>2</sup>
                  </p>
                  <div className="rating_days d-flex justify-content-between">
                    <span className="d-flex justify-content-center align-items-center">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <a href="#">(20 Review)</a>
                    </span>
                    <div className="days">
                      <a
                        href="edit.html"
                        style={{ backgroundColor: "#1ec6b6", color: "white" }}
                        className="btn"
                      >
                        {" "}
                        Edit
                      </a>
                      <a
                        href="#deleteEmployeeModal"
                        data-toggle="modal"
                        style={{ backgroundColor: "#ff4a52", color: "white" }}
                        className="btn"
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="more_place_btn text-center">
                <a className="boxed-btn4" href="#">
                  More Places
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
