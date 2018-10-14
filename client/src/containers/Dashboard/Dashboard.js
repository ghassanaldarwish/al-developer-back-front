import React, { Component } from "react";
import Dashboard from "../../components/dashboard/dashboard";
import Layout from "../../HOC/layout/layout";

class dashboard extends Component {
  render() {
    return (
      <Layout>
        <Dashboard />
      </Layout>
    );
  }
}

export default dashboard;
