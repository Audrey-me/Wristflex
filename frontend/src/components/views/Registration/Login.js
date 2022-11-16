import React,{useState} from 'react';
import Footer from "../../partials/Footer";
import { Link } from "react-router-dom";
import Navbar1 from "../../partials/Navbar1";
import "../../css/style1.css"
import ForgetPassword from '../Modals/ForgetPassword';

const Login = () => {
 const[display,setDisplay] = useState("false")
    return (
      <div>
        <Navbar1/>
         <div className="login_contanier">
            <div className ="login_form_container">
             <h2 className='create-account'>Login</h2>
             <form method="post" action="/account/login" id="customer_login" className="customer_login" auto-charset="UTF-8" >
                <div className="field">
                  <input type="email" name="customer[email]" id="CustomerEmail" autoComplete="email" autoCorrect="off" autoCapitalize="off" placeholder="Email" /> </div>
                <div className="field">
                  <input type="password" name="customer[email]" id="CustomerEmail" autoComplete="email" autoCorrect="off" autoCapitalize="off" placeholder="Password" /></div>
                <p onClick={()=>setDisplay("true")} className="forgot">Forgot your password?</p>
                <button className="signin-btn flash-button">Sign in</button>
                <p className='forgot' style={{ textAlign: "center" }} data-action="ishi-panel" aria-controls="#ishi-register-panel"> Create account</p>
             </form>
          </div>
        </div>

     <ForgetPassword display={display} setDisplay={setDisplay}/>
        <Footer/>
     </div>
    ) }

   
  
export default Login;