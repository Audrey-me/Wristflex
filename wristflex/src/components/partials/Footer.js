import React,{useState} from 'react'
import {IoLocationOutline,IoCallOutline} from "react-icons/io5";
import {AiOutlineMail,AiOutlineDown} from "react-icons/ai"
import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn} from "react-icons/fa";
import "../css/style1.css"

export default function Footer() {
    const [show,setShow] = useState("footer-sub-menus")

    const btnToggle =() =>{
        show === "footer-sub-menus"
        ? setShow("footer-sub-menus visible-bg")
        : setShow("footer-sub-menus")
    }
  return (
    <>
    <div className='footer-contanier'>
        <div className='footer-wrapper1 visible'>
            <div className='footer-item'>
                <h2 className='footer-item-header'>Store Information</h2>
                <ul className='footer-sub-menus child1'>
                    <li><span><IoLocationOutline style={{margin: "10px auto",verticalAlign: "middle"}}/></span>4005, silver business point India</li>
                    <li><span><IoCallOutline style={{margin: "10px auto",verticalAlign: "middle"}}/></span>9988776655</li>
                    <li><span><AiOutlineMail style={{margin: "10px auto",verticalAlign: "middle"}}/></span>info@example.com</li>
                    
                </ul>
            </div>

            <div className='footer-item'>
            <h2 className='footer-item-header'>Our Company</h2>
            <ul className='footer-sub-menus child2'>
                <li>Specials</li>
                <li>New Products</li>
                <li>Best Sellers</li>
                <li>Our Stores</li>
                <li>Blog</li>
            </ul>
            </div>

            <div className='footer-item'>
            <h2 className='footer-item-header'>Product</h2>
            <ul className='footer-sub-menus child3'>
               <li>Category</li>
               <li>About Us</li>
               <li>Contact Us</li>
               <li>FAQs</li>
               <li>Products</li>
            </ul>
            </div>
            <div className='footer-item child4'>
            <h2 style={{textAlign:"left"}} className='footer-item-header '>Newsletter</h2>
            <p>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempo.</p>
            <div className='footer-sub-buttons '>
                <input type='email' placeholder='Your email'/>
                <button>SUBSCRIBE</button>
            </div>
            <div className='footer-social-icons'>
                <ul>
               <li> <a href='#'><FaFacebookF className='social-icons'/></a></li>
               <li><a href='#'><FaTwitter className='social-icons'/></a></li>
               <li><a href='#'><FaInstagram className='social-icons'/></a></li>
               <li><a href='#'><FaLinkedinIn className='social-icons'/></a></li>
                </ul>
        
           </div>
          </div>
       </div>
        <div className='footer-trademark'>
            <div></div>
            <p style={{color:"#999999"}}>© 2022, Wristflex Sectioned Shopify Theme</p>
            </div>
   
   </div>



{/* MOBILE  */}
<div className='footer-mobile'>
    <div className='footer-mobile-items'>
            <div className='footer-item child4'>
            <h2 className='footer-item-header '>Newsletter</h2>
            <p>Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempo.</p>
            <div className='footer-mobile-buttons '>
                <input type='email' placeholder='Your email'/>
                <button>GO</button>
            </div>
            <div className='footer-mobile-socials'>
             <ul>
            <li> <a href='#'><FaFacebookF className='social-icons'/></a></li>
            <li><a href='#'><FaTwitter className='social-icons'/></a></li>
            <li><a href='#'><FaInstagram className='social-icons'/></a></li>
            <li><a href='#'><FaLinkedinIn className='social-icons'/></a></li>
             </ul>
             </div>
            </div>

            <div className='footer-other-items'>
           <div><h2>Store Information </h2> </div>
           <div><AiOutlineDown onClick={btnToggle}/></div>
           <ul className={show}>
         <li><span><IoLocationOutline style={{margin: "10px auto",verticalAlign: "middle"}}/></span>4005, silver business point India</li>
        <li><span><IoCallOutline style={{margin: "10px auto",verticalAlign: "middle"}}/></span>9988776655</li>
         <li><span><AiOutlineMail style={{margin: "10px auto",verticalAlign: "middle"}}/></span>info@example.com</li>
        </ul>
        </div>


        <div className='footer-other-items'>
         
           <div><h2> Our Company </h2> </div>
           <div ><AiOutlineDown onClick={btnToggle}/></div>
          
            <ul className= {show}>
                <li>Specials</li>
                <li>New Products</li>
                <li>Best Sellers</li>
                <li>Our Stores</li>
                <li>Blog</li>
            </ul>
            </div>

            <div className='footer-other-items'>
            <div><h2>Products </h2> </div>
           <div><AiOutlineDown onClick={btnToggle}/></div>
            <ul className={show}>
               <li>Category</li>
               <li>About Us</li>
               <li>Contact Us</li>
               <li>FAQs</li>
               <li>Products</li>
            </ul>
            </div>
            </div>
            <div style={{marginTop:"20px"}} className='footer-trademark'>
            <div></div>
            <p style={{color:"#999999", textAlign:"center",margin:"20px 0px 0px 0px"}}>© 2022, Wristflex Sectioned Shopify Theme</p>
            </div>
   </div>
 


    

       
 </>
  )
}
