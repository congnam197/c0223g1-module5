import React from "react";
export default function ContractCreate(){
    return(
        <div className="container" style={{ marginTop: 50 }}>
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
              <h6 className="mb-2 text-primary">Contract Details</h6>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="contactNumber">Contract Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="contactNumber"
                  placeholder="Enter Contract Number"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                {/* <label for="contactNumber">Contract Number</label>
                      <input type="text" class="form-control" id="contactNumber" placeholder="Enter Contract Number"> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="startDate">Start Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="startDate"
                  placeholder="Enter the Start Date"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="endDate">End Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="endDate"
                  placeholder="Enter rentol End Date"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="amount">Prepaid Amount</label>
                <input
                  type="url"
                  className="form-control"
                  id="amount"
                  placeholder="Ente Prepaid Amount"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="totalPayment">Total Payment</label>
                <input
                  type="name"
                  className="form-control"
                  id="totalPayment"
                  placeholder="Enter Total Payment"
                />
              </div>
            </div>
          </div>
          <div className="row gutters">
            <div className="row gutters">
              <div
                className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                style={{ margin: 25 }}
              >
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
    </div>
  </div>
</div>

    )
}