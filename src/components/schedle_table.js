import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export default function ScheduleTable() {
  const EventCalendar = require('react-event-calendar');

  const events = [
    {
      start: '2015-07-20',
      end: '2015-07-02',
      eventClasses: 'optionalEvent'
        title: 'test event',
      description: 'This is a test description of an event',
    },
    {
      start: '2015-07-19',
      end: '2015-07-25',
      title: 'test event',
      description: 'This is a test description of an event',
      data: 'you can add what ever random data you may want to use later',
    },
  ];



  return (
    <EventCalendar
    month={7}
    year={2015}
    events={events}
    onEventClick={(target, eventData, day) => console.log(eventData)
      />
  );
}