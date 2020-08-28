import React, { useState, useEffect } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import '../scss/custom.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
//import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
//import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
//import Divider from '@material-ui/core/Divider';
import Avatarimg from '../img/avatar.png';
import Mycourses from './mycourses';
import Divider from '@material-ui/core/Divider';

export default function DashboardList() {
  const [nametoshow, setNametoshow] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setNametoshow(localStorage.getItem("Username"));
    setEmail(localStorage.getItem("Usermail"));
  }, [])


  /*
  <ListItem>
          <ListItemIcon>
            
          </ListItemIcon>
            <ListItemText primary={<b>My Classes</b>} />
          </ListItem>
         
            <Link to="/portal/dashboard/syllabus" className="custom-link-normal">

          <ListItem>
            <ListItemIcon>
              <FontAwesomeIcon icon={faCalculator} size='2x' />
            </ListItemIcon>
            <ListItemText primary="IB Mathematics" />
          </ListItem>
            </Link>

            ---------

            <Link to="/portal/dashboard/schedule" className="custom-link-normal">
            <ListItem button>
              <ListItemIcon>
                <FontAwesomeIcon icon={faCalendarAlt} size='2x' />
              </ListItemIcon>
              <ListItemText primary="Schedule" />
            </ListItem>
          </Link>


          ---------

          <Divider></Divider>
      <List>
        <div>


        </div>
      </List>
      <Divider></Divider>
  
  */

  return (
    <>
      <List>
        <div>
          <ListItem>
            <ListItemIcon>
              <Avatar alt={nametoshow} src={Avatarimg} />
            </ListItemIcon>
            <ListItemText primary={<b>{nametoshow}</b>} />
          </ListItem>
          <ListItem>
            <ListItemText primary={<i style={{fontSize:'0.8em'}}>{email}</i>} />
          </ListItem>
          <Divider></Divider>
          <Link to="/portal/dashboard/home" className="custom-link-normal">
            <ListItem button>
              <ListItemIcon>
                <FontAwesomeIcon icon={faHome} size='2x' />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
        </div>
      </List>
      <Divider></Divider>
      <ListItem>
        <ListItemText primary={<b>My Courses</b>} />
      </ListItem>
      <Mycourses></Mycourses>
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

