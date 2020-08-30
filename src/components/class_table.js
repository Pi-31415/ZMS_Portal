import React, { useState, useEffect } from 'react';


var data = [];

export default function Example(props) {

    let yayaya;
    if(props.classdata != undefined){
        yayaya = props.classdata;
    }else{
        yayaya = [];
    }

    return (
        <>
            <ul>
                {yayaya.map((number)=> <li>{number}</li>)}
            </ul>
        </>
    );
}