import React from 'react'
import Navbar from "../partials/Navbar"
import Footer from "../partials/Footer"

export default function About() {
  return (
    <>
    <Navbar/>
    <section className='about-contanier'>
        <h1 className='about-header'>About Us</h1>
        <div className='about-us-info row'>
            <div className='about-first-left col-lg-6 col-md-12 col-sm-12'><img alt='wristwatch' src='images/watch.webp'/></div>
            <div className='about-first-right col-lg-6 col-md-12 col-sm-12'>
                <h3 className='about-right-heading'>We Have Everything You Need ?</h3>
                <p className='rte-p'>Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. 
                    Accessorize with a straw hat and you're ready for summer!
                </p>
                <h4 className='rte-p-h4'>Sample Unordered List</h4>
                <ul className='rte-p-ul'>
                    <li>Lorem ipsum, or lipsum as it is sometimes known</li>
                    <li>Dummy text used in laying out print, graphic or web designs</li>
                    <li>The passage is attributed to.</li>
                    <li>Proin molestie egestas orci ac suscipit risus posuere loremou.</li>
                    <li>Dummy text used in laying out print, graphic or web designs</li>
                </ul>
                <div className="about-btn">
                  <a href="/contact-us" className="btn">Contact Us
                    <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-arrow" viewBox="0 0 14 10">          
                    <svg x="0%" y="0%">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor"></path>
                    </svg> 
                    </svg>
                  </a>
                </div>
            </div>
        </div>

        <div className='our-services'>
            <h3 className='services-header'>Our Services.</h3>
            <div className='services-width'>
                
                <div className='services-block'>
                    <div><img alt='time' src='images/time.webp'/></div>
                    <h3 className='service-tittle'>FREE RESOURCES</h3>
                    <p className='service-desc'>Bring to the table win-win survival strategies to ensure proactive domination.</p>
                    
                </div>
                <div className='services-block'>
                    <div><img alt='fan' src='images/fan.webp'/></div>
                    <div className='service-tittle'>MULTI PURPOSE</div>
                    <p className='service-desc'>Bring to the table win-win survival strategies to ensure proactive domination.</p>
                </div>
                <div className='services-block'>
                    <div><img alt='bulb' src='images/bulb.png'/></div>
                    <div className='service-tittle'>FULLY RESPONSIVE</div>
                    <p className='service-desc'>Bring to the table win-win survival strategies to ensure proactive domination.</p>
                </div>
            </div>
            
        </div>

        <div className='about-us-info row'>
            <div className='about-first-right alternate-rte col-lg-6 col-md-12 col-sm-12'>
                <h3 className='about-right-heading'>We Have Everything You Need ?</h3>
                <p className='rte-p'>Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. 
                    Accessorize with a straw hat and you're ready for summer!
                </p>
                <h4 className='rte-p-h4'>Sample Unordered List</h4>
                <ul className='rte-p-ul'>
                    <li>Lorem ipsum, or lipsum as it is sometimes known</li>
                    <li>Dummy text used in laying out print, graphic or web designs</li>
                    <li>The passage is attributed to.</li>
                    <li>Proin molestie egestas orci ac suscipit risus posuere loremou.</li>
                    <li>Dummy text used in laying out print, graphic or web designs</li>
                </ul>
                <div className="about-btn">
                  <a href="/pages/contact" className="btn">Contact Us
                    <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-arrow" viewBox="0 0 14 10">          
                    <svg x="0%" y="0%">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor"></path>
                    </svg> 
                    </svg>
                  </a>
                </div>
            </div>
            <div className='about-first-left col-lg-6 col-md-12 col-sm-12'><img alt='wristwatch1' src='images/watch.webp'/></div>

        </div>

       
    </section>
    <Footer/>
    </>
  )
}
