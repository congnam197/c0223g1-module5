import React from "react";
export default function ContractManager(){
    return(
<div className="container-xl">
  <div className="table-responsive">
    <div className="table-wrapper">
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Contract</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <a
              href="create_contract.html"
              className="btn btn-success"
              data-toggle="modal"
            >
              <i className="material-icons"></i> <span>Add New Contract</span>
            </a>
          </div>
        </div>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>STT</th>
            <th>11245</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Prepaid Amount($)</th>
            <th>Total Payment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>11246</td>
            <td>20/12/2020</td>
            <td>27/12/2020</td>
            <td>2.222</td>
            <td>10.000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>11247</td>
            <td>20/12/2020</td>
            <td>27/12/2020</td>
            <td>2.222</td>
            <td>10.000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>11248</td>
            <td>20/12/2020</td>
            <td>27/12/2020</td>
            <td>2.222</td>
            <td>10.000</td>
          </tr>
          <tr>
            <td>4</td>
            <td>11246</td>
            <td>20/12/2020</td>
            <td>27/12/2020</td>
            <td>2.222</td>
            <td>10.000</td>
          </tr>
        </tbody>
      </table>
      <div className="clearfix">
        <div className="hint-text">
          Showing <b>5</b> out of <b>25</b> entries
        </div>
        <ul className="pagination">
          <li className="page-item disabled"></li>
        </ul>
      </div>
    </div>
  </div>
</div>

    )
}