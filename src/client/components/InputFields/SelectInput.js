import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
});

class SelectInput extends React.Component {
  state = {
    selectedValue: '',
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
    this.props.changed(event)
  };

  render() {
    const { classes, inputData } = this.props;

    return (
      <div className={classes.root}>
        <TextField
          select
          className={classNames(classes.margin, classes.textField)}
          variant="filled"
          label={inputData.title}
          value={this.state.selectedValue}
          onChange={this.handleChange('selectedValue')}
          InputProps={{
            startAdornment: (
              <InputAdornment variant="filled" position="start">
                {inputData.adorment}
              </InputAdornment>
            ),
          }}
        >
          {inputData.ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    );
  }
}

SelectInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectInput);
