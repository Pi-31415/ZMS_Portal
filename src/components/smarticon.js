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
//faGamepad

function Header(props) {

    if(props.name.includes("GD")){
        return (<FontAwesomeIcon icon={faGamepad} size='2x' /> );
    }
    if(props.name.includes("DA")){
        return (<FontAwesomeIcon icon={faChartBar} size='2x' /> );
    }
    if(props.name.includes("YE")){
        return (<FontAwesomeIcon icon={faCog} size='2x' /> );
    }
    if(props.name.includes("YS")){
        return (<FontAwesomeIcon icon={faChild} size='2x' /> );
    }
    if(props.name.includes("PX")){
        return (<FontAwesomeIcon icon={faBrain} size='2x' /> );
    }
    if(props.name.includes("GC")){
        return (<FontAwesomeIcon icon={faGlobe} size='2x' /> );
    }
    if(props.name.includes("SI")){
        return (<FontAwesomeIcon icon={faDollarSign} size='2x' /> );
    }
    if(props.name.includes("HM")){
        return (<FontAwesomeIcon icon={faFileInvoiceDollar} size='2x' /> );
    }
    if(props.name.includes("BC")){
        return (<FontAwesomeIcon icon={faBusinessTime} size='2x' /> );
    }
    if(props.name.includes("LX")){
        return (<FontAwesomeIcon icon={faUserShield} size='2x' /> );
    }
    if(props.name.includes("AX")){
        return (<FontAwesomeIcon icon={faBuilding} size='2x' /> );
    }
    if(props.name.includes("EM")){
        return (<FontAwesomeIcon icon={faMusic} size='2x' /> );
    }
    else{
        return (<FontAwesomeIcon icon={faBookOpen} size='2x' /> );
    }


    

}


export default Header;