import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMale } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header';
import Menu from './components/Menu';
import {PageHeader} from 'react-bootstrap';


library.add(faMale)
library.add(faShoppingCart)

class App extends Component {

  
  render() {
   
    return (
      <div className="App">
       {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
    </header>*/}
    <PageHeader>
      <Header></Header>
    </PageHeader>
      
      <Menu></Menu>
      </div>
    );
  }
}

export default App;
