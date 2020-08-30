import React, { useState, useEffect } from 'react';


var data = [];

export default function Example(props) {
    const [mydata, setMydata] = useState([]);

    const stateme = () => {
        setMydata(data);
        console.log(mydata);
    }

    useEffect(() => {
        data = props.classdata;
        stateme();
    }, [props.classdata]);

    return (
        <>
            <ul>
                {props.classdata.map(u => <div>{u}</div>)}
            </ul>
        </>
    );
}