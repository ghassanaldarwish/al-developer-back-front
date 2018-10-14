import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Spinner from "../UI/Spinner/Spinner";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});
const dashboard = props => {
  const { classes } = props;
  let dashboardData = <p>hello dash</p>;
  if (props.profile.profile === null || props.profile.loading) {
    dashboardData = <Spinner />;
  } else {
    if (Object.keys(props.profile.profile) > 0) {
      dashboardData = <p>your profile</p>;
    } else {
      dashboardData = (
        <Link to="/create-profile">
          <Button
            variant="fab"
            color="primary"
            aria-label="Add"
            className={classes.button}
          >
            <AddIcon />
          </Button>
        </Link>
      );
    }
  }
  return dashboardData;
};

export default withStyles(styles)(dashboard);
