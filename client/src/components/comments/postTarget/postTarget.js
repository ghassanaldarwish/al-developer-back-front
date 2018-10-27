import React, { Component } from "react";
// import { connect } from "react-redux";
// import { withRouter, Link } from "react-router-dom";
// import * as actions from "../../../store/actions";
import Spinner from "../../UI/Spinner/Spinner";
import CommentsForm from "../commentForm/commentForm";
// const isEmpty = value =>
//   value === undefined ||
//   value === null ||
//   (typeof value === "object" && Object.keys(value).length === 0) ||
//   (typeof value === "string" && value.trim().length === 0);

class postTarget extends Component {
  render() {
    return this.props.post.loading ? (
      <Spinner />
    ) : (
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-2">
            <a href="profile.html">
              <img
                class="rounded-circle d-none d-md-block"
                src={this.props.post.post.avatar}
                alt=""
              />
            </a>
            <br />
            <p class="text-center"> {this.props.post.post.name}</p>
          </div>
          <div class="col-md-10">
            <p class="lead">{this.props.post.post.text}</p>
          </div>
        </div>
        <CommentsForm
          {...this.props}
          onChangeHandler={this.props.onChangeHandler}
          onSubmit={this.props.onSubmit}
          comment={this.props.comment}
        />
      </div>
    );
  }
}

export default postTarget;
