import React, { Component } from "react";
import CreateProfile from "../../components/createProfile/createProfile";

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

class createProfile extends Component {
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

export default withStyles(styles)(createProfile);
