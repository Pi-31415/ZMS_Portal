import React, { useState, useEffect } from 'react';



export default function Example(props) {
    const [data, setData] = useState([]);

    

    useEffect(() => {
        console.log(props.classdata);
    },[props.classdata]);

    return (
        <>
            
            Class Table
        </>
    );
}