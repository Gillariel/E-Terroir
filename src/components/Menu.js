import React, { Component } from 'react';
import './Menu.css';
import {Navbar, Nav, NavItem, Media} from 'react-bootstrap';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import Home from '../screens/Home';

export default class Menu extends Component{
    handleSelect(selectedKey) {
        /*alert(`selected ${selectedKey}`);*/
      }
    render(){
        return(
            <BrowserRouter>
            <div>

           

                 <Nav onSelect={this.handleSelect} >
                    <NavLink exact to="/" class="navitem" eventKey={1}>Acceuil</NavLink>
                    <NavLink class="navitem" eventKey={2} href="#">Catalogue</NavLink>
                </Nav>

                <div className="content">
                    <Route path="/" component={Home} />
                    
                </div>
                </div>
            </BrowserRouter>
              
                 
                
               
            
            
             
                
           
        );
    }
}