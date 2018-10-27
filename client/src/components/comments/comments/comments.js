import React, { Component } from "react";
// import { connect } from "react-redux";
// import { withRouter, Link } from "react-router-dom";
// import * as actions from "../../../store/actions";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Spinner from "../../UI/Spinner/Spinner";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";

import DeleteIcon from "@material-ui/icons/Delete";
const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  button: {
    margin: theme.spacing.unit
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    wordWrap: "break-word"
  },
  chip: {
    margin: theme.spacing.unit,
    width: "100%"
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
});

const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

class comments extends Component {
  render() {
    const { classes } = this.props;
    let postTimplet = <p>NO COMMENTS</p>;
    if (!isEmpty(this.props.post.post.comments)) {
      if (this.props.post.post.comments.length > 0) {
        postTimplet = this.props.post.post.comments.map(comment => (
          <Paper className={classes.paper}>
            <CardHeader
              avatar={
                <Avatar
                  alt="Remy Sharp"
                  src={comment.avatar}
                  className={classes.avatar}
                />
              }
              action={
                comment.user === this.props.auth._id ? (
                  <IconButton aria-label="Delete" className={classes.button}>
                    <DeleteIcon
                      onClick={() =>
                        this.props.deleteComment(
                          this.props.post.post._id,
                          comment._id
                        )
                      }
                    />
                  </IconButton>
                ) : null
              }
              title={comment.name}
              subheader={
                <Moment format="YYYY/MM/DD HH:mm">{comment.date}</Moment>
              }
            />
            <Typography paragraph>{comment.text}</Typography>
          </Paper>
        ));
      }
    }
    return this.props.post.loading ? <Spinner /> : postTimplet;
  }
}

export default withStyles(styles)(comments);
