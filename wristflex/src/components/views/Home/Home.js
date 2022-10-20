import React,{useState} from 'react'
import Footer from "../../partials/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import Swipers from './Swipers';
import Navbar from '../../partials/Navbar';
import Registration  from '../Registration/Registration';  
import {ImQuotesLeft} from "react-icons/im";
export default function Home() {
  const[inner ,setInner] = useState("false")

  return (
    <>
    
   
{/* first session */}
<Navbar/>
<Registration inner={inner} setInner ={setInner}/>
    <Swipers/>
    
   
{/* about us */}
<section className="about padding-top-110 padding-bottom-90" id="about">
        <div className="container">
            <div className="row">
                <div className="col-md-5 about-img">
                <img className='about-us-image' src='images/about.webp' />
                  </div>
                <div className="col-md-7 padding-left-20">
                  <div className='space-contanier'>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus </p> 
    
    <p>el facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse 
    ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
    <button className='flash-button style-btn'>READ MORE</button>
                 </div>
                 </div>
        </div>
        </div>
  
    </section>

  {/* TIME SESSION */}
  <div className='time-contanier'>
  <div className ="parallax-list parallax-text-right">
        
        <div className="parallax-title">DEAL OF THE DAY</div>
        
        
        <div className ="parallax-subtitle">Big Discount</div>
        
        
        <div className="parallax-offer-title">Save Up To 50% Off On First Order From  Entire Store</div>
        
        
              <div className="countdowncontainer">
                  <div className="countdown">
                      <div className ="countdown-days data">150</div>
                      <div className ="text">Days</div>
                  </div>
                  <div className ="countdown">
                    <p style={{ fontSize:"30px", color:"#999999"}}>:</p>
                  </div>
                  <div className ="countdown">
                      <div className ="countdown-hours data">06</div>
                      <div className="text">Hours</div>
                  </div>
                  <div className ="countdown">
                    <p style={{ fontSize:"30px", color:"#999999"}}>:</p>
                  </div>
                  <div className ="countdown">
                      <div className ="countdown-minutes data">14</div>
                      <div className ="text">Mins</div>
                  </div>
                  <div className ="countdown">
                    <p style={{ fontSize:"30px", color:"#999999"}}>:</p>
                  </div>
                  <div className ="countdown">
                      <div className ="countdown-seconds data"> 24</div>
                      <div className ="text">Secs</div>
                  </div>
              </div>
              
        
        <div className ="parallax-offer style-btn">
          <a role="link" aria-disabled="true" className ="btn theme-button">
            SHOP NOW
          </a>
        </div>
        
      </div>
  </div>

  {/* Services session */}
  <div className='contanier services-contanier'>
      <div className='row services'>
      <div className ="col-md-7 padding-left-25 ">
        <div className='left-text left-content'>
          <h1 >Our Services</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus </p> 
     </div>
        <div className='row mini-services'>
          <div className=' col-md-6 col-sm-6 col-xs-6 flex-sub-items'>
            <div className='sub-image'>
              <img src='images/aeroplane.webp'/>
            </div>
            <div className='sub-text'>
              <h4>Worldwide Delivery</h4>
              <p>Lorem ipsum dolor sit amet consect.</p>
            </div>
          </div>

          <div className='col-md-6 col-sm-6 col-xs-6 flex-sub-items'>
          <div className='sub-image'>
              <img src='images/call-icon.webp'/>
            </div>
            <div className='sub-text'>
              <h4>24X7 Support</h4>
              <p>Lorem ipsum dolor sit amet consect.</p>
            </div>
          </div>

          <div className='col-md-6 col-sm-6 col-xs-6 flex-sub-items'>
          <div className='sub-image'>
              <img src='images/gift-icon.webp'/>
            </div>
            <div className='sub-text'>
            <h4>Gift Vouchers</h4>
              <p>Lorem ipsum dolor sit amet consect.</p>
            </div>
          </div>

          <div className='col-md-6 col-sm-6 col-xs-6 '>
           <div className='flex-sub-items'>
           <div className='sub-image'>
              <img src='images/savings-icon.webp'/>
            </div>
            <div className='sub-text'>
            <h4>Great Savings</h4>
              <p>Lorem ipsum dolor sit amet consect.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-5 flex-right ">
        <div className='right-content'>
          <img src="images/big sale.webp" className='big-sale-img'/>
        </div>
      </div>
      </div>
      
  </div>


{/* TESTIMONIAL */}
<section className='testimonial'>
<div className='testimonial-contanier monial-body'>
  <h1 style={{textAlign:"center"}}className='testimonial-header-text'>Our Clients Say</h1>
  <ImQuotesLeft style={{textAlign:"center", fontSize:"40px"}} />

  


  
</div>
</section>

      <Footer/>
    </>
  )
}

