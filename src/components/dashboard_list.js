import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import '../scss/custom.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import {faUserGraduate} from '@fortawesome/free-solid-svg-icons';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import Avatar from '@material-ui/core/Avatar';
import Avatarimage from '../img/avatar.png';


export const mainListItems = (
  
  const [username, setUsername] = useState(localStorage.getItem("Username"));

  <div>
  
  <ListItem>
        <ListItemIcon>
        <Avatar alt={username} src={Avatarimage} />
        </ListItemIcon>
        <ListItemText primary={username} />
    </ListItem>
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
    <ListItem>
      <ListItemIcon>
        <FontAwesomeIcon icon={faUserGraduate} size='2x' />
      </ListItemIcon>
      <ListItemText primary="My Classes" style={{color:'#9b1c31'}}/>
    </ListItem>
    <Link to="/portal/syllabus/anson" className="custom-link-normal">
    <ListItem button>
      <ListItemIcon>
        <FontAwesomeIcon icon={faBook} size='2x' />
      </ListItemIcon>
      <ListItemText primary="IB English" />
    </ListItem>
    </Link>
  </div>
);

export const logoutListItems = (
  <div>
  <Link to="/portal/" className="custom-link-normal">
    <ListItem button>
      <ListItemIcon>
        <FontAwesomeIcon icon={faSignOutAlt} size='2x' />
      </ListItemIcon>
      <ListItemText primary="Log Out"/>
    </ListItem>
    </Link>
  </div>
);