import React, {useState} from "react";
import "../Hero.css";
import "./login.css";
import { useRef } from "react";
import { Register } from "./Register";
import {Link} from "react-router-dom"


export const Login=(props)=> {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };
    return(
        <>
            <div className="main">
                <div className="sub-main">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="img">
                            <img src=""/>
                        </div>
                        <div className="container-email">
                            <label htmlFor="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='email'> Email :</label>
                        <input className= 'emailPlaceHolder'placeholder=" Your Email"></input>
                        </div>
                        <div className="container-password">
                            <label htmlFor="password" type="password" value={pass} onChange={(e) => setPass(e.target.value)} className="password"> Password :</label>
                            <input placeholder = " *********"></input>
                        </div>
                        <button className="logInButton"> Log In</button>
                        <button onClick={() => props.onFormSwitch('register')} className="signUpButton">Don't have an account? Sign up here!</button>
                        
                            
                                {/* <Link to="/Register">
                                    <button > <h1>Click here test</h1> </button>
                                </Link>
                             */}
                        
                    </form>
                </div>
            </div> 
   </>)
}

