import React, { useState, useEffect } from 'react';


export default function Example(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(props.classdata);
    },[]);

    return (
        <>
            {data}
            Class Table
        </>
    );
}