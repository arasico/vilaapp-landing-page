import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './assets/img/vilaapp-logo.png'

 class Index extends Component {
   constructor(props) {
     super(props);
     this.state = {  }
   }
   render() { 
     return ( 
       <div className="bg-container">

          <div className="logo-container">
            <img src={Logo} alt="vilaapp logo"   />
          </div> 
          <div className="email-container">

          </div>
       </div>
      );
   }
 }
  
 export default Index;