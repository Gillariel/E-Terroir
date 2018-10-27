import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMale } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header';
import Footer from './components/Footer';

import {PageHeader} from 'react-bootstrap';
import Home from './screens/Home';
import Login from './screens/Login';


library.add(faMale);
library.add(faShoppingCart);
library.add(faFacebookF);
library.add(faTwitter);

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
    <Login></Login>
    <Footer></Footer>
      
      
      </div>
    );
  }
}

export default App;
