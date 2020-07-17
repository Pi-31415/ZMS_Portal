import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import '../scss/custom.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faAtom } from '@fortawesome/free-solid-svg-icons'
import { faFlask } from '@fortawesome/free-solid-svg-icons'

export const mainListItems = (
  <div>
    <Link to="/portal/dashboard/home" className="custom-link-normal">
    <ListItem button>
        <ListItemIcon>
          <FontAwesomeIcon icon={faHome} size='2x' />
        </ListItemIcon>
        <ListItemText primary="Home" />
    </ListItem>
    </Link>
    <Link to="/portal/dashboard/schedule" className="custom-link-normal">
    <ListItem button>
        <ListItemIcon>
          <FontAwesomeIcon icon={faCalendarAlt} size='2x' />
        </ListItemIcon>
        <ListItemText primary="Schedule" />
    </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>My Classes</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <FontAwesomeIcon icon={faAtom} size='2x' />
      </ListItemIcon>
      <ListItemText primary="IB Physics" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FontAwesomeIcon icon={faFlask} size='2x' />
      </ListItemIcon>
      <ListItemText primary="IB Chemistry" />
    </ListItem>
  </div>
);