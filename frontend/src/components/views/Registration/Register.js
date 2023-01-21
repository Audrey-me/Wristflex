import React from "react";
import "../../css/style1.css"
import Footer from "../../partials/Footer";
import { Link } from "react-router-dom";
import Navbar1 from "../../partials/Navbar1";



const Register = () => {
  
  return (
    <>
      <Navbar1 />
      <div className="login_contanier">
            <div className="login_form_container">
            <h2 className='create-account'>Create Account</h2>
            <form method="post" action="/account/login" id="customer_login" className="customer_login" auto-charset="UTF-8" >
              <div className="field">
                <input type="text" name="customer[firstname]" id="CustomerEmail" autoComplete="email" autoCorrect="off" autoCapitalize="off" placeholder="First name" />
              </div>

              <div className="field">
                <input type="text" name="customer[lastname]" id="CustomerEmail" autoComplete="email" autoCorrect="off" autoCapitalize="off" placeholder="Last name" />
              </div>

              <div className="field">
                <input type="email" name="customer[email]" id="CustomerEmail" autoComplete="email" autoCorrect="off" autoCapitalize="off" placeholder="Email" />
              </div>
              <div className="field">
                <input type="password" name="customer[password]" id="CustomerEmail" autoComplete="email" autoCorrect="off" autoCapitalize="off" placeholder="Password" />
              </div>
              <button className="signin-btn flash-button">Create</button>
              <p className='forgot' style={{textAlign :"center"}} data-action="ishi-panel" aria-controls="#ishi-register-panel"> Already have an account?</p>
            </form>
          </div>
        </div>
      <Footer />
    </>
  );
};

export default Register;