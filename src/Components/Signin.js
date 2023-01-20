import React from "react";
import { useState, useContext } from "react";
import { Context } from "../Store/appContext";
import { Link } from "react-router-dom";

export const Signin = () => {
  const{actions}=useContext(Context)
    const [username, setUsername]=useState()
    const [password, setPassword]=useState()

    const onSubmitClick=()=>{
      actions.login(username, password)
    }



    return(
    <div className="signin">
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">
          Username
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="username"
          onChange={(event)=>{
            setUsername(event.target.value)
          }}
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">
          Password
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="password"
          onChange={(event)=>{
            setPassword(event.target.value)
          }}
        />
      </div>
      <button type="submit" onClick={onSubmitClick} >Login</button>
      <button><Link to="/signup">Sign Up</Link></button>
    </div>

  );
};
