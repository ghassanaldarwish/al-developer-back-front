import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
// import { connect } from "react-redux";
// import { withRouter, Link } from "react-router-dom";
// import * as actions from "../../../store/actions";
import Spinner from "../../UI/Spinner/Spinner";
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
class commentsForm extends Component {
  //   addComment;
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={1}>
        <form onSubmit={this.props.onSubmit}>
          <TextField
            multiline
            fullWidth
            autoFocus
            id="standard-with-placeholder"
            label="Add Comment"
            className={classes.textField}
            margin="normal"
            name="comment"
            placeholder="Add Comment"
            value={this.props.comment}
            onChange={this.props.onChangeHandler}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            disabled={isEmpty(this.props.comment) ? true : false}
          >
            Comment
          </Button>
        </form>
      </Paper>
      // <div class="post-form mb-3">
      //   <div class="card card-info">
      //     <div class="card-header bg-info text-white">Add Comment .....</div>
      //     <div class="card-body">
      //       <form onSubmit={this.props.onSubmit}>
      //         <div class="form-group">
      //           <textarea
      //             name="comment"
      //             class="form-control form-control-lg"
      //             placeholder="Add Comment"
      //             value={this.props.comment}
      //             onChange={this.props.onChangeHandler}
      //           />
      //         </div>
      //         <button type="submit" class="btn btn-dark">
      //           Comment
      //         </button>
      //       </form>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default withStyles(styles)(commentsForm);
