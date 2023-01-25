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
      <div className="main">
        <div className="sub-main">
          <form className="form" onSubmit={handleSubmit}>
            <div className="container-username">
              <label htmlFor="username" type="username" value={username} onChange={(e) => setUsername(e.target.value)} className='username'> Username :</label>
              <input className='usernamePlaceHolder' placeholder=" Your Username"></input>
            </div>
            <div className="container-password">
              <label htmlFor="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="password"> Password :</label>
              <input placeholder=" *********"></input>
            </div>
            <button type="submit" onChange={(event) => {
              setPassword(event.target.value)
            }} className="logInButton" onClick={onSubmitClick} >Login</button>
            <Link to="/Signup">
              <button className="signUpButton"> Don't have an account? Sign up here! </button>
            </Link>
          </form>
        </div>
      </div >
    </div >
  );
};