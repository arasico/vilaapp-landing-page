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

const baseurl = 'http://api.vilaapp.ir/api/v1/newsletter';



 class Index extends Component {
   constructor(props) {
     super(props);
     this.state = { val:'', errorMessage:'' }

     this.handelChange = this.handelChange.bind(this);
     this.callPost = this.callPost.bind(this);

   }


   handelChange = async(e) => {
    await this.setState({val: e.target.value}) 

   }

   fetchingData = async(email) => {
     console.log(email) 
    const data={
      method:'POST',
      headers:{
          Accept:'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email:email 
      }),
      
    }
    

   function PostEmail( data) {
    return fetch(baseurl,data)
      .then((response) => {
        response.json()
        console.log(response.status)
        return response.status
      })
      .then((responseJson) => { 
        return responseJson;
      })
      .catch((error) => {
        console.error(error); 
      });
  }

  return PostEmail(data)
 
   }



  

   successfully(){
    document.getElementsByClassName("success-message-container")[0].style.display = "block"
    document.getElementsByClassName("email-input-container")[0].style.display = "none"
   }


 
   callPost= async() => {
     
      if(this.state.val !== ''   )
      {
        this.setState({errorMessage: ''})
        var  statusCode = await this.fetchingData(this.state.val);
        
        if( statusCode === 200)
        this.successfully();
        else
        {
          this.setState({errorMessage: setError(statusCode)})
        }

      }
      else
      { 
        this.setState({errorMessage: setError(statusCode)})
      }

      function setError (code) {
        if(code===400)
          return 'Please insert Valid email Address!'
        else if (code === 200 )
          return  'Please insert Your email Address!'
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


            { this.state.errorMessage ? 
            ( 
              <div className="error-container fadeIn">
                <p>{this.state.errorMessage}</p>
              </div>
            ):(
              ''
            )}

              <div className="email-input-container slideOutDown">
                  <div className="bg-fff">
                      <input
                      className="input-email"
                      placeholder="Email"
                      name="email" 
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
                <li> <a href="https://www.linkedin.com/company/vilaapp/about/"  rel="noopener" ><img src={linkedin} alt="vilaapp linkedin" height="25" width="25" /></a></li>
                <li> <a href="https://www.facebook.com/vilaapp.ir/"  rel="noopener" ><img src={facebook} alt="vilaapp facebook" height="25" width="25" /></a></li>
                <li> <a href="https://www.instagram.com/VilaApp.ir/"  rel="noopener" ><img src={instagram} alt="vilaapp instagram" height="25" width="25" /></a></li>
                <li> <a href="https://twitter.com/vilaapp"  rel="noopener" ><img src={twitter} alt="vilaapp twitter" height="25" width="25" /></a></li>
      
              </ul>
          </div>
       </div>
      );
   }
 }
  
 export default Index;