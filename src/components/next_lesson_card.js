import React, {useState, useEffect } from 'react';
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
import axios from "axios";
import Moment from 'react-moment';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

function formatdate(inputdate){
    //return inputdate;
    return "2020-07-27";
}

export default function Nextlesson() {
  const username = localStorage.getItem("Username");
  
  const [teacher, setTeacher] = useState("");
  const [course,setCourse] = useState("");
  const [topic,setTopic] = useState("");
  const [datetime,setDatetime] = useState("");

  useEffect(() => {
    const query = {
      "USERNAME": username
   };
   axios.post('https://zmsedu.com/api/get_lessons', query)
   .then(function(response){
    localStorage.setItem("UsernameDisplay",response.data.LESSONS[0].STUDENT);
    setTeacher(response.data.LESSONS[0].TEACHER);
    setCourse(response.data.LESSONS[0].COURSE);
    setTopic(response.data.LESSONS[0].TOPIC);
    setDatetime(response.data.LESSONS[0].START_DATETIME);
   } )
   .catch(error => {
     console.log(error)
   });
  });

  const classes = useStyles();
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Title>{course}{" with "}{teacher}</Title>
            <Typography component="p" variant="h4">
            <FontAwesomeIcon icon={faBook} style={{color:'#777'}}/> {course}
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
            {topic}
            </Typography>
            <Typography color="textPrimary" className={classes.depositContext}>
            <Moment format="DD">{formatdate(datetime)} </Moment>30th July 2020 3:30 pm HKT
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="large" color="primary">
          <Link to="/portal/classroom" className="custom-btn-link"> Go to class</Link>
          {/*<a href="https://zipcall.io/join/zms_anson" target="_blank" className="custom-btn-link"> Go to class</a>*/}
        </Button>
          {/* */}
        </CardActions>
      </Card>

    </React.Fragment>
  );
}