import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import headerImg from "../../../assets/header.jpg";

const styles = {
  card: {
    maxWidth: "100vw",
    position: "relative"
  },
  media: {
    height: "100vh"
  }
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={headerImg}>
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">AL-Developer</h1>
                <p className="lead">Get help from other developer</p>
              </div>
            </div>
          </div>
        </div>
      </CardMedia>
    </Card>
  );
}

export default withStyles(styles)(MediaCard);
