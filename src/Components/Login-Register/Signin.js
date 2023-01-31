import React from "react";
import { useState, useContext } from "react";
import { Context } from "../../Store/appContext";
import { Link } from "react-router-dom";
import "./login.css"

export const Signin = () => {
  const { actions } = useContext(Context)
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const onSubmitClick = () => {
    actions.login(username, password)

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username);
  }



  return (
    <div>
      <div className="main-signin">
        <div className="sub-main-signin">
          <form className="form" onSubmit={handleSubmit}>
            <div className="container-username">
              <label htmlFor="username" type="username" value={username}  className='username'> Username :</label>
              <input onChange={(e) => setUsername(e.target.value)} type="text" className='usernamePlaceHolder' placeholder=" Your Username"></input>
            </div>
            <div className="container-password">
              <label htmlFor="password" type="password" value={password}  className="password"> Password :</label>
              <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder=" *********"></input>
            </div>
            <button type="submit" className="logInButton" onClick={onSubmitClick} >Login</button>
            <Link to="/Signup">
              <button className="signUpButton"> Don't have an account? Sign up here! </button>
            </Link>
          </form>
        </div>
      </div >
    </div >
  );
};
