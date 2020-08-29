


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
export default function Example() {
    // Declare a new state variable, which we'll call "count"  
    const [myclasses,setMyclasses] = useState([]);
    const [classlist,setClasslist] = useState([]);

    const factorclass = () =>{
        var tempclass = [];
        var compon = myclasses.toString().split(",");
        for(var i=0;i<compon.length;i++){
            tempclass.push(compon[i]);
        }
        setClasslist(tempclass);
    }

    useEffect(() => {    // Update the document title using the browser API  
        setMyclasses(localStorage.getItem("Myclasses"));
        factorclass();
    },[]);

    return (
        <>
            {classlist.map((ronin)=><>{ronin}<br/></>)}
        </>
    );
}