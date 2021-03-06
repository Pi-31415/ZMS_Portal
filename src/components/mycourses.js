import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';
import Smarticon from './smarticon';
import Smartlinktext from './smartlinktext';
import { CircularProgress } from '@material-ui/core';
var courselookupname = [];
var courselookupdescription = [];
var enrolledcourses = [];
var enrolledcourseid = [];
var enrolledclasses = [];
export default function Example() {
    // Declare a new state variable, which we'll call "count"  
    const [userid, setUserid] = useState("");
    const [mycourses, setMycourses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {    // Update the document title using the browser API  
        setUserid(localStorage.getItem("Userid"));
        //load all information into local storage
        axios.post('https://zmsedu.com/api/admin/course/get', {

        })
            .then(res => {
                const courses = res.data.COURSES;
                for (var i = 0; i < courses.length; i++) {
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
                for (var i = 0; i < classes.length; i++) {
                    //console.log(classes[i].STUDENTS);
                    if (classes[i].STUDENTS.includes(localStorage.getItem("Userid"))) {
                        enrolledclasses.push(classes[i].CLASS_ID);
                        enrolledcourses.push(classes[i].CLASS_ID);
                        enrolledcourseid.push(classes[i].COURSE_ID);
                    }
                }
                
                var set = new Set(enrolledcourses);
                let array = [...set];
                setMycourses(array);

                //console.log(enrolledclasses);
                set = new Set(enrolledclasses);
                array = [...set];
                localStorage.setItem("Myclasses",array);

                setLoading(false);
            }).catch(error => {
                console.log(error);
            });

    }, []);
    //

    let button = <div style={{marginLeft:'auto',marginRight:'auto',marginBottom:10}}>
        <CircularProgress />
    </div>;

    if (loading === false) {
        if (mycourses[0] == undefined) {
            button = <>
                <ListItem button>
                    <ListItemText primary="No Classes" />
                </ListItem>
            </>;
        }
        else {
            button = mycourses.map((course) =>
                <>
                    <Link to={'/portal/dashboard/syllabus/' + course} className="custom-link-normal">
                        <ListItem
                            button
                            onClick={() => {
                                localStorage.setItem("CurrentSyllabus", course);
                                //alert("Set");
                            }}
                        >
                            <ListItemIcon>
                                <Smarticon name={course}></Smarticon>
                            </ListItemIcon>
                            <Smartlinktext name={course}></Smartlinktext>
                        </ListItem>
                    </Link>
                </>
            );
        }
    }

    return (
        <>
            {button}
        </>
    );
}