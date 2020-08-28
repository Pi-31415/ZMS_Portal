import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

var courselookupname = [];
var courselookupdescription = [];
var enrolledcourses = [];
export default function Example() {
    // Declare a new state variable, which we'll call "count"  
    const [userid, setUserid] = useState("");

    useEffect(() => {    // Update the document title using the browser API  
        setUserid(localStorage.getItem("Userid"));
        //load all information into local storage
        axios.post('https://zmsedu.com/api/admin/course/get', {

        })
        .then(res => {
            const courses = res.data.COURSES;
            for(var i=0;i<courses.length;i++){
                courselookupname.push(courses[i].NAME);
                courselookupdescription.push(courses[i].DESCRIPTION);
            }
            localStorage.setItem("Coursenames", courselookupname);
            localStorage.setItem("Coursedisc", courselookupdescription);
        }).catch(error => {
            console.log(error);
        });
        //then get classes
        axios.post('https://zmsedu.com/api/admin/class/get', {

        })
        .then(res => {
            const classes = res.data.CLASS;
            for(var i=0;i<classes.length;i++){
                //console.log(classes[i].STUDENTS);
                if(classes[i].STUDENTS.includes(localStorage.getItem("Userid"))){
                    enrolledcourses.push(classes[i].CLASS_ID);
                }
                
            }
            console.log(enrolledcourses);
        }).catch(error => {
            console.log(error);
        });

    }, []);

    return (
        <>
            <Link to="/portal/dashboard/schedule" className="custom-link-normal">
                <ListItem button>
                    <ListItemIcon>
                        <FontAwesomeIcon icon={faCalendarAlt} size='2x' />
                    </ListItemIcon>
                    <ListItemText primary={userid} />
                </ListItem>
            </Link>
        </>
    );
}