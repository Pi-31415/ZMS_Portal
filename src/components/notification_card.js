import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Box from '@material-ui/core/Box';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: '50vw',
    backgroundColor: '#e0f7fa',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function NotifCard(props) {
  const classes = useStyles();

  return (
    <Box mt={1}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.time}
          </Typography>
          <Typography variant="body2" component="p">
            <FontAwesomeIcon icon={faBook} /><b> {props.subject} :</b> {props.message} {' '}
            <a href={props.link} target="_blank" rel="noopener noreferrer"  style={{ color: '#9b1c31' }}>{props.link ? 'View' : ''}</a>
          </Typography>
        </CardContent>
        {/*
      <CardActions>
        <Button size="small">View</Button>
      </CardActions>
      */}
      </Card>
    </Box>
  );
}