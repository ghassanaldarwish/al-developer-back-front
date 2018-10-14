import React from "react";
import { withStyles } from "@material-ui/core/styles";

import "./layout.css";
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

function Layout(props) {
  const { classes } = props;

  return (
    <div className="Layout">
      {" "}
      <main className={classes.layout}>{props.children}</main>
    </div>
  );
}

export default withStyles(styles)(Layout);
