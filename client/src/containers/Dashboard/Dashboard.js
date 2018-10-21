import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import * as actions from "../../store/actions";
import Dashboard from "../../components/dashboard/dashboard";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
});
class dashboard extends Component {
  componentDidMount() {
    this.props.onProfile();
  }

  onDeleteHandler = e => {
    this.props.deleteAccount(this.props.history);
  };

  displayHandlerSwitch = () => (
    <Fragment>
      <Dashboard
        profile={this.props.profile}
        auth={this.props.auth}
        onDeleteHandler={this.onDeleteHandler}
      />
    </Fragment>
  );

  render() {
    const { classes } = this.props;
    return (
      <div className="Layout">
        <main className={classes.layout}>
          <Typography component="h2" variant="display3" gutterBottom>
            Dashboard
          </Typography>

          {this.displayHandlerSwitch()}
        </main>
      </div>
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
)(withStyles(styles)(withRouter(dashboard)));
