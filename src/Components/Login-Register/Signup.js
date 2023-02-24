import React , { useRef } from "react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../Store/appContext";
import "./register.css";
import logo from "../../Images/logo.png";

/**
 * This function displays the Signup page for new users.
 * After they have signed up they will be redirected to the signin page.
 * @param {} none No input parameters
 * @returns {HTML} HTML for signup
 */

export const Signup = () => {
  const { actions } = useContext(Context);
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const onSubmitClick = () => {
    actions.sign_up(name, email, password, username);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/signin");
  };


  const send_code = useRef();
  // Handle international prefixes, format phone input field
    // Uses intl-tel-input library
    const phoneInputField = document.querySelector("#phone_number");
    // const phoneInput = window.intlTelInput(phoneInputField, {
    //   // https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
    //   preferredCountries: ["us", "co", "in", "de"],
    //   utilsScript:
    //     "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.13/build/js/utils.js",
    // });

    function selectedChannel() {
      const checked = "input[name='channel']:checked";
      return document.querySelector(checked).value;
    }

    const phoneInputDiv = document.getElementById("phone-input");
    const emailInputDiv = document.getElementById("email-input");

    function showEmailInput() {
      phoneInputDiv.style.display = "none";
      emailInputDiv.style.display = "block";
    }

    function showPhoneNumberInput() {
      phoneInputDiv.style.display = "block";
      emailInputDiv.style.display = "none";
    }

    const statusSpan = document.getElementById("status");
    const modalStatusSpan = document.getElementById("modal-status");

    function showModalStatus(message, options = {color: "gray"}) {
      modalStatusSpan.style.color = options.color;
      modalStatusSpan.textContent = message;
    }

    function showError(error) {
      console.error(error);
      showStatus(error, { color: "#a94442" });
    }

    function showStatus(message, options = { color: "gray" }) {
      statusSpan.style.color = options.color;
      statusSpan.textContent = message;
    }

    function clearStatus() {
      statusSpan.textContent = "";
      modalStatusSpan.textContent = "";
    }

    const modal = document.getElementById("otp-modal");
    var to;

    async function sendOtp(event) {
      event.preventDefault();

      const locale = document.getElementById("select-language").value;
      const channel = selectedChannel();

      let statusMessage =
        channel == "call" ? "☎️ calling..." : "Sending verification code...";
      showStatus(statusMessage);

      to =
        channel == "email"
          ? document.getElementById("email").value
          : phoneInput.getNumber();

      const data = new URLSearchParams();
      data.append("channel", channel);
      data.append("locale", locale);
      data.append("to", to);

      try {
        const response = await fetch("./start-verify", {
          method: "POST",
          body: data,
        });

        const json = await response.json();

        if (response.status == 429) {
          clearStatus();
          modal.style.display = "block";
          showModalStatus(
            `You have attempted to verify '${to}' too many times. If you received a code, enter it in the form. Otherwise, please wait 10 minutes and try again.`,
            {color: "#a94442"}
          );
        } else if (response.status >= 400) {
          clearStatus();
          showError(json.error);
        } else {
          modal.style.display = "block";
          if (json.success) {
            showStatus(`Sent verification code to ${to}`);
          } else {
            showError(json.error);
          }
        }
      } catch (error) {
        console.error(error);
        showError(`Something went wrong while sending code to ${to}.`);
      }
    }

    // document
    //   .getElementById("send_code")
    //   .addEventListener("submit", (event) => sendOtp(event));

      //add event listener using ref

    async function checkOtp(event) {
      event.preventDefault();
      let code = document.getElementById("code");
      showModalStatus(`Checking code ${code.value}...`);

      const data = new URLSearchParams();
      data.append("to", to);
      data.append("code", code.value);

      try {
        const response = await fetch("./check-verify", {
          method: "POST",
          body: data,
        });

        const json = await response.json();

        if (json.success) {
          showModalStatus("Verification success!", {color: "green"});
          code.value = "";
        } else {
          showModalStatus("Incorrect token!", {color: "#a94442"});
          code.value = "";
        }
      } catch (error) {
        console.error(error);
        showModalStatus("Something went wrong!");
        code.value = "";
      }
    }

    // let checkCode = document.getElementById("check-code");
    // checkCode.addEventListener("submit", (event) => checkOtp(event));

    // let closeButton = document.getElementById("close");
    // closeButton.addEventListener("click", () => {
    //   clearStatus();
    //   modal.style.display = "none";
    // });

    window.onclick = function (event) {
      switch (event.target.id) {
        case "otp-modal":
          modal.style.display = "none";
          clearStatus();
          break;
        case "channel-email":
          showEmailInput();
          break;
        case "channel-sms":
          showPhoneNumberInput();
          break;
        case "channel-whatsapp":
          showPhoneNumberInput();
          break;
        case "channel-call":
          showPhoneNumberInput();
          break;
      }
    };

    // end twilio code

  return (
    <div>
      <div className="main-signin container  py-5 h-100">
        <div className="sub-main-signin row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card">
              <div class="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://images.pexels.com/photos/3353621/pexels-photo-3353621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="login form"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div class="card-body p-4 p-lg-5 text-black">
                    <form className="form" onSubmit={handleSubmit}>
                      <div class="d-flex align-items-center mb-3 pb-1">
                        <img
                          className="signin-logo fw-bold m-auto"
                          src={logo}
                        />
                      </div>
                      <h5 className="fw-normal  pb-3 ">
                        Sign up for an account
                      </h5>
                      <div className="form-floating mb-4">
                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          id="name-signup"
                          className="form-control form-control-lg"
                          placeholder="Name"
                        ></input>
                        <label for="name-signup"> Name</label>
                      </div>
                      <div className="form-floating mb-4">
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="text"
                          id="email-signup"
                          className="form-control form-control-lg"
                          placeholder="Email"
                        ></input>
                        <label for="email-signup"> Email</label>
                      </div>
                      <div className="container-username form-floating mb-4">
                        <input
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          type="text"
                          id="username-signup"
                          className="form-control form-control-lg"
                          placeholder="Username"
                        ></input>
                        <label for="username-signup"> Username</label>
                      </div>
                      <div className="container-password form-floating mb-4">
                        <input
                          className=" form-control form-control-lg"
                          value={password}
                          type="password"
                          id="password-signup"
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                        ></input>

                        <label for="password-signup"> Password</label>
                      </div>
                      <div className="d3def6">
                        <button
                          type="submit"
                          className="logInButton btn btn-block "
                          onClick={onSubmitClick}
                        >
                          Sign Up
                        </button>
                      </div>
                      <Link to="/Signin">
                       <button className="logInButton2"> Already have an account? Login here! </button>
                         </Link>
                    </form>

                     {/* start of new code */}

      <form ref={send_code} onSubmit={(event) => sendOtp(event)}>
            <p>Select your channel:</p>
            <div>
              <input
                type="radio"
                name="channel"
                id="channel-sms"
                value="sms"
                defaultChecked
              />
              <label htmlFor="channel-sms">SMS</label>
            </div>
            <div>
              <input
                type="radio"
                name="channel"
                id="channel-whatsapp"
                value="whatsapp"
              />
          
              <label htmlFor="channel-email">Email</label>
            </div>
            <div id="phone-input">
              <p>Enter your phone number:</p>
              <input type="tel" id="phone_number" />
            </div>
            <div id="email-input">
              <p>Enter your email:</p>
              <input type="email" id="email" />
            </div>
            <input type="submit" value="Get a one-time passcode" />
            {/* <span id="status" className="status"></span> */}
          </form>
      {/* end new code */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
};
