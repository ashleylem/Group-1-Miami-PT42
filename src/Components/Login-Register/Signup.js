import React from "react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../Store/appContext";
import "./register.css";
import logo from "../../Images/logo.png";

/**
 * This function displays the Signup page for new users.
 * After they have signed up they will be redirected to the signin page.
 * @param {} none No input parameters
 * @returns {HTML} HTML for signup
 */

export const Signup = () => {
  const { actions } = useContext(Context);
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const onSubmitClick = () => {
    actions.sign_up(name, email, password, username);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/signin");
  };

  return (
    <div>
      <div className="main-signin container  py-5 h-100">
        <div className="sub-main-signin row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card">
              <div class="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://images.pexels.com/photos/3353621/pexels-photo-3353621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="login form"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div class="card-body p-4 p-lg-5 text-black">
                    <form className="form" onSubmit={handleSubmit}>
                      <div class="d-flex align-items-center mb-3 pb-1">
                        <img
                          className="signin-logo fw-bold m-auto"
                          src={logo}
                        />
                      </div>
                      <h5 className="fw-normal  pb-3 ">
                        Sign up for an account
                      </h5>
                      <div className="form-floating mb-4">
                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          id="name-signup"
                          className="form-control form-control-lg"
                          placeholder="Name"
                        ></input>
                        <label for="name-signup"> Name</label>
                      </div>
                      <div className="form-floating mb-4">
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="text"
                          id="email-signup"
                          className="form-control form-control-lg"
                          placeholder="Email"
                        ></input>
                        <label for="email-signup"> Email</label>
                      </div>
                      <div className="container-username form-floating mb-4">
                        <input
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          type="text"
                          id="username-signup"
                          className="form-control form-control-lg"
                          placeholder="Username"
                        ></input>
                        <label for="username-signup"> Username</label>
                      </div>
                      <div className="container-password form-floating mb-4">
                        <input
                          className=" form-control form-control-lg"
                          value={password}
                          type="password"
                          id="password-signup"
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                        ></input>

                        <label for="password-signup"> Password</label>
                      </div>
                      <div className="d3def6">
                        <button
                          type="submit"
                          className="logInButton btn btn-block "
                          onClick={onSubmitClick}
                        >
                          Sign Up
                        </button>
                      </div>
                      <Link to="/Signin">
                       <button className="logInButton2"> Already have an account? Login here! </button>
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

    
  );
};
