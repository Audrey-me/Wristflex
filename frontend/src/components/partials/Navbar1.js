import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../css/style1.css";

export default function Navbar({ setInner }) {
  const [bg, setBg] = useState(false);
  const [logo, setLogo] = useState(false);
  const [menu, setMenu] = useState("false");
  useEffect(() => {
    window.addEventListener("click", () => {

    });
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setLogo(true) : setLogo(false);
    });
  });

  return (
    <>
      <div 
        className={`${bg ? "nav-other bacg-scroll" : "nav-other bacg-white visible-menu-padding "
          }`}
      >
        <div className="row ">
          <div className="page-width">
            <div id="_desktop_logo" className="header-logo-section ">
              <h1 className={`${logo ? "logo1" : "logo-header"}`}>
                <span style={{ color: "#232323" }}>Wrist{" "}
                </span>
                <span
                  style={{
                    color: "#a67a68",
                    fontFamily: "cursive",
                    marginLeft: "-15px",
                  }}
                >
                  Flex
                </span>
              </h1>
            </div>
            <div className="mega-menu">
              <ul className={`${bg ? " top-menu onscroll-menu" : "top-menu noscroll-menu "
                }`}>
                <Link to="/" ><li>Home</li></Link>
                <Link to="/collection"> <li>Collections</li></Link>
                <Link to="/" ><li>About Us</li></Link>
               </ul>
            </div>

            <div className="icon-header">
              <Icon
                onClick={() => setInner("false")}
                icon="bi:cart"
                className={`${bg ? "icons icon-nav1 onscroll-icon " : "icons icon-nav1 noscroll-icon"
                  }`} />

              <Icon icon="bi:person-fill" className={`${bg ? "icons icon-nav1 onscroll-icon" : "icons icon-nav1 noscroll-icon"
                }`} />
            </div>
          </div>
        </div>
      </div>
      
      {/* on SMALL DEVICE */}
      <div className="hamburger-menu visible-onscroll  ">
        <div onClick={() => setMenu("true")} className="hamburger-contanier">
          <Icon icon="charm:menu-hamburger"style={{ paddingLeft: "20px", fontSize: "50px" }}className="icons  "/>
        </div>
        <div id="_desktop_logo" className="header-logo-section ">
          <h1 style={{ color: "#222222" }}>Wrist{" "}
            <span className="span-flex">Flex</span>
          </h1>
        </div>

        <div className="icon-header">
          <Icon icon="bi:cart" className="icons  onscroll-icons" />
          <Icon onClick={() => setInner("false")} icon="bi:person-fill" className="icons  onscroll-icons"/>
        </div>
      </div>

      <div className={`${menu === "false"? "menu-contanier hidden-menu": "menu-contanier visible-menu"}`}>
        <Icon className="close-icon icons"onClick={() => setMenu("false")}icon="carbon:close"/>
          <ul>
            <Link className="navigation-link" to="/" ><li>Home</li></Link>
            <Link className="navigation-link" to="/collection"> <li>Collections</li></Link>
            <Link className="navigation-link" to="/about" ><li>About Us</li></Link>
            <div className="home-btn login-button"> <Link to="/registration/login" >LOGIN</Link></div>
            <div className="home-btn signup-button"><Link className="signup-link" to="/registration/signup" >SIGNUP</Link></div>
         </ul>
      </div>
    </>
  );
}

