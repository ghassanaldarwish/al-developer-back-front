import React, { Fragment } from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";

import DeleteIcon from "@material-ui/icons/Delete";

import * as actions from "../../../store/actions";
const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

function displayProfile(props) {
  const { classes } = props;
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
                    <Moment format="YYYY/MM/DD">{experienceItem.from}</Moment> -{" "}
                    {experienceItem.current ? (
                      "current"
                    ) : (
                      <Moment format="YYYY/MM/DD">{experienceItem.to}</Moment>
                    )}
                  </td>
                  <td>
                    <IconButton
                      onClick={() => props.deleteExperience(experienceItem._id)}
                      color="secondary"
                      aria-label="Delete"
                      className={classes.button}
                    >
                      <DeleteIcon />
                    </IconButton>
                    {/* <button
                      onClick={() => props.deleteExperience(experienceItem._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button> */}
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
                    <Moment format="YYYY/MM/DD">{educationItem.from}</Moment> -{" "}
                    {educationItem.current ? (
                      "current"
                    ) : (
                      <Moment format="YYYY/MM/DD">{educationItem.to}</Moment>
                    )}
                  </td>
                  <td>
                    <IconButton
                      onClick={() => props.deleteEducation(educationItem._id)}
                      color="secondary"
                      aria-label="Delete"
                      className={classes.button}
                    >
                      <DeleteIcon />
                    </IconButton>
                    {/* <button
                      onClick={() => props.deleteEducation(educationItem._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button> */}
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

export default connect(
  null,
  actions
)(withRouter(withStyles(styles)(displayProfile)));
