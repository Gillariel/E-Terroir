import React, { Component } from 'react';
import {FormControl, InputGroup} from 'react-bootstrap';


export default class TextField extends Component{
    constructor(props){
        super(props);
        this.dataType = props.dataType;
        this.label = props.label;
        this.state = {
            value : ""};

    }
    render(){
        return(
            <div> 
            <input type={this.dataType} value = {this.state.value} placeholder = {this.label}  />
            </div>

        );
    }
}