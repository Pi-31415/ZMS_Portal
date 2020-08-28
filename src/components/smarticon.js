import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
    return (
        <div>
        <FontAwesomeIcon icon={faCalendarAlt} size='2x' /> 
        <h1>{props.name}</h1>
        </div>);
}
export default Header;