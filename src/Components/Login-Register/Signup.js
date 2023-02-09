import React from "react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../Store/appContext";
import "./register.css"

export const Signup = () => {
  const { actions } = useContext(Context)
  const [name, setName] = useState()
  const [username, setusername] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  const navigate = useNavigate()

  const onSubmitClick = () => {
    actions.sign_up(name, email, password, username)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/signin');
  }

  return (
    <div className="main-signup">
      <div className="sub-main-signup">
        <form className="form" onSubmit={handleSubmit}>
          <div className="container-name">
            <label htmlFor="name" value={name}  className='name'> Name :</label>
            <div className="input-container">

            
            <input className='namePlaceHolder' onChange={(event) => setName(event.target.value)} placeholder=" Your Name"></input>
          </div></div>
          <div className="container-email">
<label htmlFor="email" value={email}  className='email'> Email :</label>
<div className="input-container">            
<input className='emailPlaceHolder'onChange={(event) => setEmail(event.target.value)} placeholder=" Your Email"></input>
          </div></div>
          <div className="container-username">
            <label htmlFor='username' value={username}>
              Username :
            </label>
            <div className="input-container">
            <input className='usernamePlaceHolder' placeholder="Your Username"
              onChange={(event) => {
                setusername(event.target.value)
              }}></input>
          </div></div>
          <div className="container-password">
            <label htmlFor="password" value={password} onChange={(event) => setPassword(event.target.value)} className="password"> Password :</label>
            <div className="input-container">

           
            <input placeholder=" *********"
              onChange={(event) => {
                setPassword(event.target.value)
              }}></input>
          </div></div>
          <button type="submit" className="signUpButton2" onClick={onSubmitClick} >Sign Up</button>
          <Link to="/Signin">
            <button className="logInButton2"> Already have an account? Login here! </button>
          </Link>
        </form>
      </div>
    </div>
  )
}