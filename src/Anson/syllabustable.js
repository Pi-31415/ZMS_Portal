import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Chip from '@material-ui/core/Chip';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData1(lesson,topic,status,buttonclass) {
  return {
    lesson,
    topic,
    status,
    buttonclass,
    content: [
      { id: '1', description: 'Overview of analytical tools (audience and purpose, context, tone, stylistic devices, structure)'},
      { id: '1', description: 'How to annotate the text'},
      {id:'3',description:'Overview of time management for the paper '},
    ],
  };
}

function createData2(lesson,topic,status,buttonclass) {
    return {
      lesson,
      topic,
      status,
      buttonclass,
      content: [
        { id: '1', description: 'Outline of the most effective essay structure '},
        { id: '2', description: 'How to write a thesis'},
        { id: '3', description: 'How to write an effective introduction and conclusion '},
        { id: '4', description: 'HOMEWORK: TIMED paper 1 past paper'},
      ],
    };
  }
  function createData3(lesson,topic,status,buttonclass) {
    return {
      lesson,
      topic,
      status,
      buttonclass,
      content: [
        { id: '1', description: 'Go over past paper'},
        { id: '2', description: 'How to write effective body paragraphs; transitions between paragraphs'},
        { id: '3', description: 'HOMEWORK: TIMED paper 1 past paper '},
      ],
    };
  }
  function createData4(lesson,topic,status,buttonclass) {
    return {
      lesson,
      topic,
      status,
      buttonclass,
      content: [
        { id: '1', description: 'Go over past paper'},
        { id: '2', description: 'Paper 1 wrap-up: key takeaways and important notes'},
        { id: '3', description: 'Questions'},
      ],
    };
  }
  function createData5(lesson,topic,status,buttonclass) {
    return {
      lesson,
      topic,
      status,
      buttonclass,
      content: [
        { id: '1', description: 'Discussion about student’s chosen texts: context, characters'},
        { id: '2', description: 'How to answer the paper 2 question; how to choose a prompt '},
      ],
    };
  }
  function createData6(lesson,topic,status,buttonclass) {
    return {
      lesson,
      topic,
      status,
      buttonclass,
      content: [
        { id: '1', description: 'Continued discussion of chosen texts: themes, quotes'},
        { id: '2', description: 'Including important quotes, key themes, characters, context, etc.'},
        { id: '3', description: 'HOMEWORK: short analytical writing assignment to a prompt'},
      ],
    };
  }
  function createData7(lesson,topic,status,buttonclass) {
    return {
      lesson,
      topic,
      status,
      buttonclass,
      content: [
        { id: '1', description: 'How to write effective introduction, body paragraphs and strong conclusion '},
        { id: '2', description: 'How to compare + contrast'},
        { id: '3', description: 'Crafting a thesis '},
        { id: '4', description: 'HOMEWORK: TIMED paper 2 past paper '},
      ],
    };
  }
  function createData8(lesson,topic,status,buttonclass) {
    return {
      lesson,
      topic,
      status,
      buttonclass,
      content: [
        { id: '1', description: 'Go over past paper'},
        { id: '2', description: 'Review study guide'},
        { id: '3', description: 'Questions about paper 1, paper 2 or anything else'},
      ],
    };
  }

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.lesson}
        </TableCell>
        <TableCell align="left">{row.topic}</TableCell>
        <TableCell align="center"><Chip label={row.status} color={row.buttonclass} /></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box mb={4} ml={3} mr={3}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Lesson Content</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.content.map((historyRow) => (
                    <TableRow key={historyRow.id}>
                      <TableCell>{historyRow.id}{'. '}{historyRow.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const rows = [
  createData1('Lesson 1','What to look for when reading the texts ', 'incomplete','secondary'),
  createData2('Lesson 2','How to structure your essay', 'incomplete','secondary'),
  createData3('Lesson 3','Writing body paragraphs (analysis)', 'incomplete','secondary'),
  createData4('Lesson 4','Wrap up', 'incomplete','secondary'),
  createData5('Lesson 5','Overview and Understanding the texts ', 'incomplete','secondary'),
  createData6('Lesson 6','Planning and brainstorming: crafting a study guide', 'incomplete','secondary'),
  createData7('Lesson 7','Structuring paper 2 ', 'incomplete','secondary'),
  createData8('Lesson 8','Wrap up ', 'incomplete','secondary'),

];

export default function SyllabusTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Lesson</TableCell>
            <TableCell>Title</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.lesson} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}