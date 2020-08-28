import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

export default function Example(props) {
    // Declare a new state variable, which we'll call "count"  
    //const [userid,setUserid] = useState("");

    useEffect(() => {    // Update the document title using the browser API  
        

    });

    return (
        <>
            <h1>{props.course}</h1>
            <p>{props.name}</p>
        </>
    );
}