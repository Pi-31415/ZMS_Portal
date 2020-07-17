import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import zmslogo from '../img/favicon_source.png';
import Copyright from '../components/copyright';
import Typography from '@material-ui/core/Typography';
import '../scss/custom.scss';

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

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <img src={zmslogo} align="center" alt="logo" width="100"></img>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                            I am a
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            Student
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                    <Box mb={1} mt={4}>
                        <Typography align="center">
                            By clicking "Sign Up" you agree to <br></br><Link className="custom-link" to="/portal/terms">{"Our Terms"}</Link> and <Link className="custom-link" to="/portal/privacy">{"Privacy Policy"}</Link>
                        </Typography>
                    </Box>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Box mt={5} align="center">
                        <Typography>
                            <Link className="custom-link" to="/portal">{"Already have an account? Log In."}</Link>
                        </Typography>
                    </Box>
                </form>
            </div>
            <Box mt={3} mb={5}>
                <Copyright />
            </Box>
        </Container>
    );
}
