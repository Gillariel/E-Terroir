import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Navbar, Nav, NavbarBrand, NavItem, PageHeader, NavDropdown, MenuItem} from 'react-bootstrap';

export default class Header extends Component{

   constructor(props) {
       super(props);
       this.state = {
           collapse: false,
           isWideEnough: false,
       };
    }

    render(){
        return(

            <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
                <div className={"container-fluid"}>
                    <a className={"navbar-brand"} href="#">
                        <img src={require('../Logo_terroir.png')} />
                    </a>
                    <button className={"navbar-toggler navbar-toggler-right"} type="button" data-toggle=".collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className={"navbar-toggler-icon"}></span>
                    </button>
                    <div className={"collapse navbar-collapse"} id="navbarSupportedContent">
                        <ul className={"navbar-nav mr-auto"}>
                            <li className={"nav-item active"}>
                                <a className={"nav-link"} href="#">Home
                                    <span className={"sr-only"}>(current)</span>
                                </a>
                            </li>
                            <li className={"nav-item"}>
                                <a className={"nav-link"} href="#">Link</a>
                            </li>
                        </ul>
                    </div>
                </div>
           </nav>

        );
    }
}
