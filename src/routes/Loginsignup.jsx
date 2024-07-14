import React from 'react'

import {user_icon} from '../assets/person.png'
import {email_icon} from '../assets/email.png'
import {password_icon} from '../assets/password.png'

 const Loginsignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name" />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email ID"/>
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password"/>
        </div>
      </div>
      <div className="forgotpassword">Lost Password?<span>Click here</span></div>
      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Log In</div>
      </div>
     </div>
  )
}

export default Loginsignup