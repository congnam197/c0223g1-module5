import React from "react";
 export default function CustomerManager(){
    return(
        <>
  <div className="container-xl">
    <div className="table-responsive">
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-6">
              <h2>
                Manage <b>Customer</b>
              </h2>
            </div>
            <div className="col-sm-6">
              <a
                href="create_customer.html"
                className="btn btn-success"
                data-toggle="modal"
              >
                <i className="material-icons"></i>{" "}
                <span>Add New Employee</span>
              </a>
              <a
                href="#deleteEmployeeModal"
                className="btn btn-danger"
                data-toggle="modal"
              >
                <i className="material-icons"></i> <span>Delete</span>
              </a>
            </div>
          </div>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Gender</th>
              <th>Birthday</th>
              <th>Identity Card</th>
              <th>Type Customer</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Thomas Hardy</td>
              <td>thomashardy@mail.com</td>
              <td>89 Chiaroscuro Rd, Portland, USA</td>
              <td>(171) 555-2222</td>
              <td>Nu</td>
              <td>20/04/1900</td>
              <td>198923949892</td>
              <td>Diamond</td>
              <td>
                <a
                  href="edit_customer.html"
                  className="edit"
                  data-toggle="modal"
                >
                  <i
                    className="material-icons"
                    data-toggle="tooltip"
                    title="Edit"
                  >
                    
                  </i>
                </a>
                <a
                  href="#deleteEmployeeModal"
                  className="delete"
                  data-toggle="modal"
                >
                  <i
                    className="material-icons"
                    data-toggle="tooltip"
                    title="Delete"
                  >
                    
                  </i>
                </a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Dominique Perrier</td>
              <td>dominiqueperrier@mail.com</td>
              <td>Obere Str. 57, Berlin, Germany</td>
              <td>(313) 555-5735</td>
              <td>Nam</td>
              <td>21/04/1983</td>
              <td>198923949892</td>
              <td>Gold</td>
              <td>
                <a
                  href="edit_customer.html"
                  className="edit"
                  data-toggle="modal"
                >
                  <i
                    className="material-icons"
                    data-toggle="tooltip"
                    title="Edit"
                  >
                    
                  </i>
                </a>
                <a
                  href="#deleteEmployeeModal"
                  className="delete"
                  data-toggle="modal"
                >
                  <i
                    className="material-icons"
                    data-toggle="tooltip"
                    title="Delete"
                  >
                    
                  </i>
                </a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Maria Anders</td>
              <td>mariaanders@mail.com</td>
              <td>25, rue Lauriston, Paris, France</td>
              <td>(503) 555-9931</td>
              <td>Nam</td>
              <td>20/02/1998</td>
              <td>198923949892</td>
              <td>Gold</td>
              <td>
                <a
                  href="edit_customer.html"
                  className="edit"
                  data-toggle="modal"
                >
                  <i
                    className="material-icons"
                    data-toggle="tooltip"
                    title="Edit"
                  >
                    
                  </i>
                </a>
                <a
                  href="#deleteEmployeeModal"
                  className="delete"
                  data-toggle="modal"
                >
                  <i
                    className="material-icons"
                    data-toggle="tooltip"
                    title="Delete"
                  >
                    
                  </i>
                </a>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Fran Wilson</td>
              <td>franwilson@mail.com</td>
              <td>C/ Araquil, 67, Madrid, Spain</td>
              <td>(204) 619-5731</td>
              <td>Nu</td>
              <td>19/12/1989</td>
              <td>198923949892</td>
              <td>Gold</td>
              <td>
                <a
                  href="edit_customer.html"
                  className="edit"
                  data-toggle="modal"
                >
                  <i
                    className="material-icons"
                    data-toggle="tooltip"
                    title="Edit"
                  >
                    
                  </i>
                </a>
                <a
                  href="#deleteEmployeeModal"
                  className="delete"
                  data-toggle="modal"
                >
                  <i
                    className="material-icons"
                    data-toggle="tooltip"
                    title="Delete"
                  >
                    
                  </i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="clearfix">
          <div className="hint-text">
            Showing <b>5</b> out of <b>25</b> entries
          </div>
          <ul className="pagination">
            <li className="page-item disabled">
              <a href="#">Previous</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                1
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                2
              </a>
            </li>
            <li className="page-item active">
              <a href="#" className="page-link">
                3
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                4
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                5
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                Next
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* Edit Modal HTML */}
  {/* Delete Modal HTML */}
  <div id="deleteEmployeeModal" className="modal fade">
    <div className="modal-dialog">
      <div className="modal-content">
        <form>
          <div className="modal-header">
            <h4 className="modal-title">Delete Employee</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              ×
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete these Records?</p>
            <p className="text-warning">
              <small>This action cannot be undone.</small>
            </p>
          </div>
          <div className="modal-footer">
            <input
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
              defaultValue="Cancel"
            />
            <input
              type="submit"
              className="btn btn-danger"
              defaultValue="Delete"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</>

    )
 }