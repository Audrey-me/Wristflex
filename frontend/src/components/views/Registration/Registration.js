import React, { useEffect, useState } from 'react'
import "../../css/style1.css"
export default function Registration({ inner, setInner }) {
  const [transit, setTransit] = useState("false")
  // const [change, setChange] = useState("login-contanier")



  return (
    <>
      <div style={{display:"none"}}  className='login-contanier1  '>
        {/* LOGIN PART */}
        {inner == "false" && <div className={"login-contanier"}>

          <h2 className='create-account'>Login</h2>

          <form method="post" action="/account/login" id="customer_login" className="customer_login" auto-charset="UTF-8" >
            <div className="field">
              <input type="email" name="customer[email]" id="CustomerEmail" autoComplete="email" autoCorrect="off" autoCapitalize="off" placeholder="Email" />
            </div>
            <div className="field">
              <input type="password" name="customer[email]" id="CustomerEmail" autoComplete="email" autoCorrect="off" autoCapitalize="off" placeholder="Password" />

            </div>

            <p onClick={() => setTransit("true")} data-action="ishi-panel" aria-controls="#ishi-recover-panel" className="forgot">Forgot your password?</p>
            <button className="signin-btn flash-button">Sign in</button>
            <p onClick={() => setInner("true")} className='forgot' style={{ textAlign: "center" }} data-action="ishi-panel" aria-controls="#ishi-register-panel"> Create account</p>
          </form>
        </div>}
        {/* REGISTER */}
        {inner == "true" &&
          <div className='register-subcontanier'>
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
              <p onClick={() => setInner("false")} className='forgot' style={{textAlign :"center"}} data-action="ishi-panel" aria-controls="#ishi-register-panel"> Already have an account?</p>
            </form>
          </div>}

        {/* RESET PASSWORD */}
        {transit == "true" && <div className='reset-password'>
          <h2 className='create-account'>Reset your Password</h2>
          <p style={{ marginTop: "20px" }}>We will send you an email to reset your password</p>
          <form method="post" action="/account/login" id="customer_login" className="customer_login" auto-charset="UTF-8" >
            <div className="field">
              <input type="email" name="customer[email]" id="CustomerEmail" autoComplete="email" autoCorrect="off" autoCapitalize="off" placeholder="Email" />
            </div>
            <button style={{ marginTop: "30px" }} className="signin-btn flash-button">Submit</button>
            <p onClick={() => setTransit("false")} className='forgot' style={{ textAlign: "center" }} data-action="ishi-panel" aria-controls="#ishi-register-panel"> Cancel</p>
          </form>
        </div>}
      </div>



    </>
  )
}
