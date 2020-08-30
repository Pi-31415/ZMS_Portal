import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';


export default function Example(props) {

    const [data, setData] = useState();

    const api_get = "https://zmsedu.com/api/admin/lesson/get";

    const refresh = () => {
        axios.post(api_get, {
        })
            .then(res => {
                const lessons = res.data.LESSONS;
                setData({ lessons });
                console.log(data);
                console.log("Refreshed");
            }).catch(error => {
                alert(error);
            });
    }

    useEffect(() => {
        refresh();
        
    }, []);

    return (
        <>
            <Paper style={{ padding: 20, margin: 20 }}>
                {props.data}
            </Paper>
        </>
    );
}