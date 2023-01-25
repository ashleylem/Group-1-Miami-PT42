import React, {useState} from 'react';
import "./register.css"
import {Link} from "react-router-dom"

export const Register = (props) =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name,setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return(
        <>
            <div className="main">
                <div className="sub-main">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="img">
                            <img src=""/>
                        </div>
                        <div className="container-name">
                            <label htmlFor="name"value={name} onChange={(e) => setName(e.target.value)} className='name'> Name :</label>
                        <input className= 'namePlaceHolder'placeholder=" Your Name"></input>
                        </div>
                        <div className="container-email">
                            <label htmlFor="email"value={email} onChange={(e) => setEmail(e.target.value)} className='email'> Email :</label>
                            {/* <input value='email' type='email' placeholder="Your Email"></input>  THIS IS NOT COMPATIBLE IN REACT*/} 
                        <input className= 'emailPlaceHolder'placeholder=" Your Email"></input>
                        </div>
                        <div className="container-password">
                            <label htmlFor="password"value={pass} onChange={(e) => setPass(e.target.value)} className="password"> Password :</label>
                            <input placeholder = " *********"></input>
                        </div>
                        <button className="signUpButton2"> Sign Up</button>
                        {/* <button onClick={() => props.onFormSwitch('login')} className="logInButton2">Already have an account? Login here!</button> */}
                        <Link to="/Login">
                             <button className="logInButton2"> Already have an account? Login here! </button>
                         </Link>
                    </form>
                </div>
            </div> 
   </>)
}
