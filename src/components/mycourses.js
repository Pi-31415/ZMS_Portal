import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
export default function Example() {
    // Declare a new state variable, which we'll call "count"  
    const [count, setCount] = useState(0);


    /*
    <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
    */

    return (
        <Link to="/portal/dashboard/schedule" className="custom-link-normal">
            <ListItem button>
                <ListItemIcon>
                    <FontAwesomeIcon icon={faCalendarAlt} size='2x' />
                </ListItemIcon>
                <ListItemText primary="Schedule" />
            </ListItem>
        </Link>
    );
}