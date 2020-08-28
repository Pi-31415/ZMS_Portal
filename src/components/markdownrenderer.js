import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import MDReactComponent from 'markdown-react-js';
import axios from 'axios';
var namelist = localStorage.getItem("Coursenames").split(",");
var disclist = localStorage.getItem("Coursedisc").split(",");


export default function Example(props) {
    // Declare a new state variable, which we'll call "count"  
    const [search,setSearch] = useState(localStorage.getItem("CurrentCOURSE"));
    const [reference,setReference] = useState("");

    useEffect(() => {    // Update the document title using the browser API  
        setSearch(localStorage.getItem("CurrentCOURSE"));
        axios.post("https://zmsedu.com/api/admin/syllabus/get", {
            //ROLE: "Student"
        })
            .then(res => {
                const syll = res.data.SYLLABUS;
                for(var i=0;i<syll.length;i++){
                    if(syll[i].COURSE_ID == search){
                        setReference(syll[i].REFERENCE.toString());
                        //console.log(reference);
                    }
                }

            }).catch(error => {
                alert(error);
            });

    });

    return (
        <>
            <h1>{namelist[parseInt(props.name) - 1]}: {props.course} Syllabus</h1>
            {/*<p>{props.name}</p> */}
            <MDReactComponent text={reference} />
        </>
    );
}