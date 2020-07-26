import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Navbar from './navbar';
import ReactMarkdown from "react-markdown";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../scss/custom.scss';

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
    height: 240,
  },
}));



const markdown = `
# IB Mathematics Internal Assessment 

*** 

**Tutor:** Mookie Chau,* a current IB Mathematics teacher. Graduated fromthe University of Cambridge with an MPhil in Mathematics Education.*
 
## Lesson 1-2: Review the Maths IA proposal, sample Maths IA and Data Collection 
- Go through the proposal 
- How to structure your maths IA?
- Comment and analyse some sample Maths IA using the assessment criteria 
- How to collect your data? 
- How to use excel for graph plotting? 
- **HOMEWORK:** Data Collection section of Maths IA 

## Lesson 3: Statistics concepts used in Maths IA 

- What statistics concepts should you integrate in your Maths IA?
- How to apply those statistics concepts in your Maths IA? 
- How to type those mathematics equations in Microsoft Word?
- **HOMEWORK:** Calculation section of Maths IA  

## Lesson 4: Use of Technology in Maths IA 

- How to utilize technology in your Maths IA?
- What tools should you include apart from GDC and Microsoft Excel? 
- How to use tools to crosscheck and validate the result? 
- **HOMEWORK:** Technology section of Maths IA  

## Lesson 5: Analysis section of Maths IA 
- How to analyse the result? 
- How to show personal engagement? (Criterion C) 
- **HOMEWORK:** Analysis section of Maths IA  

## Lesson 6: Limitation section of Maths IA
- What   are   the   limitations   and   weaknesses   of   your   results   andanalysis?  
- What can be the suggested ‘further investigations’?
- How to write a critical reflection by providing substantial evidence? (Criterion D) 
- **HOMEWORK:** Limitation section of Maths IA  

## Lesson 7: Organization of Maths IA  
- How to write an introduction and conclusion?
- How to do criterions and bibliography? 
- How can you improve the presentation of your Maths IA? (Criterion A) 
- **HOMEWORK:** Introduction and Conclusion section of Maths IA 

## Lesson 8: Final proofread of commented Maths IA draft 

- How to  improve  your Maths  IA  using comments  by   the  school teacher? 
- Final detailed review of Maths IA (looking for typos, mistype of mathematical notations etc.) 

***

**Notes:** *Since Math IA is a very personal piece of work, the syllabus framework above is for reference   only.   It  is   subject  to   change   depending  on   the   student’s   needs   and progress.*

`

export default function AnsonSyllabus() {
  const classes = useStyles();
  const username = localStorage.getItem("UsernameDisplay");

  if (username.includes("Erica") === true) {
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Navbar></Navbar>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Button variant="contained" color="primary">
              <Link to="/portal/dashboard/home" className="custom-btn-link-white">Back</Link>
            </Button>
            <br />
            <ReactMarkdown source={markdown} />
            <br /><br />
          </Container>
        </main>
      </div>
    );
  }

  if (username.includes("Shiv") === true) {
    return (
      <div className={classes.root}>

        <CssBaseline />
        <Navbar></Navbar>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
          <Button variant="contained" color="primary">
              <Link to="/portal/dashboard/home" className="custom-btn-link-white">Back</Link>
            </Button>
            <br /><br />
            You are on an IA Consultation session. Thus there is no syllabus for now.
            <br /><br />
          </Container>
        </main>
      </div>
    );
  }


}