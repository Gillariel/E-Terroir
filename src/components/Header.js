import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Grid,Row,Col} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from '../screens/Login';
import Home from '../screens/Home';



export default class Header extends Component{
    
    
    render(){
        return(
            <Router>
            <Grid>
              
                <Row>
                <Col md={8}><img src={require('../Logo_terroir.png')} style={{height:"80%", width:"60%"}} alt="Favicon"></img></Col>
                <Col md={2}><Link to='/Login'><FontAwesomeIcon icon = "male" /></Link></Col>
                <Col md={2}><Link to='/Panier'><FontAwesomeIcon icon = "shopping-cart"/></Link></Col>
                </Row>

               
                <Route path='/Login' Component={Login}/>
                </Grid>
             </Router>
                
              
               
                
            
            
        );
    }
}