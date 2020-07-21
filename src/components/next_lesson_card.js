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
import { Link } from 'react-router-dom';
import {faBook} from '@fortawesome/free-solid-svg-icons';
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
            <Title>IB English Lang & Lit with Lauren</Title>
            <Typography component="p" variant="h4">
            <FontAwesomeIcon icon={faBook} style={{color:'#777'}}/> Lesson 1
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
            What to look for when reading the texts
            </Typography>
            <Typography color="textPrimary" className={classes.depositContext}>
              23 July 2020 (Thursday) - 3:30 p.m. HKT
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="large" color="primary">
          {/*<Link to="/portal/classroom" className="custom-btn-link"> Go to class</Link>*/}
          <a href="https://zipcall.io/join/zms_anson" target="_blank" className="custom-btn-link"> Go to class</a>
        </Button>
          {/* */}
        </CardActions>
      </Card>

    </React.Fragment>
  );
}