import React from 'react';
import Footer from "../../partials/Footer";
import { Link } from "react-router-dom";
import Navbar from '../../partials/Navbar';
import "../../css/style1.css"


const Login = () => {
 
    return (
      <div >
        <Navbar/>
         <div className="login_contanier">
            <div className ="login_form_container">
             <h2 className="create-account">Login</h2>
             <form method="post" action="/account/login" id="customer_login" className="customer_login" auto-charset="UTF-8" >
                <div className="field">
                  <input type="email" name="customer[email]" id="CustomerEmail" autoComplete="email" autoCorrect="off" autoCapitalize="off" placeholder="Email" /> </div>
                <div className="field">
                  <input type="password" name="customer[email]" id="CustomerEmail" autoComplete="email" autoCorrect="off" autoCapitalize="off" placeholder="Password" /></div>
                <Link to= "/registration/reset_password"><p className="forgot">Forgot your password?</p></Link> 
                <button className="signin-btn flash-button">Sign in</button>
                <Link to="/registration/register"><p className='forgot' style={{ textAlign: "center" }} data-action="ishi-panel" aria-controls="#ishi-register-panel"> Create account</p></Link>
             </form>
          </div>
        </div>
        <Footer/>
     </div>
    ) }

export default Login;
