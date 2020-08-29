import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
export default function Example() {
    // Declare a new state variable, which we'll call "count"  

    const [classlist, setClasslist] = useState();

    const resolve = () => {
        axios.post('https://zmsedu.com/api/admin/class/get', {

        })
            .then(res => {
                var enrolledclasses = [];
                const classes = res.data.CLASS;
                for (var i = 0; i < classes.length; i++) {
                    if (classes[i].STUDENTS.includes(localStorage.getItem("Userid"))) {
                        enrolledclasses.push(classes[i].CLASS_ID);
                    }
                }
                var set = new Set(enrolledclasses);
                var array = [...set];
                setClasslist(array);
            }).catch(error => {
                console.log(error);
            });
    }


    useEffect(() => {    // Update the document title using the browser API  
        resolve();
    }, []);

    return (
        <>
            Hi {classlist}
        </>
    );
}