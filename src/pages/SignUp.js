import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import zmslogo from '../img/favicon_source.png';
import Copyright from '../components/copyright';
import Typography from '@material-ui/core/Typography';
import '../scss/custom.scss';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();
    let history = useHistory();

    const [role, setRole] = React.useState("Student");
    const [signupusername,setSignupusername] = React.useState("");
    const [signuppassword,setSignupassword] =  React.useState("");
    const [firstname,setFirstname] = React.useState("");
    const [lastname,setLastname] = React.useState("");
    const [singupemail,setSignupemail]  = React.useState("");
    const [phone,setPhone]  = React.useState("");
    const [auth,setAuth] = useState("not_signed_up");

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    useEffect(() => {
        console.log(`${auth}`);
        if(`${auth}` === `success`){
          document.getElementById("message").innerHTML = `Account successfully created, please head back to log in page and log in.`;
          history.push("/portal/accountcreated");
        }else if(`${auth}` === `not_signed_up`){
          document.getElementById("message").innerHTML = ``;
        }
        else{
          document.getElementById("message").innerHTML = `Please try registering with another email.`;
        }
      });
    

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const query = {
            "USERNAME": signupusername,
            "PASSWORD": signuppassword,
            "FIRST_NAME": firstname,
            "LAST_NAME": lastname,
            "EMAIL": singupemail,
            "PHONE": phone,
            "ROLE": role
         };
         axios.post('https://zmsedu.com/api/signup', query)
         .then(response => setAuth(response.data.RESULT))
         .catch(error => {
           setAuth("Wrong Username or Password");
         });
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <img src={zmslogo} align="center" alt="logo" width="100"></img>
                <form className={classes.form} onSubmit={handleSubmit} Validate autocomplete="off">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <Box mb={2} align="center">
                            <FormControl className={classes.formControl}  style={{minWidth: 220}}>
                            <InputLabel id="demo-simple-select-label">I am a</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={role}
                                    onChange={handleRoleChange}
                                >
                                    <MenuItem value={"Student"}>Student</MenuItem>
                                    <MenuItem value={"Teacher"}>Teacher</MenuItem>
                                </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                onChange={e => setSignupusername(e.target.value)}
                                label="Username"
                                name="username"
                        
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                onChange={e => setFirstname(e.target.value)}
                                id="firstName"
                
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                onChange={e => setLastname(e.target.value)}
                                label="Last Name"
                                name="lastName"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                onChange={e => setSignupemail(e.target.value)}
                                label="Email Address"
                                name="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="phone"
                                onChange={e => setPhone(e.target.value)}
                                label="Phone"
                                name="phone"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                onChange={e => setSignupassword(e.target.value)}
                                type="password"
                                id="password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Confirm Password"
                                type="password"
                                id="password"
                            />
                        </Grid>
                    </Grid>
                    <Box mb={1} mt={2}>
                        <Typography align="center">
                            By clicking "Sign Up" you agree to <br></br><Link className="custom-link" to="/portal/terms">{"Our Terms"}</Link> and <Link className="custom-link" to="/portal/privacy">{"Privacy Policy"}</Link>
                        </Typography>
                    </Box>
                    <p style={{color:'green'}} id="message"></p>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Box mt={1} align="center">
                        <Typography>
                            <Link className="custom-link" to="/portal">{"Already have an account? Log In."}</Link>
                        </Typography>
                    </Box>
                </form>
            </div>
            <Box mt={5} mb={10}>
                <Copyright />
            </Box>
        </Container>
    );
}
