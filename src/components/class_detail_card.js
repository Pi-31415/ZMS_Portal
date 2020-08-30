import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Divider from '@material-ui/core/Divider';
import Smarticon from './smarticon';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Dateparser from './dateparser';
import Instructorinfo from './instructorinfo';
import Button from '@material-ui/core/Button';
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

    let classdata = "";
    let datedata = "";
    let classid = "";
    let index = 0;
    let status = "";
    let zoomlink = "";
    let passcode = "";
    let classcode = 0;
    if (mydata != undefined) {
        for (var i = mydata.lessons.length - 1; i >= 0; i--) {
            if (mydata.lessons[i].LESSON_ID == props.id) {
                //console.log(mydata.lessons[i].TOPIC);
                classcode = i;
                classdata = mydata.lessons[i].TOPIC;
                datedata = mydata.lessons[i].START_DATETIME;
                classid = mydata.lessons[i].CLASS_ID;
                status = mydata.lessons[i].STATUS;
                zoomlink = mydata.lessons[i].LESSON_LINK.ZOOM_LINK;
                passcode = mydata.lessons[i].LESSON_LINK.PASSCODE;
            }
        }
    }

    let button = <Button variant="outlined" color="primary">
            Join
                </Button>;
    if (status == "Scheduled") {
        button = <Button variant="outlined" color="primary">
            Join
                </Button>;
    }

    return (
        <>
            <ListItem>
                <ListItemIcon>
                    <Smarticon name={classid}></Smarticon>
                </ListItemIcon>
                <ListItemText primary={classdata} secondary={<Dateparser value={datedata}></Dateparser>} />
                <ListItemText primary={status} secondary={<Instructorinfo value={classid}></Instructorinfo>} />
                <ListItemText primary={button} />
            </ListItem>
            <Divider />
        </>
    );
}