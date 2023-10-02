import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../css/style1.css";
import { useAuthStore } from "../../store";
import { useCartStore } from "../../store";
import { useNavigate } from "react-router-dom";
import { BiChevronDown, BiX } from "react-icons/bi";
import Cart from "./Cart";

export default function Navbar({ setInner }) {
  const [bg, setBg] = useState(false);
  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const error = useAuthStore((state) => state.error);
  const logout = useAuthStore((state) => state.logout);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const cartCount = useCartStore((state) => state.cartCount);

  useEffect(() => {
    const handleScroll = () => {
      if (!nav) {
        setBg(window.scrollY > 150);
      }
    };

    window.addEventListener("scroll", handleScroll);

    if (error) {
      console.log(error);
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [error, nav, navigate, user]);

  function toggleCart() {
    setIsCartOpen(!isCartOpen);
  }

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function NavDropdown() {
    setNav(!nav);
    setBg(false);
  }

  function handleClickOutside(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
      setIsCartOpen(false);
      setNav(false);
    }
  }

  return (
    <>
      <header className="nav-header">
        <nav
          style={{ paddingBottom: "10px" }}
          className={`${
            bg ? "is-sticky" : "top-nav"
          } md:flex md:items-center md:justify-between md:px-4`}
        >
          <div className="nav-header-logos flex items-center">
            <Icon
              icon="charm:menu-hamburger"
              className={`icons hamburger-icon lg:hidden transition-transform ${
                nav ? "transform-x-0" : "transform-x-full"
              }`}
              onClick={NavDropdown}
            />
            <h1
              className={`${
                bg ? "nav-logo text-black black-logo" : "nav-logo white-logo"
              } text-[18px] lg:text-2xl font-semibold`}
            >
              <Link to="/">
                Wrist <span className="flex-logo">Flex</span>
              </Link>
            </h1>
          </div>
          {/* Mobile Navigation */}
          <div
            className={`${
              nav ? "translate-x-0" : "-translate-x-full"
            } lg:hidden fixed inset-y-0 text-center pt-[8rem] z-10 left-0 w-64 bg-white`}
          >
            <ul className="lg:flex space-x-4">
              {nav && (
                // Close icon inside the mobile navigation menu
                <li>
                  <BiX
                    className="close-icon text-3xl text-black"
                    onClick={NavDropdown}
                  />
                </li>
              )}
              <a className="nav_link" href="/about">
                <li>About Us</li>
              </a>
              <a className="nav_link" href='/collection'>
                <li>Collections</li>
              </a>
              <a className="nav_link"  href="/contact-us">
                <li>Contact Us</li>
              </a>
            </ul>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="lg:flex nav-header-ul space-x-4">
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
          </div>

          <div className="nav-header-icons">
            {user ? (
              <div className="flex items-center">
                <div className="relative  ">
                  <Icon icon="bi:cart" className="icons" onClick={toggleCart} />
                  <span className="absolute -top-2 text-white w-6 h-6 border-none border font-bold text-center py-[0.12rem] items-center left-5 text-[12px] bg-red-600 rounded-full">
                    {cartCount}
                  </span>
                </div>
                <div
                  className="relative inline-block text-left"
                  ref={dropdownRef}
                >
                  <div className="">
                    <button
                      type="button"
                      className={`${
                        bg
                          ? "md:inline-flex hidden justify-center w-full rounded-md text-black text-[21px] px-4 py-2  text-sm font-medium focus:outline-none"
                          : "md:inline-flex hidden justify-center items-center gap-[0.15rem] w-full rounded-md text-white px-4 py-2  text-sm font-medium focus:outline-none"
                      }`}
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      onClick={toggleDropdown}
                    >
                      Hello, {user.user_name}
                      <span>
                        <BiChevronDown size={20} />
                      </span>
                    </button>
                    <button
                      type="button"
                      className={`${
                        bg
                          ? "inline-flex lg:hidden justify-center w-full rounded-md text-black text-[21px] px-4 py-2  text-sm font-medium focus:outline-none"
                          : "inline-flex lg:hidden justify-center items-center gap-[0.15rem] w-full rounded-md text-white px-4 py-2  text-sm font-medium focus:outline-none"
                      }`}
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      onClick={toggleDropdown}
                    >
                      <Icon
                        icon="bi:person-fill"
                        width={28}
                        className="person-icon text-green-700 icons"
                      />
                    </button>
                  </div>

                  {isCartOpen && (
                    <div className="dropdown-list  userinfo arrow">
                      <Cart />
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

                          to="/account"
                 

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
                  <div className="relative">
                    <Icon
                      icon="bi:cart"
                      className="icons"
                      onClick={toggleCart}
                    />
                    <span className="absolute -top-2 text-white w-6 h-6 border-none border font-bold text-center py-[0.12rem] items-center left-5 text-[12px] bg-red-600 rounded-full">
                      {cartCount}
                    </span>
                  </div>
                  <div
                    className="relative inline-block text-left"
                    ref={dropdownRef}
                  >
                    <div className="">
                      <button
                        type="button"
                        className={`${
                          bg
                            ? "inline-flex   justify-center w-full rounded-md text-black text-[21px] px-4 py-2  text-sm font-medium focus:outline-none"
                            : "inline-flex   justify-center w-full rounded-md text-white px-4 py-2  text-sm font-medium focus:outline-none"
                        }`}
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onClick={toggleDropdown}
                      >
                        <Icon
                          icon="bi:person-fill"
                          width={28}
                          className="person-icon icons"
                        />
                      </button>
                    </div>

                    {isCartOpen && (
                      <div className="dropdown-list userinfo arrow">
                        <Cart />
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
                            to="/registration/register"
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
