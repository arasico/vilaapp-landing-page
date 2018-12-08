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
            <h1>we are working on something very interesting!</h1>
            <h3>be notified. we just need your email address.</h3>
            <div className="email-input-container">
              <div className="bg-fff">
                  <input
                  className="input-email"
                  placeholder="Email"
                  name="email"
                  
                  />

                <div className="btn-container">
                  <span>Send</span>
                </div>
              </div>
            </div>

          </div>

          <div className="socila-container">
            <ul>
              <li> a </li>
              <li> a </li>
              <li> a </li>
              <li> a </li>
            </ul>
          </div>
       </div>
      );
   }
 }
  
 export default Index;