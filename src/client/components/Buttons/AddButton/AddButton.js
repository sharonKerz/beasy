import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import { withStyles } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: lightBlue[800],
    },
  },
});

class AddButton extends React.Component {
  componentDidMount() {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#insertion-point-jss'),
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Icon
          className={classNames(classes.iconHover, 'fa fa-plus-circle')}
          color="Primary"
          fontSize="large"
        />
      </div>
    );
  }
}

AddButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddButton);
