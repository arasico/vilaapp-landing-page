import React, { Component } from 'react';
import './App.css';
import Logo from './assets/img/vilaapp-logo.png'

//
// import icons ------>
//

import facebook from './assets/img/facebook.svg';
import instagram from './assets/img/instagram.svg';
import twitter from './assets/img/twitter.svg';
import linkedin from './assets/img/linkedin.svg';
import checked from './assets/img/checked.svg';


 class Index extends Component {
   constructor(props) {
     super(props);
     this.state = { val:'' }
     this.handelChange = this.handelChange.bind(this);
     this.callPost = this.callPost.bind(this);

   }


   handelChange = async(e) => {
    await this.setState({val: e.target.value}) 

   }

   callPost(){
      if(this.state.val !== '')
      {
      // alert("your email addres: " + this.state.val)
       document.getElementsByClassName("success-message-container")[0].style.display = "block"
       document.getElementsByClassName("email-input-container")[0].style.display = "none"
      }
      else
      {
        alert("Please insert your email Address!");
      }
   }


   render() { 
     return ( 
       <div className="bg-container">

          <div className="logo-container">
            <img src={Logo} className="logo-img-st" alt="vilaapp logo"   />
          </div> 

          <div className="email-container">
              <h1><b>we are working on something</b> very interesting!</h1>
              <h3><b>be notified.</b> we just need your email address.</h3>

              <div className="email-input-container slideOutDown">
                  <div className="bg-fff">
                      <input
                      className="input-email"
                      placeholder="Email"
                      name="email"
                      autocomplete="off"
                      onChange={this.handelChange}
                      value={this.state.val}
                      />
                      <div className="btn-container" onClick={this.callPost}>
                        <span>Send</span>
                      </div>
                  </div>
              </div>

                  <div className="success-message-container fadeInUp">
                    <img src={checked} height="110" width="110" alt="Check" className="img-check"/>
                    <p>Your email has been successfully.</p>
                    <p>Thanks, Soon we will have good news for you!</p>
                  </div>


          </div>

          <div className="socila-container">
              <ul>
                <li> <a href="https://www.linkedin.com/company/vilaapp/about/"  target="_blank" ><img src={linkedin} alt="vilaapp linkedin" height="25" width="25" /></a></li>
                <li> <a href="https://www.facebook.com/vilaapp.ir/"  target="_blank" ><img src={facebook} alt="vilaapp facebook" height="25" width="25" /></a></li>
                <li> <a href="https://www.instagram.com/VilaApp.ir/"  target="_blank" ><img src={instagram} alt="vilaapp instagram" height="25" width="25" /></a></li>
                <li> <a href="https://twitter.com/vilaapp"  target="_blank" ><img src={twitter} alt="vilaapp twitter" height="25" width="25" /></a></li>
      
              </ul>
          </div>
       </div>
      );
   }
 }
  
 export default Index;