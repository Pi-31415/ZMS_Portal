import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Divider from '@material-ui/core/Divider';

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

    let classdata = "";
    if (mydata != undefined) {
        for (var i = mydata.lessons.length - 1; i >= 0; i--) {
            if (mydata.lessons[i].LESSON_ID == props.id) {
                console.log(mydata.lessons[i].TOPIC);
                classdata = mydata.lessons[i].TOPIC;
            }
        }
    }
    return (
        <>
            {classdata}
            <Divider />
        </>
    );
}