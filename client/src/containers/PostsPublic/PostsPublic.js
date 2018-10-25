import React, { Component } from "react";
import PostsPublic from "../../components/postsPublic/postsPublic";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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
class post extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="Layout">
        <main className={classes.layout}>
          <Typography
            align="center"
            component="h2"
            variant="display3"
            gutterBottom
          >
            current our developer poste
          </Typography>
          <PostsPublic />
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(post);
