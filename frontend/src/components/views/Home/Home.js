import React, { useState } from 'react'
import Footer from "../../partials/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import Swipers from './Swipers';
import Navbar from '../../partials/Navbar';
import Registration from '../Registration/Registration';
import { ImQuotesLeft } from "react-icons/im";
import 'animate.css';


export default function Home() {
  const [inner, setInner] = useState("false")
  const [active, setActive] = useState("slide1")
  return (
    <div className='site-contanier'>
      {/* first session */}
      <Navbar />
      <Registration inner={inner} setInner={setInner} />
      <Swipers />

      {/* about us */}
      <section className="about padding-top-110 padding-bottom-90" id="about">
        <div className="contanier-about">
          <div className="row">
            <div className="col-md-5 about-img">
              <img className='about-us-image' src='images/about.webp' />
            </div>
            <div className="col-md-7 padding-left-20">
              <div className='space-contanier'>
                <h2 className='section-header'>About Us</h2>
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
        <div className="parallax-list parallax-text-right">

          <div className="parallax-title">DEAL OF THE DAY</div>
          <div className="parallax-subtitle">Big Discount</div>
          <div className="parallax-offer-title">Save Up To 50% Off On First Order From  Entire Store</div>
          <div className="countdowncontainer">
            <div className="countdown">
              <div className="countdown-days data">150</div>
              <div className="text">Days</div>
            </div>
            <div className="countdown">
              <p style={{ fontSize: "30px", color: "#999999" }}>:</p>
            </div>
            <div className="countdown">
              <div className="countdown-hours data">06</div>
              <div className="text">Hours</div>
            </div>
            <div className="countdown">
              <p style={{ fontSize: "30px", color: "#999999" }}>:</p>
            </div>
            <div className="countdown">
              <div className="countdown-minutes data">14</div>
              <div className="text">Mins</div>
            </div>
            <div className="countdown">
              <p style={{ fontSize: "30px", color: "#999999" }}>:</p>
            </div>
            <div className="countdown">
              <div className="countdown-seconds data"> 24</div>
              <div className="text">Secs</div>
            </div>
          </div>


          <div className="parallax-offer style-btn">
            <a role="link" aria-disabled="true" className="btn theme-button">
              SHOP NOW
            </a>
          </div>

        </div>
      </div>

      {/* Services session */}
      <div className='services-contanier'>
        <div className='row services'>
          <div className="col-md-7 padding-left-25 ">
            <div className='left-text left-content'>
              <h2 className='section-header' >Our Services</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus </p>
            </div>
            <div className='row mini-services'>
              <div className=' col-md-6 col-sm-6 col-xs-6 flex-sub-items'>
                <div className='sub-image'>
                  <img src='images/aeroplane.webp' />
                </div>
                <div className='sub-text'>
                  <h4>Worldwide Delivery</h4>
                  <p>Lorem ipsum dolor sit amet consect.</p>
                </div>
              </div>

              <div className='col-md-6 col-sm-6 col-xs-6 flex-sub-items'>
                <div className='sub-image'>
                  <img src='images/call-icon.webp' />
                </div>
                <div className='sub-text'>
                  <h4>24X7 Support</h4>
                  <p>Lorem ipsum dolor sit amet consect.</p>
                </div>
              </div>

              <div className='col-md-6 col-sm-6 col-xs-6 flex-sub-items'>
                <div className='sub-image'>
                  <img src='images/gift-icon.webp' />
                </div>
                <div className='sub-text'>
                  <h4>Gift Vouchers</h4>
                  <p>Lorem ipsum dolor sit amet consect.</p>
                </div>
              </div>

              <div className='col-md-6 col-sm-6 col-xs-6 '>
                <div className='flex-sub-items'>
                  <div className='sub-image'>
                    <img src='images/savings-icon.webp' />
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
              <img src="images/big sale.webp" className='big-sale-img' />
            </div>
          </div>
        </div>

      </div>


      {/* TESTIMONIAL */}
      <section className='testimonial'>
        <div className='testimonial-contanier '>
          <h2 className='testimonial-header-text section-header'>Our Clients Say</h2>
          <div className='sliding-contanier'>
            <div className='sliding-stage'>

              <div className={`${active == "slide1" ? "owl-item  visible-item animate__animated animate__flipInX" : "owl-item invisible-item"
                }`}>
                <div className="ishitestimonials-container">
                  <div className="testimonial-img">
                    <img /></div>
                  <div className="user-container">
                    <span className="quote">
                      <ImQuotesLeft className='monial-icon' /></span>
                    <div className="user-info">
                      <div className="user-description">
                        <p>Sed vitae placerat velit, non semper nib Mae cenas pharetra risus vitae sodales vulputate.
                          Praesent accumsan, mi necorem Ipsumsus vitae sodales vulputate.
                          Praesent accumsan, mi necorem Ipsum </p></div>
                    </div>
                    <div className="desc">
                      <h3 className="user-name">David Owen</h3>
                      <div className="designation">
                        <h3 className="user-designation">Web Designer</h3></div>
                    </div>
                  </div>

                </div>
              </div>

              <div className={`${active == "slide2" ? "owl-item  visible-item animate__animated animate__flipInX" : "owl-item invisible-item"
                }`}>
                <div className="ishitestimonials-container">
                  <div className="testimonial-img">
                    <img /></div>
                  <div className="user-container">
                    <span className="quote">
                      <ImQuotesLeft className='monial-icon' /></span>
                    <div className="user-info">
                      <div className="user-description">
                        <p>Sed vitae placerat velit, non semper nib Mae cenas pharetra risus vitae sodales vulputate.
                          Praesent accumsan, mi necorem Ipsumsus vitae sodales vulputate.
                          Praesent accumsan, mi necorem Ipsum </p></div>
                    </div>
                    <div className="desc">
                      <h3 className="user-name">Luies Charls</h3>
                      <div className="designation">
                        <h3 className="user-designation">Quality Analyst</h3></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${active == "slide3"? "owl-item  visible-item animate__animated animate__flipInX" : "owl-item invisible-item"}`}>
                <div className="ishitestimonials-container">
                  <div className="testimonial-img">
                    <img /></div>
                  <div className="user-container">
                    <span className="quote">
                      <ImQuotesLeft className='monial-icon' /></span>
                    <div className="user-info">
                      <div className="user-description">
                        <p>Sed vitae placerat velit, non semper nib Mae cenas pharetra risus vitae sodales vulputate.
                          Praesent accumsan, mi necorem Ipsumsus vitae sodales vulputate.
                          Praesent accumsan, mi necorem Ipsum </p></div>
                    </div>
                    <div className="desc">
                      <h3 className="user-name">Dorris Morgan</h3>
                      <div className="designation">
                        <h3 className="user-designation">Freelance Developer</h3></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='owl-dots'>
            <button className='owl-dot' onClick={() => setActive('slide1')}>
              <img src='/images/testimonial1.webp' />
            </button>
            <button className='owl-dot' onClick={() => setActive('slide2')}>
              <img src='/images/testimonial2.png' />
            </button>
            <button className='owl-dot' onClick={() => setActive('slide3')}>
              <img src='/images/testimonial3.png' />
            </button>
          </div>
        </div>
      </section>
      <Footer/>
</div>
)}