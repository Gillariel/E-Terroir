import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Header extends Component{
    
    render(){
        return(
            <div style={{display: 'inline-flex'}}>
            <img src={require('../Logo_terroir.png')} alt="Favicon"></img>
            <a><FontAwesomeIcon icon = "male"/></a>
            <a><FontAwesomeIcon icon = "shopping-cart"/></a>
            </div>
        );
    }
}