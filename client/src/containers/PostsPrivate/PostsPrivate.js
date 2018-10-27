import React, { Component } from "react";
import CreatePost from "../../components/createPost/createPost";
import PostsPrivate from "../../components/postsPrivate/postsPrivate";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 700,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
});
class posts extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div style={{ marginTop: "33px" }}>
        <main className={classes.layout}>
          <CreatePost />
          <PostsPrivate />
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(posts);
