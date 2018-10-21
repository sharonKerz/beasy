import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class DatePicker extends React.Component {
  handleChange = (event) => {
    this.props.changed(event);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TextField
          id="date"
          label="Project Deadline"
          type="date"
          defaultValue="2017-05-24"
          onChange={this.handleChange}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    );
  }
}

DatePicker.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(DatePicker);
