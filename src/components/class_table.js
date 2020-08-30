import React, { useState, useEffect } from 'react';


var data = [];

export default function Example(props) {
    const [mydata, setMydata] = useState([]);
    
    const stateme = () => {
        setMydata(data);
    }

    useEffect(() => {
        data = props.classdata;
        stateme();
    },[props.classdata]);

    return (
        <>
            
            Class Table
            {mydata}
        </>
    );
}