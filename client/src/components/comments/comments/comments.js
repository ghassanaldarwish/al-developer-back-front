import React, { Component } from "react";
// import { connect } from "react-redux";
// import { withRouter, Link } from "react-router-dom";
// import * as actions from "../../../store/actions";
import Spinner from "../../UI/Spinner/Spinner";

const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

class comments extends Component {
  render() {
    let postTimplet = <p>NO COMMENTS</p>;
    if (!isEmpty(this.props.post.post.comments)) {
      if (this.props.post.post.comments.length > 0) {
        postTimplet = this.props.post.post.comments.map(comment => (
          <div class="card card-body mb-3">
            <div class="row">
              <div class="col-md-2">
                <a href="profile.html">
                  <img
                    class="rounded-circle d-none d-md-block"
                    src={comment.avatar}
                    alt=""
                  />
                </a>
                <br />
                <p class="text-center">{comment.name}</p>
              </div>
              <div class="col-md-10">
                <p class="lead">{comment.text}</p>
              </div>
            </div>
          </div>
        ));
      }
    }
    return this.props.post.loading ? <Spinner /> : postTimplet;
  }
}

export default comments;
