import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from './title';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import '../scss/custom.scss';
import axios from "axios";
import Moment from 'react-moment';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

function formatdate(inputdate) {
  //format the time from server and return the Hong Kong Time zone
  var res = inputdate.split(".");
  var moment = require('moment-timezone');
  var utcCutoff = moment.utc(res[0], '');
  var displayCutoff = utcCutoff.clone().tz('Asia/Hong_Kong');
  localStorage.setItem("tutordate", moment(displayCutoff).format('hh:mm a'));
  return displayCutoff;
}

export default function Nextlesson() {
  const username_temporary = localStorage.getItem("Username").toLowerCase();
  var username = "";

  if (username_temporary.includes("erica")) {
    username = "erica_test";
    localStorage.setItem("UsernameDisplay", "Erica Valleramos");
  }
  else if (username_temporary.includes("shiv")) {
    username = "shiv_test";
    localStorage.setItem("UsernameDisplay", "Shiv Bailur");
  } else {
    localStorage.setItem("UsernameDisplay", username_temporary);
  }

  const [teacher, setTeacher] = useState("");
  const [course, setCourse] = useState("");
  const [topic, setTopic] = useState("");
  const [datetime, setDatetime] = useState("");
  const [classexists, setClassexists] = useState("inquiry");

  useEffect(() => {
    const query = {
      "USERNAME": username
    };
    axios.post('https://zmsedu.com/api/get_lessons', query)
      .then(function (response) {
        setClassexists("success");
        localStorage.setItem("UsernameDisplay", response.data.LESSONS[0].STUDENT);
        setTeacher(response.data.LESSONS[0].TEACHER);
        setCourse(response.data.LESSONS[0].COURSE);
        setTopic(response.data.LESSONS[0].TOPIC);
        setDatetime(response.data.LESSONS[0].START_DATETIME);
        localStorage.setItem("Zipcalllink", response.data.LESSONS[0].LESSON_LINK);
      })
      .catch(error => {
        setClassexists("fail");
        console.log(error)
      });
  });

  const classes = useStyles();
  if (classexists === "inquiry") {
    return (
      <React.Fragment>
        <Card className={classes.root}>
          <CardContent align="center">
            <CircularProgress />
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
  else if (classexists === "fail") {
    return (
      <React.Fragment>
        <Card className={classes.root}>
          <CardContent align="center">
            <Typography>
              You have no class for now.
            </Typography>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
  else if (classexists === "success") {
    return (
      <React.Fragment>
        <Card className={classes.root}>

          <CardContent>
            <Title>{course}{" with "}{teacher}</Title>
            <Typography component="p" variant="h4">
              <FontAwesomeIcon icon={faBook} style={{ color: '#777' }} /> {course}
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
              {topic}
            </Typography>
            <Typography color="textPrimary" className={classes.depositContext}>
              <Moment format="dddd, DD MMMM YYYY hh:mm a">
                {formatdate(datetime)}
              </Moment> HKT
              </Typography>
          </CardContent>

          <CardActions>
            <Button size="large" color="primary">
              <Link to="/portal/classroom" className="custom-btn-link"> Go to class</Link>
              {/*<a href="https://zipcall.io/join/zms_anson" target="_blank" className="custom-btn-link"> Go to class</a>*/}
            </Button>
            <Button size="large" color="primary">
              <Link to="/portal/dashboard/syllabus" className="custom-btn-link">See Syllabus</Link>
            </Button>
            {/* */}
          </CardActions>
        </Card>
      </React.Fragment>

    );
  }

}