import React, { useEffect } from 'react'
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
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Avatarimg from '../img/avatar.png';



export default function DashboardList() {

  useEffect(() => {
    // code to run on component mount
  }, [])

  return (
  <>
    <List>
      <div>

        <ListItem>
          <ListItemIcon>
            <Avatar alt={localStorage.getItem("Username")} src={Avatarimg} />
          </ListItemIcon>
          <ListItemText primary={localStorage.getItem("Username")} />
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
</List>
<Divider></Divider>
<List>
      <div>
        <ListItem>
          <ListItemIcon>
            <FontAwesomeIcon icon={faUserGraduate} size='2x' />
          </ListItemIcon>
          <ListItemText primary="My Classes" style={{ color: '#9b1c31' }} />
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
</List>
<Divider></Divider>
<List>
      <div>
        <Link to="/portal/" className="custom-link-normal">
          <ListItem button>
            <ListItemIcon>
              <FontAwesomeIcon icon={faSignOutAlt} size='2x' />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItem>
        </Link>
      </div>
      </List>
</>
);
  }

