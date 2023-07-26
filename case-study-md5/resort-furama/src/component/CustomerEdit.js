import React from "react";
export default function CustomerEdit() {
  return (
    <div className="container" id="edit-customer">
      <h1>Edition Customer</h1>
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
                  <h5 className="user-name">Thu Ha Dang</h5>
                  <h6 className="user-email">
                    <a
                      href="/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="19606c7270595478616e7c7575377a7674"
                    >
                      thuhadang@gmail.com
                    </a>
                  </h6>
                </div>
                <div className="about">
                  <h5>About</h5>
                  <p>
                    I'm Ha Dang Thi. Full Stack Designer I enjoy creating
                    user-centric, delightful and human experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
            <div className="card-body">
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 className="mb-2 text-primary">Personal Details</h6>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      placeholder="Enter full name"
                      defaultValue="Thu Ha Dang"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="eMail">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="eMail"
                      placeholder="Enter email ID"
                      defaultValue="thuhadang@gmail.com"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Enter phone number"
                      defaultValue="0945678945"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="website">Birthday</label>
                    <input
                      type="url"
                      className="form-control"
                      id="website"
                      placeholder="Birthday"
                      defaultValue="20/12/2001"
                    />
                  </div>
                </div>
              </div>
              <div className="row gutters">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="Address">Address</label>
                    <input
                      type="name"
                      className="form-control"
                      id="Address"
                      placeholder="Enter Address"
                      defaultValue="88 Cao Thang,Thanh Binh,Hai Chau,TP Da Nang"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="Gender">Gender</label>
                    <input
                      type="name"
                      className="form-control"
                      id="Gender"
                      placeholder="Enter Gender"
                      defaultValue="Nu"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="Identity Card">Identity Card</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Identity Card"
                      placeholder="Enter Identity Card"
                      defaultValue={187538924}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="zIp">Type Customer</label>
                    <input
                      type="text"
                      className="form-control"
                      id="zIp"
                      placeholder="Type Customer"
                      defaultValue="Diamond"
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
  );
}
