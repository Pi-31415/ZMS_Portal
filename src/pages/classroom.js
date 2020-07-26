import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Classroom() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar>
                <Toolbar>
                    <Link to="/portal/dashboard/home" style={{color:'#fff'}}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <ArrowBackIcon />
                    </IconButton>
                    </Link>
                    <Typography variant="h6">ZMS Classroom</Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <iframe style={{ width: '100vw', border: 'none', height: 'calc(100vh - 64px)' }} allow="camera *;microphone *" src={localStorage.getItem("Zipcalllink")} title="W3Schools Free Online Web Tutorials">
            </iframe>
        </React.Fragment>
    );
}