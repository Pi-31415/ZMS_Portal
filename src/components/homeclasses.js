import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Class_table from './class_table';

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
            <Class_table classdata={classlist}></Class_table>
        </>
    );
}