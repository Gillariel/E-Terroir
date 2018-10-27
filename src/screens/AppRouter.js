import React from "react";
import { Switch, Route, BrowserRouter, Link, NavLink } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Grid,Row,Col, Nav} from 'react-bootstrap';
import Catalogue from "./Catalogue";
import Header from '../components/Header';




const AppRouter = () => {
  return(
    <BrowserRouter>

        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/catalogue' component={Catalogue}/>
        </Switch>
        
    </BrowserRouter>
);


}






export default AppRouter;
