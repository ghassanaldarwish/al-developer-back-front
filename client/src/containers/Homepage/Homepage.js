import React, { Component } from "react";
import Homepage from "../../components/homepage/homepage";
import PostsPrivate from "../PostsPrivate/PostsPrivate";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class homepage extends Component {
  componentWillMount() {
    this.props.onAuth();
  }
  render() {
    return <div>{this.props.auth ? <PostsPrivate /> : <Homepage />}</div>;
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(
  mapStateToProps,
  actions
)(homepage);
