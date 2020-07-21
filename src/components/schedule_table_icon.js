import React from 'react';
import { loadCSS } from 'fg-loadcss';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import IconSelector from './subject_icon_selector';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > .fa': {
      margin: theme.spacing(2),
    },
  },
}));

export default function ScheduleIcon(props) {
  const classes = useStyles();

  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);


  return (
    <div className={classes.root}>
      <IconSelector iconname={props.icon}></IconSelector>
      
    </div>
  );
}