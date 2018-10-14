import React, { Component } from "react";
import Navigation from "../../components/navigation/navigation2";
// import axios from "axios";
// import { Redirect } from "react-router-dom";
import "./Navigation.css";

class navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <Navigation>{this.props.children}</Navigation>
      </div>
    );
  }
}

export default navigation;
