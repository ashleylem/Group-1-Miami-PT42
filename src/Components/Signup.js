import React from "react";
import { useState, useContext } from "react";

import { Context } from "../Store/appContext";

export const Signup=()=>{
    const{actions}=useContext(Context)
    const [name, setName]=useState()
    const [username, setusername]=useState()
    const [password, setPassword]=useState()
    const [email, setEmail]=useState()

    const onSubmitClick= ()=>{
        actions.sign_up(name, email, password, username)
    }

    return(
        <div className="signup">
    
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Full Name
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="full-name"
            onChange={(event)=>{
              setName(event.target.value)
            }}
          />
        </div>
        
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Email
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="email"
            onChange={(event)=>{
              setEmail(event.target.value)
            }}
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Username
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="username"
            onChange={(event)=>{
              setusername(event.target.value)
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
        <button type="submit" onClick={onSubmitClick} >Sign Up</button>
      
        </div>
    )
}