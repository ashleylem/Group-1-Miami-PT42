import React, {useState} from "react";
import "../Hero.css";
import "./login.css";
import { useRef } from "react";


export function Login() {
    // const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');

    // const handleSubmit = (e) => {
    //     console.log(email);
    // };
    return(
        <>
            <div>
                <form className="form">
                    <label> Email</label>
                    {/* <input value='email' type='email' placeholder="Your Email"></input> */}
                    <input placeholder="Your Email"></input>
                    <label> Password</label>
                    <input placeholder = "*********"></input>
                    {/* <input value='password' type='password' placeholder="********"> password</input> */}
                    <button> Log In</button>
                </form>
                <button>Don't have an account? Sign up here!</button>
            </div> 
   </>)
}

