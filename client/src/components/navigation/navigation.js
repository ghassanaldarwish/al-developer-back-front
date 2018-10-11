import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import "./navigation.css";
const styles = theme => ({
  appBar: {
    backgroundColor: "#2196F3"
  },
  Toolbar: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  toolbarTitle: {
    flex: 1,
    color: "#fff"
  }
});

function Pricing(props) {
  const { classes } = props;

  return (
    <div className="Navigation">
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.Toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <a href="/">AL-Developer</a>
          </Typography>
          <Button>ghassan</Button>
          <Button>
            {" "}
            <a href="http://localhost:5000/api/user/current_user">user</a>
          </Button>
          <Button>
            <Link to="/profile">profile</Link>
          </Button>

          <Button variant="contained" color="secondary">
            <a href="http://localhost:5000/api/user/auth/google">
              Login with google+
            </a>
          </Button>
          <Button variant="contained" color="secondary">
            <a href="http://localhost:5000/api/user/logout">logout</a>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Pricing);
