import React from 'react'
import Navbar from '../../partials/Navbar'
import Footer from '../../partials/Footer'
import { Link } from 'react-router-dom'


export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  
  return (
    <>
    <Navbar/>
    <main className='profile-layout'>
      <section className='profile-container default-width'>
        <div className='account-title'>
            < Link to="/" className='account-go-back'><span> &larr; </span> Log out</Link>
        </div>
        <div class="row grid-profile-container">
            <div class="account_order_detail">
              <div class=" grid__item col-lg-8 col-md-7 col-xs-12 order_detail">
                <h2>Order history</h2>
                <p>You haven't placed any orders yet.</p>
              </div>

              <div class="grid__item col-lg-4 col-md-5 col-xs-12 my_account_detail">
                <h2>Account details</h2>
                <div className="wrap">
                  {/* dynamic content */}
                  {/* <p>{user.firstname}{user.lastname} <br/>
                    {user.user_email}
                  </p>  */}
                  {/* end of dynamic content */}
                  
                </div>
              </div>

            </div>
        </div>
      </section>
    </main>
    < Footer/>
    </>
  )
}
