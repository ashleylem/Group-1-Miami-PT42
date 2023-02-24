import React from "react";
import { useState, useContext } from "react";
import { Context } from "../../Store/appContext";
import { Link, redirect, useNavigate } from "react-router-dom";
import "./login.css";
import logo from "../../Images/logo.png";


/**
 * This function displays the Signin page for exisiting users.
 * Once a user is authenticated they will be redirected to their profile page.
 * @param {} none No input parameters
 * @returns {HTML} HTML for signin
 */

export const Signin = () => {
  const { actions } = useContext(Context);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const onSubmitClick = () => {
    actions.login(username, password);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/profile");
  };

  

  return (
    <>
    <div>
      <div className="main-signin container  py-5 h-100">
        <div className="sub-main-signin row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://images.pexels.com/photos/3353621/pexels-photo-3353621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="login form"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form className="form" onSubmit={handleSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <img
                          className="signin-logo fw-bold m-auto"
                          src={logo}
                        />
                      </div>
                      <h5 className="fw-normal  pb-3 ">
                        Sign in to your account
                      </h5>
                      <div className="container-username form-floating mb-4">
                        <input
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          type="text"
                          id="username-login"
                          className="form-control form-control-lg"
                          placeholder="Username"
                        ></input>
                         <label htmlFor="username-login" >
                            {" "}
                            Username
                          </label>
                      
                      </div>
                      <div className="container-password form-floating mb-4">
                        <input
                            className=" form-control form-control-lg"
                            value={password}
                            type="password"
                            id="password-login"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                          ></input>
                        
                          
                          <label htmlFor="password-login">
                            {" "}
                            Password
                          </label>
                          
                      </div>
                      <div className="d3def6">
                        <button
                          type="submit"
                          className="logInButton btn btn-block "
                          onClick={onSubmitClick}
                        >
                          Login
                        </button>
                      </div>
                      <Link to="/Signup">
                        <button className="signUpButton mb-5 pb-lg-2">
                          {" "}
                          Don't have an account? Sign up here!{" "}
                        </button>
                      </Link>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      

    </div>
    </>
  );
};
