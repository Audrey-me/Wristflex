import React from 'react'
import Navbar from "../partials/Navbar"
import Footer from "../partials/Footer"
import Brands from '../partials/Brands'
// import {IoLocationOutline,IoCallOutline} from "react-icons/io5";
import {AiOutlineTwitter,AiOutlineLinkedin, AiOutlineInstagram} from "react-icons/ai"

export default function ContactUs() {
  return (
    <>
    <Navbar/>
    <div className='contactus-contanier'>
      <h1 className='contact-header about-header'>Contact</h1>
      <div className='about-us-info'>
              <div className='about-first-right alternate-rte col-lg-6 col-md-12 col-sm-12' >
                  <h3 className='contact-heading'>GET IN TOUCH</h3>
                  <p className='contact-sub-heading'>We'd Love to Hear From You, Let's Get In Touch!</p>
                  
                  <div className="list-contact-info col-xs-12">
                    <div className="contact_info_item col-xs-6">
                      <h3>Address</h3>
                      <p>4005, silver business point</p>
                      <p>India</p>
                    </div>
                    
                    
                    <div className="contact_info_item col-xs-6">
                      <h3>Phone</h3>
                      <p>9988776655</p>
                    </div>
                    
                    
                    <div className="contact_info_item col-xs-6">
                      <h3>Email</h3>
                      <p>
                        <a href="mailto:kosisochukwuakaeze@gmail.com">
                          info@example.com
                        </a> 
                      </p>
                    </div>
           
          
                    <div className="contact_info_item col-xs-6">
                      <h3>Additional Information</h3>
                      <p>We are open: Monday - Saturday, 10AM - 5PM and closed on sunday sorry for that.</p>
                    </div>
                      
        
                    <div className="contact_info_item col-xs-12">
                    <h3>Social</h3>
                    <ul className="social-icons">
                      
                      <li className="twitter">
                        <a className="social-icons__link"  title="Sectioned Shopify Theme on Facebook" target="_blank">
                            <AiOutlineTwitter className='social-icon'/>
                        </a>
                      </li>
                      
                      <li className="instagram">
                        <a className="social-icons__link"  title="Sectioned Shopify Theme on Instagram" target="_blank">
                          <AiOutlineInstagram className='social-icon'/>
                        </a>
                      </li>

                      <li className="linkedin">
                        <a className="social-icons__link" title="Sectioned Shopify Theme on Instagram" target="_blank">
                          <AiOutlineLinkedin className='social-icon'/>
                        </a>
                      </li>
                      
                    </ul>
                    </div> 
                    
                  </div>
              </div>
              <div className='about-first-left' style={{order:"0"}}><img alt='wristwatch1' className='contact-image' src='images/contact-image.jpeg'/></div>
      </div>
      <div className='google-map-section'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.046772803084!2d3.387269774771933!3d6.51576432325366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d24c04d3e75%3A0x7347f1a6be13e004!2sUniversity%20of%20Lagos!5e0!3m2!1sen!2sng!4v1678716585211!5m2!1sen!2sng" title='university of lagos maps'  style={{ width:"600", height:"450", border:"0" }}></iframe>
      </div>
      
    </div>
    <Brands/>
    <Footer/>
    </>
  )}

