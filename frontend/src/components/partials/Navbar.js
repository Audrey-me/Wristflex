import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../css/style1.css";
import { useAuthStore } from "../../store";
import { useNavigate } from "react-router-dom";
import {BiChevronDown} from 'react-icons/bi'

export default function Navbar({ setInner }) {
  const [bg, setBg] = useState(false);
  const [logo, setLogo] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const[isCartOpen, setIsCartOpen] = useState(false);
  const error = useAuthStore((state) => state.error);
  const logout = useAuthStore((state) => state.logout);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 150 ? setBg(true) : setBg(false);
    });
    if (error) {
      console.log(error);
    }

    // if (!user) {
    //   navigate("/registration/login");
    // }

  },[setBg, error,navigate, user ]);

function togleCart(){
  setIsCartOpen(!isCartOpen)
  }


  function toggleDropdown() {
   setIsOpen(!isOpen)
    }
    


  return (
    <>
      <header className="nav-header">
        <nav
          style={{ paddingBottom: "10px" }}
          className={`${bg ? "is-sticky" : "top-nav"}`}
        >
          <div className="nav-header-logos">
            <Icon
              icon="charm:menu-hamburger"
              className="icons hamburger-icon "
            />
            <h1 className={`${bg ? "nav-logo text-[black] black-logo" : "nav-logo white-logo"}`}>
                <a href="/">Wrist <span className="flex-logo">Flex</span></a>
            </h1>
          </div>

          <ul className="nav-header-ul">
            <Link className="nav_link" to="/about">
              <li>About Us</li>
            </Link>
            <Link className="nav_link" to="/collection">
              <li>Collections</li>
            </Link>
            <Link className="nav_link" to="/contact-us">
              <li>Contact Us</li>
            </Link>
          </ul>

          <div className="nav-header-icons">
            {user ? (
              <div className="flex items-center">
                <Icon icon="bi:cart" className="icons" />

                <div className="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      className={`${
                        bg
                          ? "inline-flex justify-center w-full rounded-md text-black text-[21px] px-4 py-2  text-sm font-medium focus:outline-none"
                          : "inline-flex justify-center items-center gap-[0.15rem] w-full rounded-md text-white px-4 py-2  text-sm font-medium focus:outline-none"
                      }`}
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      onClick={toggleDropdown}
                    >
                      Hello, {user.firstname}
                      <span><BiChevronDown size={20}/></span>
                      
                    </button>
                  </div>

                  {isCartOpen && (
                    <div className="dropdown-list userinfo arrow">
                      <p style={{padding: "0px 10px"}}>Cart is currently empty</p>
                    </div>
                  )}


                  {isOpen && (
                    <div
                      className="dropdown-list userinfo arrow"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex="-1"
                    >
                      <div className="py-1" role="none">
                        <Link
                          to="/"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Account
                        </Link>
                        <button
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 sign-out-btn"
                          onClick={logout}
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <>
              <div className="flex items-center">
                <Icon icon="bi:cart" className="icons" onClick={togleCart} />
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      className={`${
                        bg
                          ? "inline-flex justify-center w-full rounded-md text-black text-[21px] px-4 py-2  text-sm font-medium focus:outline-none"
                          : "inline-flex justify-center w-full rounded-md text-white px-4 py-2  text-sm font-medium focus:outline-none"
                      }`}
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      onClick={toggleDropdown}
                    >
                      <Icon icon="bi:person-fill" width={28} className="person-icon icons" />
                    </button>
                  </div>
                  
                  {isCartOpen && (
                    <div className="dropdown-list userinfo arrow">
                      <p style={{padding: "0px 10px"}}>Cart is currently empty</p>
                    </div>
                  )}



                  {isOpen && (
                    <div
                      className="dropdown-list userinfo arrow"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex="-1"
                    >
                      <div className="py-1" role="none">
                        <Link
                          to="/registration/login"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                         Log in
                        </Link>
                        <Link
                        to='/registration/register'
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          onClick={logout}
                    
                        >
                          Register
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

              </div>
                
              </>
            )}
          </div>
        </nav>
        {/* <ul className="dropdown-list">
          
        </ul> */}
      </header>
    </>
  );
}
