import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMale } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header';
import Footer from './components/Footer';

import {PageHeader} from 'react-bootstrap';
import AppRouter from './screens/AppRouter';



library.add(faMale);
library.add(faShoppingCart);
library.add(faFacebookF);
library.add(faTwitter);

class App extends Component {


  render() {

    return (
        <div className="App">
            <Header/>
            <AppRouter/>
            <Footer/>
        </div>
    );
  }
}

export default App;
