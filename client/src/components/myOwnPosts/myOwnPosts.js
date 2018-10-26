import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import * as actions from "../../store/actions";
import Spinner from "../UI/Spinner/Spinner";
const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

class posts extends Component {
  componentDidMount() {
    this.props.getUserPosts(this.props.auth._id);
  }
  render() {
    return isEmpty(this.props.post.userPosts) ? (
      <Spinner />
    ) : (
      this.props.post.userPosts.map(post => (
        <div className="posts">
          <div className="card card-body mb-3">
            <div className="row">
              <div className="col-md-2">
                <a href="profile.html">
                  <img
                    class="rounded-circle d-none d-md-block"
                    src={post.avatar}
                    alt=""
                  />
                </a>
                <br />
                <p className="text-center">{post.name}</p>
              </div>
              <div className="col-md-10">
                <p className="lead">{post.text}</p>
                <button type="button" className="btn btn-light mr-1">
                  <i className="text-info fas fa-thumbs-up" />
                  <span className="badge badge-light">4</span>
                </button>
                <button type="button" className="btn btn-light mr-1">
                  <i className="text-secondary fas fa-thumbs-down" />
                </button>
                <a href="post.html" className="btn btn-info mr-1">
                  Comments
                </a>
                <button type="button" className="btn btn-danger mr-1">
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  post: state.post
});

export default connect(
  mapStateToProps,
  actions
)(withRouter(posts));
