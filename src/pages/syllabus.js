import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Navbar from '../components/navbar';
import Copyright from '../components/copyright';
import { useParams } from 'react-router-dom';
//import Upload from '../components/upload';
import axios from 'axios';
import Markdownrenderer from '../components/markdownrenderer';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 200,
  },
}));

export default function Dashboard() {
  const { name } = useParams();
  const classes = useStyles();
  const [classname, setClassname] = useState("");
  const [courseid, setCourseid] = useState("");

  useEffect(() => {
    setClassname(localStorage.getItem("CurrentSyllabus"));
    axios.post('https://zmsedu.com/api/admin/class/get', {

    })
      .then(res => {
        
        const classes = res.data.CLASS;
        for(var i=0;i<classes.length;i++){
          if(classes[i].CLASS_ID == classname){
            setCourseid(classes[i].COURSE_ID);
            localStorage.setItem("CurrentCOURSE",classes[i].COURSE_ID);
          }
        }

      }).catch(error => {
        console.log(error);
      });


    });

  return (
    <div className={classes.root} style={{ backgroundColor: '#eee' }}>
      <CssBaseline />
      <Navbar></Navbar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12}>
            <Markdownrenderer name={courseid} course={classname}></Markdownrenderer>
              {/*
              <Paper className={classes.paper}>
              Something can go here
              </Paper>
              */}
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}