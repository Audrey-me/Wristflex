import React from 'react'

export default function ForgetPassword({display,setDisplay}) {
  return (
   display == "true" && <div onClick={()=> setDisplay("false")} className='modal-contanier'>
      <div className='modal-body login_form_container'>
        <div className='modal-text'>
           {/* RESET PASSWORD */}
          <h2 className='create-account'>Reset your Password</h2>
          <p style={{ marginTop: "20px" }}>We will send you an email to reset your password</p>
          <form method="post" action="/account/login" id="customer_login" className="customer_login" auto-charset="UTF-8" >
            <div className="field">
              <input type="email" name="customer[email]" id="CustomerEmail" className='reset_field' autoComplete="email" autoCorrect="off" autoCapitalize="off" placeholder="Email" />
            </div>
            <button style={{ marginTop: "30px" }} className="forgot-button flash-button">Submit</button>
          </form>
      </div>
    </div>
  </div>
    
  )
}
