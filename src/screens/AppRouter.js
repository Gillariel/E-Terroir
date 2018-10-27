import React from "react";
import { Switch, Route, BrowserRouter, Link, NavLink } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Grid,Row,Col, Nav} from 'react-bootstrap';




const AppRouter = () => {
  return(
    <BrowserRouter>
<div>
  
  <Grid>
          
            <Row>
            <Col md={8}><Link to='/'><img src={require('../Logo_terroir.png')} style={{height:"80%", width:"60%"}} alt="Favicon"></img></Link></Col>
            <Col md={2}><Link to='/login'><FontAwesomeIcon icon = "male" /></Link></Col>
            <Col md={2}><Link to='/Panier'><FontAwesomeIcon icon = "shopping-cart"/></Link></Col>
            </Row>
            <Nav /*onSelect={this.handleSelect}*/ >
                <NavLink exact to='/' class="navitem" eventKey={1}>Acceuil</NavLink>
                <a class="navitem" eventKey={2} href="#">Catalogue</a>
            </Nav>

           
            </Grid>
  <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      
    </Switch>
</div>
 

</BrowserRouter>


  );


}
   
     
    
  


export default AppRouter;

