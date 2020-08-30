import React from 'react';
import Moment from 'react-moment';

function formatdate(inputdate) {
    //format the time from server and return the Hong Kong Time zone
    //console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
    var res = inputdate.toString().split(".");
    var moment = require('moment-timezone');
    var utcCutoff = moment.utc(res[0], '');
    var displayCutoff = utcCutoff.clone().tz(Intl.DateTimeFormat().resolvedOptions().timeZone);
    localStorage.setItem("tutordate", moment(displayCutoff).format('hh:mm a'));
    return displayCutoff;
}

function Headline(props) {
    return(
    <>
        <Moment format="DD-MMM-YYYY (ddd) hh:mm a">{formatdate(props.value)}</Moment>
        <br/>
        {' ('+Intl.DateTimeFormat().resolvedOptions().timeZone+' Time)'}
    </>);
}

export default Headline;