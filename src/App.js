import React, { Component } from 'react';
//import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import Copyright from './Components/Copyright';
import Header from './Components/Header';
import Features from './Components/Features';
import Content from './Components/Content';

import './App.css';

class App extends Component {
  render() {
    return (

      <div id="page-wrapper">

       <Header />

       <Features />

       <Content />

       <Footer />
      
       <Copyright />

      </div>

    );
  }
}

export default App;
