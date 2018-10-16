import React, { Component } from "react";
import CreateProfile from "../../../components/profile/createProfile/createProfile";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
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

class createProfile extends Component {
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.errors) {
  //     this.setState({ errors: nextProps.errors });
  //   }
  // }

  render() {
    const { classes } = this.props;

    return (
      <div className="Layout">
        <main className={classes.layout}>
          <CreateProfile />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  actions
)(withRouter(withStyles(styles)(createProfile)));
