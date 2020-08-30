import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Headline(props) {

    const [mydata, setMydata] = useState();

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


    return (
        <>
            <i>{inst}</i>
        </>);
}

export default Headline;