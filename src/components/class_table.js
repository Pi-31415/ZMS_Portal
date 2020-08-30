import React, { useState, useEffect } from 'react';


var data = [];

export default function Example(props) {
    
    const stateme = () => {
        console.log(data);
    }

    useEffect(() => {
        data = props.classdata;
        stateme();
    },[props.classdata]);

    return (
        <>
            
            Class Table
        </>
    );
}