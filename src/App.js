import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './assets/img/vilaapp-logo.png'

//
// import icons ------>
//

import facebook from './assets/img/facebook.svg';
import instagram from './assets/img/instagram.svg';
import twitter from './assets/img/twitter.svg';
import linkedin from './assets/img/linkedin.svg';


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
            <h1><b>we are working on something</b> very interesting!</h1>
            <h3><b>be notified.</b> we just need your email address.</h3>
            <div className="email-input-container">
              <div className="bg-fff">
                  <input
                  className="input-email"
                  placeholder="Email"
                  name="email"
                  autocomplete="off"
                  
                  />

                <div className="btn-container">
                  <span>Send</span>
                </div>
              </div>
            </div>

          </div>

          <div className="socila-container">
            <ul>
              <li> <a href="#" ><img src={linkedin} alt="vilaapp linkedin" height="25" width="25" /></a></li>
              <li> <a href="#" ><img src={facebook} alt="vilaapp facebook" height="25" width="25" /></a></li>
              <li> <a href="#" ><img src={instagram} alt="vilaapp instagram" height="25" width="25" /></a></li>
              <li> <a href="#" ><img src={twitter} alt="vilaapp twitter" height="25" width="25" /></a></li>
    
            </ul>
          </div>
       </div>
      );
   }
 }
  
 export default Index;