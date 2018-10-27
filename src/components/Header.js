import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Grid,Row,Col} from 'react-bootstrap';

export default class Header extends Component{
    
    render(){
        return(
            <Grid>
                <Row>
                <Col md={8}><img src={require('../Logo_terroir.png')} style={{height:"80%", width:"60%"}} alt="Favicon"></img></Col>
                <Col md={2}><a><FontAwesomeIcon icon = "male"/></a></Col>
                <Col md={2}><a><FontAwesomeIcon icon = "shopping-cart"/></a></Col>
                </Row>
            
            </Grid>
        );
    }
}