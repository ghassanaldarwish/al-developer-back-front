import React from "react";

import Input from "../UI/Input/Input";
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
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  }
});

function profile(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <main className={classes.layout}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <form>
            {[1, 2, 3, 4, 5, 6].map(() => (
              <Input type="email" name="email" label="Email" />
            ))}
          </form>
        </div>
        {/* End hero unit */}
      </main>
    </React.Fragment>
  );
}

export default withStyles(styles)(profile);
