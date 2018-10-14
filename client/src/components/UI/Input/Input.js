import React from "react";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  margin: {
    margin: theme.spacing.unit
  }
});

function input(props) {
  const { classes } = props;

  return (
    <FormControl fullWidth className={classes.margin}>
      <TextField
        {...props}
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
    </FormControl>
  );
}

export default withStyles(styles)(input);
