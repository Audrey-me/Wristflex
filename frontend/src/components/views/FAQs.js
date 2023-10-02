import React from 'react'
import Navbar from '../partials/Navbar';
import Footer from "../partials/Footer"
import { Accordion, Card } from "react-bootstrap";


export default function Profile() {
  return (
    <>
    <Navbar/>
        <section className='faq-container'>
            <h3>FREQUENTLY ASKED QUESTIONS</h3>
            <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                TAB 1
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0">
                                <Card.Body>This is first tab body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
              </Accordion>          
        </section>
        <Footer/>
        </>
  )
};




  

