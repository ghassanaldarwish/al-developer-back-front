import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import * as actions from "../../store/actions";
import Spinner from "../UI/Spinner/Spinner";
// const isEmpty = value =>
//   value === undefined ||
//   value === null ||
//   (typeof value === "object" && Object.keys(value).length === 0) ||
//   (typeof value === "string" && value.trim().length === 0);

class comments extends Component {
  componentDidMount() {
    this.props.getUserPosts(this.props.auth._id);
  }
  render() {
    return <p>hallo comments</p>;
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  post: state.post
});

export default connect(
  mapStateToProps,
  actions
)(withRouter(comments));
