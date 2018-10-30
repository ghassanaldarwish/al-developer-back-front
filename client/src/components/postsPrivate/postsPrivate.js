import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import PostsDataHandled from "./postsDataHandled";
import SinglePost from "../comments/singlePost";
import Grow from "@material-ui/core/Grow";

class ResponsiveDialog extends React.Component {
  state = {
    open: false,
    id: null
  };

  handleClickOpen = id => {
    this.setState({ open: true, id });
  };

  handleClose = () => {
    this.setState({ open: false, id: null });
  };

  render() {
    return (
      <div>
        <PostsDataHandled click={this.handleClickOpen} />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll="paper"
          fullWidth
          aria-labelledby="scroll-dialog-title"
          TransitionComponent={Grow}
        >
          <DialogTitle id="scroll-dialog-title">Comments</DialogTitle>
          <DialogContent
            style={{ backgroundColor: "#F5F8FA", paddingTop: "20px" }}
          >
            {this.state.open && this.state.id ? (
              <SinglePost postId={this.state.id} />
            ) : null}
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
export default withMobileDialog()(ResponsiveDialog);
