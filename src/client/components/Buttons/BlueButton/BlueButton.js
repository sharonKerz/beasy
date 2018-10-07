import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

function BlueButton(props) {
  const { classes, text, clicked } = props;
  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={clicked}
        className={classes.button}>
        {text}
      </Button>
    </div>
  );
}

export default withStyles(styles)(BlueButton);
