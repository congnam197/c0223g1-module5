import React from "react";
 export default function ServiceEdit(){

    return(
    
            <div className="container">
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
                THIS WORLD CLASS RESORT, FURAMA DANANG, REPUTABLE FOR BEING A
                CULINARY RESORT IN VIETNAM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
      <div className="card h-100">
        <div className="card-body">
          <div className="row gutters" />
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
                  id="fullName"
                  placeholder="Enter service name"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="area">Area</label>
                <input
                  type="text"
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
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Enter rentol cost"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="website">Capacity People</label>
                <input
                  type="url"
                  className="form-control"
                  id="website"
                  placeholder="Ente capa"
                />
              </div>
            </div>
          </div>
          <div className="row gutters">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="rentalType">Rental type</label>
                <input
                  type="name"
                  className="form-control"
                  id="rentalType"
                  placeholder="Enter Rental type"
                />
              </div>
            </div>
          </div>
          <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h6 className="mt-3 mb-2 text-primary">Accompanied service</h6>
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
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
 }