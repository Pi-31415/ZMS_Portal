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

function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day === 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

function addDays(date, days) {
  const copy = new Date(Number(date))
  copy.setDate(date.getDate() + days)
  return copy
}

const rows = [
  createData('Morning', '', '', '', '', '', '', ''),
  createData('Afternoon', '', '', '', '', '', '', ''),
  createData('Evening', '', '', '', '', '', '', ''),
];

export default function SimpleTable() {

  const classes = useStyles();

  const monday = getMonday(new Date());
  const tuesday = addDays(monday, 1);
  const wednesday  = addDays(monday, 2);
  const thursday  = addDays(monday, 3);
  const friday  = addDays(monday, 4);
  const saturday  = addDays(monday, 5);
  const sunday  = addDays(monday, 6);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Mon<br></br><Moment format="DD MMMM">{monday}</Moment></TableCell>
            <TableCell align="center">Tue<br></br><Moment format="DD MMMM">{tuesday}</Moment></TableCell>
            <TableCell align="center">Wed<br></br><Moment format="DD MMMM">{wednesday}</Moment></TableCell>
            <TableCell align="center">Thur<br></br><Moment format="DD MMMM">{thursday}</Moment></TableCell>
            <TableCell align="center">Fri<br></br><Moment format="DD MMMM">{friday}</Moment></TableCell>
            <TableCell align="center">Sat<br></br><Moment format="DD MMMM">{saturday}</Moment></TableCell>
            <TableCell align="center">Sun<br></br><Moment format="DD MMMM">{sunday}</Moment></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
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