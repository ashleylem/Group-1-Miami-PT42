// import React, {useState} from "react";
// import "../Hero/Hero.css";
// import "./login.css";
// import { useRef } from "react";
// import { Register } from "./Register";
// import {Link} from "react-router-dom";
// // import { Context } from "../Store/appContext";

// // export const Login = () => {
// //     const{actions}=useContext(Context)
// //       const [username, setUsername]=useState()
// //       const [password, setPassword]=useState()

// //       const onSubmitClick=()=>{
// //         actions.login(username, password)
// //       }
// //           const handleSubmit = (e) => {
// //         e.preventDefault();
// //         console.log(email);}

// export const Login=(props)=> {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     };
//     return(
//         <>
//             <div className="main">
//                 <div className="sub-main">
//                     <form className="form" onSubmit={handleSubmit}>
//                         <div className="img">
//                             <img src=""/>
//                         </div>
//                         <div className="container-username">
//                             <label htmlFor="username" type="username" value={username} onChange={(e) => setUsername(e.target.value)} className='username'> Username :</label>
//                         <input className= 'usernamePlaceHolder' placeholder=" Your Username"></input>
//                         </div>
//                         <div className="container-password">
//                             <label htmlFor="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="password"> Password :</label>
//                             <input placeholder = " *********"></input>
//                         </div>
//                         <button onChange={(event)=>{
//             setPassword(event.target.value)
//           }} onClick={onSubmitClick} className="logInButton"> Log In</button>
//                         {/* <button onClick={() => props.onFormSwitch('register')} className="signUpButton">Don't have an account? Sign up here!</button> */}

//                          <Link to="/Register">
//                              <button className="signUpButton"> Don't have an account? Sign up here! </button>
//                          </Link>
//                     </form>
//                 </div>
//             </div>
//    </>)
// }
