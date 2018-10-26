import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../store/actions";

const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

class post extends Component {
  state = {
    createPost: ""
  };
  componentDidMount() {
    this.props.onProfile();
    this.props.getPosts();
  }
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();

    const postData = {
      text: this.state.createPost,
      name: this.props.auth.name,
      avatar: this.props.auth.avatar,
      handle: this.props.profile.profile.handle
    };

    this.props.addPost(postData, this.props.history);
    this.setState({ createPost: "" });
  };

  render() {
    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">Feed Post...</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <textarea
                  className="form-control form-control-lg"
                  placeholder="Create a post"
                  name="createPost"
                  value={this.state.createPost}
                  onChange={this.onChangeHandler}
                />
              </div>

              <button
                disabled={isEmpty(this.state.createPost) ? true : false}
                type="submit"
                className="btn btn-dark"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  post: state.post
});

export default connect(
  mapStateToProps,
  actions
)(withRouter(post));
