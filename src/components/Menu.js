import React, { Component } from 'react';
import './Menu.css';
import {Navbar, Nav, NavItem, Media} from 'react-bootstrap';

export default class Menu extends Component{
    handleSelect(selectedKey) {
        /*alert(`selected ${selectedKey}`);*/
      }
    render(){
        return(
              
                  <Nav onSelect={this.handleSelect} >
                    <NavItem eventKey={1} href="#">Acceuil</NavItem>
                    <NavItem eventKey={2} href="#">Catalogue</NavItem>
                </Nav>
                
               
            
            
             
                
           
        );
    }
}