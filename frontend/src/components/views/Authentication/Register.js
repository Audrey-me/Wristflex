import React, { useState, useEffect,useRef } from "react";
import "../../css/style1.css";
import Footer from "../../partials/Footer";
import Navbar from "../../partials/Navbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../../store";
import Spinner from "./Spinner";
import emailjs from '@emailjs/browser';

const Register = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    lastname: '',
    user_email: '',
    password: '',

  }
  );

  const {user_name, lastname, user_email, password} = formData;
  // const [lastname, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const signup = useAuthStore((state) => state.signup);
  const error = useAuthStore((state) => state.error);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const isLoading = useAuthStore((state) => state.isLoading);
  const user = JSON.parse(localStorage.getItem("user"))

// the emails
  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();
    signup(user_name, lastname, user_email, password);
    emailjs.sendForm('service_06cbrca', 'template_btlzstm', form.current, 'xeG7hE7PKWwAYN6FS')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
      }
    
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error("User already exists!");
    }

    if (isLoggedIn || user) {
      toast.success("Logged in successfully!");
      navigate("/");
    }
   
  });

  if (isLoading) {
    return <Spinner />
  }


  return (
    <div>
      <Navbar />
      <div className="login_contanier">
        <div className="login_form_container">
          <h2 className="create-account">Create Account</h2>
          <form
           ref={form} 
            onSubmit={sendEmail}
            id="customer_login"
            className="customer_login"
          >
            <div className="field">
              <input
                type="text"
                value={user_name}
                onChange={onChange}
                name="user_name"
                placeholder="First name"
              />
            </div>

            <div className="field">
              <input
                type="text"
                value={lastname}
                onChange={onChange}
                name="lastname"
                placeholder="Last name"
              />
            </div>

            <div className="field">
              <input
                type="email"
                value={user_email}
                onChange={onChange}
                name="user_email"
                placeholder="Email"
              />
            </div>
            <div className="field">
              <input
                type="password"
                value={password}
                onChange={onChange}
                name="password"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="signin-btn flash-button">Create</button>
            <Link to="/registration/login">
              <p
                className="forgot"
                style={{ textAlign: "center" }}
                data-action="ishi-panel"
                aria-controls="#ishi-register-panel"
              >
                Already have an account?
              </p>
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
