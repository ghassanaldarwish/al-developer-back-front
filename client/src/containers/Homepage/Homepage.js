import React, { Component } from "react";
import Homepage from "../../components/homepage/homepage";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class homepage extends Component {
  componentWillMount() {
    this.props.onAuth();
  }
  render() {
    return (
      <div>
        <Homepage />
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(homepage);
