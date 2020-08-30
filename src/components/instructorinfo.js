import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Headline(props) {

    const [mydata, setMydata] = useState();
    const [teacherdata,setTeacherdata] = useState();

    const api_get = "https://zmsedu.com/api/admin/class/get";

    const refresh = () => {
        axios.post(api_get, {
        })
        .then(res => {
            const lessons = res.data.CLASS;
            setMydata({ lessons });
            //console.log("Refreshed");
        }).catch(error => {
            alert(error);
        });
        axios.post("https://zmsedu.com/api/admin/user/get", {
            "ROLE":"Teacher"
          })
        .then(res => {
            const lessons = res.data.USERS;
            setTeacherdata({ lessons });
            //console.log("Refreshed");
        }).catch(error => {
            alert(error);
        });
    }

    useEffect(() => {
        refresh();

    }, []);

    let inst = "";

    if (mydata != undefined) {
        for(var i=0;i<mydata.lessons.length;i++){
            if (mydata.lessons[i].CLASS_ID == props.value) {
                inst = mydata.lessons[i].TEACHER;
            }
        }
    }

    let techname = "";
    if (teacherdata != undefined) {
        console.log(teacherdata);
        for(var k=0;k<teacherdata.lessons.length;k++){
            if (teacherdata.lessons[k].ID == inst) {
                techname = teacherdata.lessons[k].FIRST_NAME +" "+ teacherdata.lessons[k].LAST_NAME;
            }
        }
    }


    return (
        <>
            Instructor: <i>{techname}</i>
        </>);
}

export default Headline;