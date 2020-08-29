import React, { useState, useEffect } from 'react';


export default function Example(props) {
    const [data, setData] = useState([]);

    

    useEffect(() => {
        setData();
    },[]);

    return (
        <>
            {props.classdata}
            Class Table
        </>
    );
}