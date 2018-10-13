import React, { Component } from "react";
import Profile from "../../components/profile/profile";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import "./Profile.css";

class profile extends Component {
  componentDidMount() {
    this.props.onProfile();
  }
  render() {
    return (
      <div className="Profile">
        <Profile />
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(profile);
