import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../store/actions";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  }
});

class post extends Component {
  state = {
    createPost: ""
  };
  componentDidMount() {
    this.props.onProfile();
    this.props.getPosts();
  }
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();

    const postData = {
      text: this.state.createPost,
      name: this.props.auth.name,
      avatar: this.props.auth.avatar,
      handle: this.props.profile.profile.handle
    };

    this.props.addPost(postData, this.props.history);
    this.setState({ createPost: "" });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={1}>
        <form onSubmit={this.onSubmit}>
          <TextField
            multiline
            fullWidth
            autoFocus
            id="standard-with-placeholder"
            label="Create a post"
            placeholder="Create a post"
            name="createPost"
            value={this.state.createPost}
            onChange={this.onChangeHandler}
            className={classes.textField}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            type="submit"
            disabled={isEmpty(this.state.createPost) ? true : false}
          >
            Post it
          </Button>
        </form>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  post: state.post
});

export default connect(
  mapStateToProps,
  actions
)(withRouter(withStyles(styles)(post)));
