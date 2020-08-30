import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';


export default function Example(props) {

    const [mydata, setMydata] = useState();

    const api_get = "https://zmsedu.com/api/admin/lesson/get";

    const refresh = () => {
        axios.post(api_get, {
        })
            .then(res => {
                const lessons = res.data.LESSONS;
                setMydata({ lessons });
                console.log("Refreshed");
            }).catch(error => {
                alert(error);
            });
    }

    useEffect(() => {
        refresh();

    }, []);

    let classdata = [];
    if (mydata != undefined) {
        for(var i=0;i<mydata.lessons.length;i++){
            if(mydata.lessons[i].CLASS_ID == props.data){
                console.log(mydata.lessons[i].TOPIC);
                classdata.push(mydata.lessons[i].TOPIC);
            }
        }
    } 

    return (
        <>
            <Paper style={{ padding: 20, margin: 20 }}>
                {props.data}
                {classdata.map((u) => <>{u}</>)}
            </Paper>
        </>
    );
}