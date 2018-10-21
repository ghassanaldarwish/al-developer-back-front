import React, { Fragment } from "react";

function displayProfile(props) {
  return (
    <Fragment>
      <div>
        <h4 className="mb-2">Experience Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tech Guy Web Solutions</td>
              <td>Senior Developer</td>
              <td>02-03-2009 - 01-02-2014</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Traversy Media</td>
              <td>Instructor & Developer</td>
              <td>02-03-2015 - Now</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h4 className="mb-2">Education Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>School</th>
              <th>Degree</th>
              <th>Years</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Northern Essex</td>
              <td>Associates</td>
              <td>02-03-2007 - 01-02-2009</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ marginBottom: "60px" }}>
        <button className="btn btn-danger">Delete My Account</button>
      </div>
    </Fragment>
  );
}

export default displayProfile;
