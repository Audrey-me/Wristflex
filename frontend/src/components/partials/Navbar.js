import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../css/style1.css";




export default function Navbar({ setInner }) {
  const [bg, setBg] = useState(false);
  const [logo, setLogo] = useState(false);
  const [menu, setMenu] = useState("false");
  
  useEffect(() => {
    // window.addEventListener("click", () => {
    //   setInner("");
    // });
    window.addEventListener("scroll", () => {
      return window.scrollY > 150 ? setBg(true) : setBg(false);
    });
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setLogo(true) : setLogo(false);
    });
  });

  
  return (
    <>
    <header className="nav-header">
      <nav style={{paddingBottom:"10px"}}className={`${bg ? "is-sticky" : "top-nav"}`}>
        <div className="nav-header-logos">
          <Icon icon="charm:menu-hamburger" className="icons hamburger-icon "/>
          <h1 className={`${logo ? "nav-logo black-logo" : "nav-logo white-logo"}`}>Wrist{" "}
            <span className="flex-logo">Flex</span>
          </h1>
        </div>
      
        <ul className="nav-header-ul">
          <Link className ="nav_link" to="/"><li>Home</li></Link>
          <Link className ="nav_link" to="/"><li>About Us</li></Link>
          <Link className ="nav_link" to="/collections"><li>Collections</li></Link>
        </ul>
      
       <div className="nav-header-icons">
          <Icon icon="bi:cart"className="icons"/>
          <Icon icon="bi:person-fill" className="person-icon icons" />
       </div>
       
      </nav>
      <ul className="dropdown-list userinfo arrow">
                <li>
                  <a className="arrow_link" href="/dashboard/profile">
                    <span className ="pull-left">Profile</span> <i className="pull-right fa fa-user"></i>
                  </a>
                </li>                
                <li>
                  <a className="arrow_link" href="/admin/logout/">
                    <span className="pull-left">Sign Out</span> <i className="pull-right fa fa-sign-out"></i>
                  </a>
                </li>
            </ul>
    </header>
     
    
      </>
  )}