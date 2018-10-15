import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
});

class CheckboxesGroup extends React.Component {
    state = {
        ranges: [...this.props.inputData.ranges]
    };

    handleChange = (index) => event => {
        const newRange = { ...this.state.ranges[index] }
        newRange.checked = event.target.checked

        const ranges = [...this.state.ranges]
        ranges[index] = newRange

        this.setState({ ranges: ranges })
    };

    render() {
        const { classes, inputData } = this.props;
        const error = this.state.ranges.find(r => r.checked);

        const selectItems = this.state.ranges.map((r, index) => {
            return <FormControlLabel
                control={
                    <Checkbox checked={r.checked} onChange={this.handleChange(index)} value={r.value} />
                }
                label={r.label}
            />
        })

        return (
            <div className={classes.root}>
                <FormControl required error={error} component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">{inputData.title}</FormLabel>
                    <FormGroup>
                        {selectItems}
                    </FormGroup>
                    <FormHelperText>{inputData.error}</FormHelperText>
                </FormControl>
            </div>
        );
    }
}

CheckboxesGroup.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxesGroup);
