import React,{useEffect, useState} from 'react'
import Footer from "../../partials/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import Swipers from './Swipers';
import Navbar from '../../partials/Navbar';
import { ImQuotesLeft } from "react-icons/im";
import Brands from '../../partials/Brands';
import CountdownDate from "../../partials/CountdownDate"
import Main from "../../Main"
import Sidebar from '../../partials/Sidebar';
import { Link } from "react-router-dom";
import FeaturedList from '../../partials/FeaturedList';
import NewArrivals from '../../partials/NewArrivals';
import BestSellers from '../../partials/BestSellers';




export default function Home(props) {

  useEffect(()=>{
    Main("/js/libs/jquery/jquery.min.js")
    Main("/js/base.js")
  
  })
  
  // const[inner ,setInner] = useState("false")
  const [active, setActive] = useState("slide1")
  const [activeOption, setActiveOption] = useState('Featured');
  const [loading, setLoading] = useState(true);

  const handleOptionClick = (option) => {
    setLoading(true)
    setActiveOption(option);
  };

  return (
    <div className='home-contanier' style={{position:"relative"}}>
    
   
  {/* First Session */}
  <Navbar/>
  {/* <Register inner={inner} setInner ={setInner}/> */}
  <Swipers/>
      
    
  {/* About Us */}
        <section className="about padding-top-110 padding-bottom-90" id="about">
          <div className="about-content">
            <div className="row about-sub-row">
              <div className="col-xl-6 col-lg-7 col-md-12 col-xs-12 about-img">
                <img className='about-us-image' src='images/about.webp' alt='about-us' />
              </div>
              <div className="about-image-content col-xl-6 col-lg-5 col-md-12 col-xs-12">
                <h1 className='testimonial-header'>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus </p>

                <p>el facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                < Link to="/about"><button className='flash-button style-btn'>READ MORE</button></Link>
              </div>
            </div>
          </div>

        </section>

      <Sidebar/>
      

  {/* Best Sellers */}
    <div className='seller-contanier'>
      <h1 className='testimonial-header'>Shop Best Sellers.</h1>
      <ul className='seller-list'>
        <li
          className={`seller-option ${activeOption === 'Featured' ? 'active' : ''}`}
          onClick={() => handleOptionClick('Featured')}>
          Featured
        </li>
        <li
          className={`seller-option ${activeOption === 'NewArrivals' ? 'active' : ''}`}
          onClick={() => handleOptionClick('NewArrivals')}
        >
          New Arrivals
        </li>
        <li
          className={`seller-option ${activeOption === 'BestSellers' ? 'active' : ''}`}
          onClick={() => handleOptionClick('BestSellers')}
        >
          Best Sellers
        </li>
      </ul>

      {/* Render the corresponding component based on the active option */}
      {activeOption === 'Featured' && <FeaturedList />}
      {activeOption === 'NewArrivals' && <NewArrivals />}
      {activeOption === 'BestSellers' && <BestSellers />}
    </div>

  {/* Time Session */}
  <div className='time-contanier'>
    <div className="parallax-list parallax-text-right">
      <div className="parallax-title">DEAL OF THE DAY</div>
      <div className="parallax-subtitle">Big Discount</div>
      <div className="parallax-offer-title">Save Up To 50% Off On First Order From  Entire Store</div>
      <div className="countdowncontainer"><CountdownDate/></div>
      <div className="parallax-offer style-btn">
        <a href='' className ="btn theme-button">SHOP NOW</a>
     </div>
   </div>
  </div>

  {/* Services Session */}
  <div className='services-contanier'>
      <div className='row services'>
        <div className ="col-sm-7 padding-left-25">
          <div className='left-text left-content'>
            <h1 >Our Services</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
          </div>
          <div className='row mini-services'>
          <div className=' col-md-6 col-sm-6 col-xs-6 flex-sub-items'>
            <div className='sub-image'><img src='images/aeroplane.webp' alt='services'/></div>
            <div className='sub-text'>
              <h4>Worldwide Delivery</h4>
              <p>Lorem ipsum dolor sit amet consect.</p>
            </div>
          </div>

          <div className='col-md-6 col-sm-6 col-xs-6 flex-sub-items'>
            <div className='sub-image'><img src='images/call-icon.webp' alt='services'/></div>
            <div className='sub-text'>
              <h4>24X7 Support</h4>
              <p>Lorem ipsum dolor sit amet consect.</p>
            </div>
          </div>

          <div className='col-md-6 col-sm-6 col-xs-6 flex-sub-items'>
          <div className='sub-image'>
              <img src='images/gift-icon.webp' alt='gifts'/>
            </div>
            <div className='sub-text'>
            <h4>Gift Vouchers</h4>
              <p>Lorem ipsum dolor sit amet consect.</p>
            </div>
          </div>

          <div className='col-md-6 col-sm-6 col-xs-6 '>
           <div className='flex-sub-items'>
             <div className='sub-image'><img src='images/savings-icon.webp' alt='savings'/></div>
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
          <img src="images/big sale.webp" className='big-sale-img' alt='sales'/>
        </div>
      </div>
      </div>
      
  </div>


{/* TESTIMONIAL */}
<section className='testimonial'>
<div className='testimonial-contanier monial-body'>
  <div className='testimonial-header'>
    <h1>Our Clients Say</h1>
    <div className='sliding-contanier'>
      <div className='sliding-stage'>
        <div className={`${active === "slide1" ? "owl-item  visible-item animate__animated animate__flipInX" : "owl-item invisible-item"}`}>
            <div className="ishitestimonials-container">
               <div className="user-container"><span className="quote"><ImQuotesLeft className='monial-icon' /></span>
                   <div className="user-info">
                     <div className="user-description">
                        <p>Sed vitae placerat velit, non semper nib Mae cenas pharetra risus vitae sodales vulputate.
                          Praesent accumsan, mi necorem Ipsumsus vitae sodales vulputate.
                          Praesent accumsan, mi necorem Ipsum </p>
                      </div>
                    </div>
                    <div className="desc">
                      <h3 className="user-name">David Owen</h3>
                      <div className="designation">
                        <h3 className="user-designation">Web Designer</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${active == "slide2" ? "owl-item  visible-item animate__animated animate__flipInX" : "owl-item invisible-item"}`}>
                <div className="ishitestimonials-container">
                  <div className="user-container"><span className="quote"><ImQuotesLeft className='monial-icon' /></span>
                    <div className="user-info">
                      <div className="user-description">
                        <p>Sed vitae placerat velit, non semper nib Mae cenas pharetra risus vitae sodales vulputate.
                          Praesent accumsan, mi necorem Ipsumsus vitae sodales vulputate.
                          Praesent accumsan, mi necorem Ipsum </p>
                      </div>
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
                  <div className="user-container">
                    <span className="quote"><ImQuotesLeft className='monial-icon' /></span>
                    <div className="user-info">
                      <div className="user-description">
                        <p>Sed vitae placerat velit, non semper nib Mae cenas pharetra risus vitae sodales vulputate.
                          Praesent accumsan, mi necorem Ipsumsus vitae sodales vulputate.
                          Praesent accumsan, mi necorem Ipsum </p>
                      </div>
                    </div>
                    <div className="desc">
                      <h3 className="user-name">Dorris Morgan</h3>
                      <div className="designation">
                        <h3 className="user-designation">Freelance Developer</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='owl-dots'>
            <button className='owl-dot' onClick={() => setActive('slide1')}><img src="images/testimonial1.webp" alt='testimonies' /></button>
            <button className='owl-dot' onClick={() => setActive('slide2')}><img src="images/testimonial2.png" alt='testimonies'/></button>
            <button className='owl-dot' onClick={() => setActive('slide3')}><img src="images/testimonial3.png" alt='testimonies'/></button>
         </div>
</div>
</div>
</section>

{/* Brand Contanier */}
<Brands/>

{/* Footer */}
<Footer/>
</div>
  )
}

