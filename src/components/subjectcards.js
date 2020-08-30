import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import Classdetail from './class_detail_card';

export default function Example(props) {

    const [mydata, setMydata] = useState();

    const api_get = "https://zmsedu.com/api/admin/lesson/get";


    const refresh = () => {
        axios.post(api_get, {
        })
        .then(res => {
            const lessons = res.data.LESSONS;
            setMydata({ lessons });
            //console.log("Refreshed");
        }).catch(error => {
            alert(error);
        });
    }

    useEffect(() => {
        refresh();

    }, []);

    let classdata = [];
    if (mydata != undefined) {
        for(var i=mydata.lessons.length-1;i>=0;i--){
            if(mydata.lessons[i].CLASS_ID == props.data){
                //console.log(mydata.lessons[i].TOPIC);
                classdata.push(mydata.lessons[i].LESSON_ID);
            }
        }
    } 

    return (
        <>
            <Paper style={{ padding: 20, margin: 20 }}>
                <h3>{props.data} Lessons</h3>
                {classdata.map((u) => <Classdetail id={u}></Classdetail>)}
            </Paper>
        </>
    );
}