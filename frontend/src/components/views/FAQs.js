import React from 'react'
import Navbar from '../partials/Navbar';
import Footer from "../partials/Footer"
import MyAccordion from '../partials/MyAccordion';

const FAQs = () => {
  return (
    <>
    <Navbar/>
        <section className='faq-container'>
            <h3>FREQUENTLY ASKED QUESTIONS</h3>
             <MyAccordion/>
        </section>
        <Footer/>
        </>
  )
};

export default FAQs;


  

