import React, { Fragment } from "react";

function displayProfile(props) {
  return (
    <Fragment>
      {props.profile.experience.length > 0 ? (
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
              {props.profile.experience.map(experienceItem => (
                <tr>
                  <td>{experienceItem.company}</td>
                  <td>{experienceItem.title}</td>
                  <td>
                    {experienceItem.from} -{" "}
                    {experienceItem.current ? "current" : experienceItem.to}
                  </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      {props.profile.education.length > 0 ? (
        <div>
          <h4 className="mb-2">Education Credentials</h4>

          <table className="table">
            <thead>
              <tr>
                <th>School</th>
                <th>Degree</th>
                <th>Field of Study</th>
                <th>Years</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {props.profile.education.map(educationItem => (
                <tr>
                  <td>{educationItem.school}</td>
                  <td>{educationItem.degree}</td>
                  <th>{educationItem.fieldofstudy}</th>
                  <td>
                    {educationItem.from} -{" "}
                    {educationItem.current ? "current" : educationItem.to}
                  </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </Fragment>
  );
}

export default displayProfile;
