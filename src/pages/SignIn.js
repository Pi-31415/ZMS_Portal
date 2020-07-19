import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import zmslogo from '../img/favicon_source.png';
import Copyright from '../components/copyright';
import Typography from '@material-ui/core/Typography';
import '../scss/custom.scss';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(http://zmsedu.com/img/banner.jpeg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();  
  let history = useHistory();

  function handleClick() {
    //history.push("/portal/dashboard/home");
    /*const query = {
      "USERNAME": "Pi",
      "PASSWORD": "123456"
      };
    axios.post('http://zmsedu.com/api/login', query)
        .then(response => console.log(response.data.RESULT));*/
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log(`${auth}`);
    if(`${auth}` == `success`){
      document.getElementById("message").innerHTML = `${auth}`;
    }else if(`${auth}` == `notloggedin`){
      document.getElementById("message").innerHTML = ``;
    }
    else{
      document.getElementById("message").innerHTML = `Wrong Username or Password`;
    }
  });
  
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [auth,setAuth] = useState("notloggedin");

   const handleSubmit = (evt) => {
       evt.preventDefault();
       const query = {
        "USERNAME": email,
        "PASSWORD": password
        };
        axios.post('http://zmsedu.com/api/login', query)
        .then(response => setAuth(response.data.RESULT);

   }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>

          <img src={zmslogo} align="center" alt="logo" width="100"></img>
          <p id="message"></p>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={email}
              onChange={e => setEmail(e.target.value)}
              id="username"
              label="Username"
              name="u"
              autoComplete="name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={password}
              onChange={e => setPassword(e.target.value)}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit" 
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log in
            </Button>
            <Box mt={5} align="center">
              <Typography>
                <Link to="/portal/signup" className="custom-link">{"Don't have an account? Sign Up"}</Link>
              </Typography>
            </Box>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}