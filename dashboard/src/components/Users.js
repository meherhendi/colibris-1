import React, { Component } from "react";
class Users extends Component {
  render() {
    return (
      <div>
        <h3 class="page-title">Colibris' users</h3>
        <div class="row panel">
          <div class="col-md-2">
            <div class="panel-heading">
              <h3 class="panel-title"> Search by :</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div class="panel-heading">
              <select class="form-control">
                <option value="cheese">Name</option>
                <option value="tomatoes">Address</option>
                <option value="mozarella">email</option>
                <option value="mushrooms">Phone Number</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div class="mt-4 mb-3">
            <div class="input-group">
              <input class="form-control" type="text" />
              <span class="input-group-btn">
                <button class="btn btn-primary" type="button">
                    <i class="fas fa-search"></i>
                </button>
              </span>
            </div>
            </div>
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Steve</td>
              <td>steve@gmail.com</td>
              <td>55222366</td>
              <td>Mourouj</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Simon</td>
              <td>simon@hotmail.fr</td>
              <td>20114118</td>
              <td>Mansoura</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
