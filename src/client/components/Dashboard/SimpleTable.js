import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
    root: {
        width: '100%',
    },
    table: {
        minWidth: 700,
    },
};

function SimpleTable(props) {
    const { classes, goals } = props;
    console.log("The Data Is");
    console.log(goals);

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Goal Title</TableCell>
                        <TableCell>How</TableCell>
                        <TableCell>Want to Achieve</TableCell>
                        <TableCell>Where</TableCell>
                        <TableCell>Budget</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {goals.map(goal => {
                        return (
                            <TableRow key={goal.mainGoals}>
                                <TableCell component="th" scope="row">
                                    {goal.mainGoals}
                                </TableCell>
                                <TableCell>{goal.how}</TableCell>
                                <TableCell>{goal.achieve}</TableCell>
                                <TableCell>{goal.where}</TableCell>
                                <TableCell>{goal.budget}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
