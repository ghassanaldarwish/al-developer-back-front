import React, { Component } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import * as actions from "../../store/actions";
import Dashboard from "../../components/dashboard/dashboard";
import Layout from "../../HOC/layout/Layout";

class dashboard extends Component {
  componentDidMount() {
    this.props.onProfile();
  }
  render() {
    return (
      <Layout>
        <Typography component="h2" variant="display3" gutterBottom>
          Dashboard
        </Typography>
        <Dashboard profile={this.props.profile} auth={this.props.auth} />
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile,
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  actions
)(dashboard);
