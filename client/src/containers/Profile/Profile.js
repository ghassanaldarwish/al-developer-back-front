import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../store/actions";

import CreateProfile from "./CreateProfile/CreateProfile";

class profile extends Component {
  render() {
    return <CreateProfile />;
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default profile;
