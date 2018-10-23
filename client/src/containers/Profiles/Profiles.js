import React, { Component, Fragment } from "react";

import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";
import Profiles from "../../components/profiles/profiles";

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
  render() {
    const { classes } = this.props;
    return (
      <div className="Layout">
        <main className={classes.layout}>
          <Typography component="h2" variant="display3" gutterBottom>
            Developer Profiles
          </Typography>
          <Profiles />
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(dashboard);
