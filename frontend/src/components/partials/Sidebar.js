import React from 'react'

const Sidebar = () => {
  return (
    <section className="sidenav">
    <div className="sidenav-contanier">
        <div className="sidenav-header">
            <h2 className="hozul-text">hozul</h2>
            <a  className="close-icon"><img  src="/images/partials/close-icon.png" alt="close-cta"/> </a>
        </div>
        <div className="mobile-group-list">
              <a href="#"><div><h2 className="mobile-header all-category">About Us</h2></div></a>
              <a href="#"><div><h2 className="mobile-header all-category">Collections</h2></div></a>
              <a href="#"><div><h2 className="mobile-header all-category">Blog Post</h2></div></a>

              <div className="tab">
                <div className="tab-header" data-target="watch">
                    <div><h2 className="mobile-header">Watch</h2></div>
                    <div className="caret-close"> {">"} </div>
                </div>
                <div className="tab-content" id="watch">
                    <ul>
                    <a href="#"><li>All categories</li></a>
                    <a href="#"><li>Fashion</li></a>
                    <a href="#"><li>Electronics</li></a>
                    <a href="#"><li>Home & Office</li></a>
                    <a href="#"><li>Bath & Beauty</li></a>
                    </ul>
                </div>
              </div>

        </div>
        <hr></hr>
        <div className="mobile-signin">
            <button className ="mobile-btn signin">SIGN IN</button>
            <button className ="mobile-btn signup">SIGN UP</button>
        </div>
        
        <div className="account" >
            <h2 className ="account-title">MY ACCOUNT</h2>
            <div className="account-header">
                <img src="/images/partials/sidebar-profile.png"/>
                <h2>My profile</h2>
            </div>
            <div className="account-header">
                <img src="/images/partials/sidebar-order.png"/>
                <h2>My orders</h2>
            </div>
            <div className="account-header">
                <img src="/images/partials/sidebar-like.png"/>
                <h2>Saved items</h2>
            </div>
            <div className="account-header">
                <img src="/images/partials/sidebar-sell.png"/>
                <h2>Sell on Wristflex</h2>
            </div>
            <div className="account-header">
                <img src="/images/partials/sidebar-voucher.png"/>
                <h2>Vouchers/Gift cards</h2>
            </div>
        </div>
        <hr ></hr>
        <div className="account-header signout">
            <img src="/images/partials/sidebar-signout.png"/>
            <h2>Sign out</h2>
        </div>
        
</div>

</section>
)
}

export default Sidebar;



 