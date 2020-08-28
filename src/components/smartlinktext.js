import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import {faChild} from '@fortawesome/free-solid-svg-icons';
import {faBrain} from '@fortawesome/free-solid-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {faDollarSign} from '@fortawesome/free-solid-svg-icons';
import {faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons';
import {faBusinessTime} from '@fortawesome/free-solid-svg-icons';
import {faUserShield} from '@fortawesome/free-solid-svg-icons';
import {faBuilding} from '@fortawesome/free-solid-svg-icons';
import {faMusic} from '@fortawesome/free-solid-svg-icons';
import ListItemText from '@material-ui/core/ListItemText';

function Header(props) {

    if(props.name.includes("GD")){
        let coursetext = "Game Development";
        return (<ListItemText primary={props.name} secondary={coursetext}/>);
    }
    if(props.name.includes("DA")){
        let coursetext = "Data Analysis with Excel";
        return (<ListItemText primary={props.name} secondary={coursetext}/>);
    }
    if(props.name.includes("YE")){
        let coursetext = "Young Engineer";
        return (<ListItemText primary={props.name} secondary={coursetext}/>);
    }
    if(props.name.includes("YS")){
        let coursetext = "Young Socrates";
        return (<ListItemText primary={props.name} secondary={coursetext}/>);
    }
    if(props.name.includes("PX")){
        let coursetext = "Psychology";
        return (<ListItemText primary={props.name} secondary={coursetext}/>);
    }
    if(props.name.includes("GC")){
        let coursetext = "Global Crisis";
        return (<ListItemText primary={props.name} secondary={coursetext}/>);
    }
    if(props.name.includes("SI")){
        let coursetext = "Stock Investing";
        return (<ListItemText primary={props.name} secondary={coursetext}/>);
    }
    if(props.name.includes("HM")){
        let coursetext = "How Markets Work";
        return (<ListItemText primary={props.name} secondary={coursetext}/>);
    }
    if(props.name.includes("BC")){
        let coursetext = "Business Case Analysis";
        return (<ListItemText primary={props.name} secondary={coursetext}/>);
    }
    if(props.name.includes("LX")){
        let coursetext = "Law";
        return (<ListItemText primary={props.name} secondary={coursetext}/>);
    }
    if(props.name.includes("AX")){
        let coursetext = "Architecture";
        return (<ListItemText primary={props.name} secondary={coursetext}/>);
    }
    if(props.name.includes("EM")){
        let coursetext = "Electronic Music Composition";
        return (<ListItemText primary={props.name} secondary={coursetext}/>);
    }
    else{
        let coursetext = props.name;
        return (<ListItemText primary={props.name} secondary={coursetext}/>);
    }

}


export default Header;