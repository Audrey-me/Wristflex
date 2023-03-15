import React from 'react'
import Navbar from '../../partials/Navbar'
import Footer from '../../partials/Footer'
const PasswordReset = () => {
  return (
    <>
    <Navbar/>
      <div className='reset-password login_contanier'>
          <h2 style={{ marginTop: "20px", textAlign:"center" }}className='create-account'>Reset your Password</h2>
          <p style={{ marginTop: "20px", textAlign:"center" }}>We will send you an email to reset your password</p>
          <form method="post" action="/account/login" id="customer_login" className="customer_login" auto-charset="UTF-8" >
            <div className="field">
              <input type="email" name="customer[email]" id="CustomerEmail" autoComplete="email" autoCorrect="off" autoCapitalize="off" placeholder="Email" />
            </div>
            <button style={{ marginTop: "30px",textAlign:"center" }} className="signin-btn flash-button">Submit</button>
            <p  className='forgot' style={{ textAlign: "center" }} ><a className="arrow_link" href="/registration/login"> Cancel</a></p>
          </form>
        </div>
        <Footer/>
        </>

  )
}

export default PasswordReset
