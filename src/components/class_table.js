import React, { useState, useEffect } from 'react';
import Subjectcard from './subjectcards';
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
                {yayaya.map((number)=> <Subjectcard data={number}></Subjectcard>)}
        </>
    );
}