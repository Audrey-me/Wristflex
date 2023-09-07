import React, { useState, useEffect } from "react";
import Footer from "../../partials/Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../../partials/Navbar";
import "../../css/style1.css";
import { useAuthStore } from "../../../store";
import Spinner from "./Spinner";


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const login = useAuthStore((state) => state.login);
  const error = useAuthStore((state) => state.error);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const isLoading = useAuthStore((state) => state.isLoading);
  const user = JSON.parse(localStorage.getItem("user"))

  const navigate = useNavigate();
  const {email, password} = formData

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  

    if (user) {
      toast.success("Welcome")
      navigate("/");
    } 
    
    if (!user) {
      toast.error("User doesn't exist")
    } 

  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  if (isLoading) {
    return <Spinner />
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <div>
      <Navbar />
      <div className="login_contanier">
        <div className="login_form_container">
          <h2 className="create-account">Login</h2>
          <form
            onSubmit={handleSubmit}
            id="customer_login"
            className="customer_login"
           
          >
            <div className="field">
              <input
                type="email"
                value={email}
                name="email"
                onChange={onChange}
                placeholder="Email"
              />
            </div>
            <div className="field">
              <input
                type="password"
                value={password}
                name="password"
                onChange={onChange}
                placeholder="Password"
              />
            </div>
            <Link to="/registration/reset_password">
              <p className="forgot">Forgot your password?</p>
            </Link>
            <button type="submit" className="signin-btn flash-button">Sign in</button>
         
            <Link to="/registration/register">
              <p
                className="forgot"
                style={{ textAlign: "center" }}
              >
                Create account
              </p>
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
