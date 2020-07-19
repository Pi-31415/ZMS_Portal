import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from './title';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../scss/custom.scss';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Nextlesson() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Title>IB Chemistry with Mookie</Title>
            <Typography component="p" variant="h4">
            <FontAwesomeIcon icon={faFlask} style={{color:'#777'}}/> Electrolysis
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
              6 July 2020 (Monday) - 12:30 p.m. HKT
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="large" color="primary">
          <Link to="/portal/classroom" className="custom-btn-link"> Go to class</Link>
        </Button>
          <Button size="large" color="primary">
            Make a request
        </Button>
        </CardActions>
      </Card>

    </React.Fragment>
  );
}