import React, { Component } from "react";
import Navigation from "../../components/navigation/navigation2";
// import axios from "axios";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./Navigation.css";

class navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <Navigation avatar={this.props.avatar}>
          {this.props.children}
        </Navigation>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    avatar: state.auth.avatar
  };
};
export default connect(mapStateToProps)(navigation);
