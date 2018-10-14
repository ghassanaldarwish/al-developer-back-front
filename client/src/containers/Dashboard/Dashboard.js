import React, { Component } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import * as actions from "../../store/actions";
import Dashboard from "../../components/dashboard/dashboard";
import { withStyles } from "@material-ui/core/styles";

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
  render() {
    const { classes } = this.props;
    return (
      <div className="Layout">
        <main className={classes.layout}>
          <Typography component="h2" variant="display3" gutterBottom>
            Dashboard
          </Typography>
          <Typography variant="h5" gutterBottom>
            Welcome: {this.props.auth.name}
          </Typography>
          <Typography variant="subheading" gutterBottom>
            you have not yet create your profile please add some info !
          </Typography>
          <Dashboard profile={this.props.profile} auth={this.props.auth} />
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
)(withStyles(styles)(dashboard));
