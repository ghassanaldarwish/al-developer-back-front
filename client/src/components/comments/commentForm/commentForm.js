import React, { Component } from "react";
// import { connect } from "react-redux";
// import { withRouter, Link } from "react-router-dom";
// import * as actions from "../../../store/actions";
import Spinner from "../../UI/Spinner/Spinner";
// const isEmpty = value =>
//   value === undefined ||
//   value === null ||
//   (typeof value === "object" && Object.keys(value).length === 0) ||
//   (typeof value === "string" && value.trim().length === 0);

class commentsForm extends Component {
  //   addComment;
  render() {
    return (
      <div class="post-form mb-3">
        <div class="card card-info">
          <div class="card-header bg-info text-white">Add Comment .....</div>
          <div class="card-body">
            <form onSubmit={this.props.onSubmit}>
              <div class="form-group">
                <textarea
                  name="comment"
                  class="form-control form-control-lg"
                  placeholder="Add Comment"
                  value={this.props.comment}
                  onChange={this.props.onChangeHandler}
                />
              </div>
              <button type="submit" class="btn btn-dark">
                Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default commentsForm;
