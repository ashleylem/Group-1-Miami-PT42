import React from "react";
import { useState, useContext } from "react";
import { Context } from "../../Store/appContext";
import { Link, redirect, useNavigate } from "react-router-dom";
import "./login.css";

export const Signin = () => {
  const { actions } = useContext(Context);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

  const onSubmitClick = () => {
    actions.login(username, password);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/profile');
  };

  return (
    <div>
      <div className="main-signin">
        <div className="sub-main-signin">
          <form className="form" onSubmit={handleSubmit}>
            <div className="container-username">
              <label
                className="username"
              >
                {" "}
                Username :
              </label>
              <div className="input-container">
                <input 
                value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  className="usernamePlaceHolder"
                  placeholder=" Your Username"
                ></input>
              </div>
            </div>
            <div className="container-password">
              <label
                className="password"
              >
                {" "}
                Password :
              </label>
              <div className="input-container">
                <input value={password}
                type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=" *********"
                ></input>
              </div>
            </div>
            <button
              type="submit"
              className="logInButton"
              onClick={onSubmitClick}
            >
              Login
            </button>
            <Link to="/Signup">
              <button className="signUpButton">
                {" "}
                Don't have an account? Sign up here!{" "}
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
