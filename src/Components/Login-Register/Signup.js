import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Store/appContext";
import "./register.css"

export const Signup = () => {
  const { actions } = useContext(Context)
  const [name, setName] = useState()
  const [username, setusername] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()

  const onSubmitClick = () => {
    actions.sign_up(name, email, password, username)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
  }

  return (
    <div className="main">
      <div className="sub-main">
        <form className="form" onSubmit={handleSubmit}>
          <div className="container-name">
            <label htmlFor="name" value={name} onChange={(event) => setName(event.target.value)} className='name'> Name :</label>
            <input className='namePlaceHolder' placeholder=" Your Name"></input>
          </div>
          <div className="container-email">
            <label htmlFor="email" value={email} onChange={(event) => setEmail(event.target.value)} className='email'> Email :</label>
            <input className='emailPlaceHolder' placeholder=" Your Email"></input>
          </div>
          <div className="container-username">
            <label htmlFor='username' value={username}>
              Username :
            </label>
            <input className='usernamePlaceHolder' placeholder="Your Username"
              onChange={(event) => {
                setusername(event.target.value)
              }}></input>
          </div>
          <div className="container-password">
            <label htmlFor="password" value={password} onChange={(event) => setPassword(event.target.value)} className="password"> Password :</label>
            <input placeholder=" *********"
              onChange={(event) => {
                setPassword(event.target.value)
              }}></input>
          </div>
          <button type="submit" className="signUpButton2" onClick={onSubmitClick} >Sign Up</button>
          <Link to="/Signin">
            <button className="logInButton2"> Already have an account? Login here! </button>
          </Link>
        </form>
      </div>
    </div>
  )
}