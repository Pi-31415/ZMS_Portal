import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Moment from 'react-moment';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name , mon, tue, wed, thur, fri, sat, sun) {
  return {name , mon, tue, wed, thur, fri, sat, sun};
}

const rows = [
  createData('Morning', '', '', '', '', '', '', ''),
  createData('Afternoon', '', '', '', '', '', '', ''),
  createData('Evening', '', '', '', '', '', '', ''),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.mon}</TableCell>
              <TableCell align="center">{row.tue}</TableCell>
              <TableCell align="center">{row.wed}</TableCell>
              <TableCell align="center">{row.thur}</TableCell>
              <TableCell align="center">{row.fri}</TableCell>
              <TableCell align="center">{row.sat}</TableCell>
              <TableCell align="center">{row.sun}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}