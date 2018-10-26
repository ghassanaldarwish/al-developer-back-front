import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import * as actions from "../../store/actions";
import Spinner from "../UI/Spinner/Spinner";
import Comments from "./comments/comments";
import CommentsForm from "./commentForm/commentForm";
import PostTarget from "./postTarget/postTarget";
// const isEmpty = value =>
//   value === undefined ||
//   value === null ||
//   (typeof value === "object" && Object.keys(value).length === 0) ||
//   (typeof value === "string" && value.trim().length === 0);

class singlePost extends Component {
  state = {
    comment: ""
  };
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }
  onChangeHandler = e => {
    this.setState({ comment: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();

    const commentData = {
      text: this.state.comment,
      name: this.props.auth.name,
      avatar: this.props.auth.avatar
    };

    this.props.addComment(this.props.match.params.id, commentData);
    this.setState({ comment: "" });
  };
  render() {
    return this.props.post.loading ? (
      <Spinner />
    ) : (
      <Fragment>
        <PostTarget {...this.props} />
        <CommentsForm
          {...this.props}
          onChangeHandler={this.onChangeHandler}
          onSubmit={this.onSubmit}
          comment={this.state.comment}
        />
        <Comments {...this.props} />
      </Fragment>
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
)(withRouter(singlePost));
