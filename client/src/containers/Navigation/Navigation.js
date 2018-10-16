import React, { Component } from "react";
import Navigation from "../../components/navigation/navigation";
// import axios from "axios";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./Navigation.css";

class navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <Navigation user={this.props.user}>{this.props.children}</Navigation>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth
  };
};
export default connect(mapStateToProps)(navigation);
