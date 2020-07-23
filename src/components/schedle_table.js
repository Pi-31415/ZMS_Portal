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
import ScheduleIcon from './schedule_table_icon'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, mon, tue, wed, thur, fri, sat, sun) {
  return { name, mon, tue, wed, thur, fri, sat, sun };
}

function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
    diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

function addDays(date, days) {
  const copy = new Date(Number(date))
  copy.setDate(date.getDate() + days)
  return copy
}


const rows = [
  createData('Morning', '', '', '', '', '', '', ''),
  createData('Afternoon', '', '', '', <ScheduleIcon icon="fa fa-book" subject="IB English (completed)" time="3:30 p.m."></ScheduleIcon>, '', '', ''),
  createData('Evening', '', '', '', '', '', '', ''),
];

export default function SimpleTable() {

  const classes = useStyles();

  const monday = getMonday(new Date());
  const tuesday = addDays(monday, 1);
  const wednesday = addDays(monday, 2);
  const thursday = addDays(monday, 3);
  const friday = addDays(monday, 4);
  const saturday = addDays(monday, 5);
  const sunday = addDays(monday, 6);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <colgroup>
          <col width="14.28%" />
          <col width="14.28%" />
          <col width="14.28%" />
          <col width="14.28%" />
          <col width="14.28%" />
          <col width="14.28%" />
          <col width="14.28%" />
        </colgroup>
        <TableHead>
          <TableRow style={{ backgroundColor: '#9b1c31' }}>
            <TableCell colSpan="7" style={{ color: '#fff' }} align="center">This Week</TableCell>
          </TableRow>
          <TableRow style={{ backgroundColor: '#ddd' }}>
            <TableCell size="small" style={{ color: '#666' }} align="center">Mon<br></br><Moment format="DD">{monday}</Moment></TableCell>
            <TableCell size="small" style={{ color: '#666' }} align="center">Tue<br></br><Moment format="DD">{tuesday}</Moment></TableCell>
            <TableCell size="small" style={{ color: '#666' }} align="center">Wed<br></br><Moment format="DD">{wednesday}</Moment></TableCell>
            <TableCell size="small" style={{ color: '#666' }} align="center">Thur<br></br><Moment format="DD">{thursday}</Moment></TableCell>
            <TableCell size="small" style={{ color: '#666' }} align="center">Fri<br></br><Moment format="DD">{friday}</Moment></TableCell>
            <TableCell size="small" style={{ color: '#666' }} align="center">Sat<br></br><Moment format="DD">{saturday}</Moment></TableCell>
            <TableCell size="small" style={{ color: '#666' }} align="center">Sun<br></br><Moment format="DD">{sunday}</Moment></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell style={{ border: 'none' }} align="center">{row.mon}</TableCell>
              <TableCell style={{ border: 'none' }} align="center">{row.tue}</TableCell>
              <TableCell style={{ border: 'none' }} align="center">{row.wed}</TableCell>
              <TableCell style={{ border: 'none' }} align="center">{row.thur}</TableCell>
              <TableCell style={{ border: 'none' }} align="center">{row.fri}</TableCell>
              <TableCell style={{ border: 'none' }} align="center">{row.sat}</TableCell>
              <TableCell style={{ border: 'none' }} align="center">{row.sun}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}