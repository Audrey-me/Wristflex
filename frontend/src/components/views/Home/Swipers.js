import React,{useRef, useEffect,forwardRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import SwiperCore , {EffectFlip,Navigation, Pagination,Autoplay ,Scrollbar, A11y, Mousewheel, Keyboard } from 'swiper';
import 'animate.css';
import Navbar from '../../partials/Navbar';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

SwiperCore.use([EffectFlip, Navigation, Pagination,Autoplay,Mousewheel,Keyboard ]);

export default function Swipers() {


  

  return (
    <div>
      
      <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      
      mousewheel={true}
      keyboard={true}
      // onSwiper={(swiper) => console.log(swiper)}
    >
       <SwiperSlide> 
        
        <img style={{width:"100%"}} src='images/watchslider1.webp'  className="slide-image"/>
        
       <div className=' flash-contanier ' >
        <div className='flash-title'>Flash Sale</div>
        <h3 className='flash-heading'>The Perfect Gift!</h3>
        <div className='flash-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        <span className='break-class'>ed do eiusmod tempor</span> 
        <br /> <span className='break-class'>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</span></div>
        <Link to="/collection"><button className='flash-button'>SHOP NOW</button></Link>
       </div>
       
       </SwiperSlide>
      <SwiperSlide> 
      
        <img style={{width:"100%"}} src='images/watchslider2.webp'  className="slide-image"/>
      <div className=' flash-contanier2 ' >
        <div className='flash-title'>Watch Store</div>
        <h3 className='flash-heading'>The Perfect Gift!</h3>
        <div className='flash-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<span className='break-class'>ed do eiusmod tempor</span> <br /><span className='break-class'>incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam.</span></div>
        <button className='flash-button'>SHOP NOW</button>
       </div>
       
      </SwiperSlide>
    </Swiper>
    </div>
  )
}
