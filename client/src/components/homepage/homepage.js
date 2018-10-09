import React, { Component, Fragment } from "react";
import Header from "./header/header";
import Main from "./main/main";

class homepage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
      </Fragment>
    );
  }
}

export default homepage;
