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
        className={`${
          bg ? "header-top  visible-onscroll " : "header-top  site-header-inner visible-onscroll1 "}`}>
         <div className="row ">
          <div className="page-width">
            <div id="_desktop_logo" className="header-logo-section ">
              <h1 className={`${logo ? "logo1" : "logo-header"}`}>
                Wrist{" "}
                <span className="wrist-span">Flex</span></h1>
              </div>
                <div className="mega-menu">
                  <ul className={`${bg ? " top-menu onscroll-menu" : "top-menu noscroll-menu"}`}>
                    <Link to="/" ><li>Home</li></Link>
                    <Link to="/collection"><li>Collections</li></Link>
                    <Link to="#" ><li>About Us</li></Link>
                  </ul>
                 </div>
                  <div className="icon-header">
                    <Icon onClick={() => setInner("false")} icon="bi:cart" className={`${bg ? "icons onscroll-icon" : "icons noscroll-icon"}`} />
                    <Icon icon="bi:person-fill"className={`${bg ? "icons onscroll-icon" : "icons noscroll-icon"}`} />
                  </div>
                </div>
              </div>
            </div>
            
      {/* on SMALL DEVICE */}
      <div className="hamburger-menu display-none visible-onscroll ">
        <div onClick={() => setMenu("true")} className="hamburger-contanier">
          <Icon
            icon="charm:menu-hamburger"
            style={{ paddingLeft: "20px", fontSize: "50px" }}
            className="icons  "
          />
        </div>
        <div id="_desktop_logo" className="header-logo-section ">
          <h1 style={{ color: "#222222" }}>
            Wrist{" "}
            <span className="wrist-span">
              Flex
            </span>
          </h1>
        </div>

        <div className="icon-header">
          <Icon icon="bi:cart"  className="icons  onscroll-icons"/>
          <Icon
            onClick={() => setInner("false")}
            icon="bi:person-fill"
            className="icons  onscroll-icons"
          />
        </div>
      </div>

      <div
        className={`${
          menu == "false"
            ? "menu-contanier hidden-menu"
            : "menu-contanier visible-menu"
        }`}
      >
        <Icon style={{position:"absolute", top:"30", right:"10"}}
          onClick={() => setMenu("false")}
          icon="carbon:close"
          className="icons"/>
      
        <ul>
            <Link to="/" ><li>Home</li></Link>
            <Link to="/collection"> <li>Collections</li></Link>
            <Link to="/" ><li>About Us</li></Link>
        </ul>
      </div>
    </>
  );
}
