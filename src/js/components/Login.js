import React, { useState } from "react";
import "css/Login.styl";
import { credentials } from "../mockdata/data";
import { withRouter } from "react-router-dom";

function Login(props) {
  const [username, setusername] = useState(null);
  const [password, setpassword] = useState(null);
  const [error, seterror] = useState(null);

  const onUsernameBlur = (e) => setusername(e.target.value);

  const onPasswordBlur = (e) => setpassword(e.target.value);

  const onLoginClick = () => {
    if (!username) return seterror("Please enter username");

    if (!password) return seterror("Please enter password");

    const { username: usrname, passwd } = credentials;

    if (username === usrname && passwd === password) {
      localStorage.setItem("isAuthenticated", true);
      props.history.push("/home");
    } else {
      seterror("Incorrect credentials");
    }
  };

  return (
    <div class='grid grid-flow-row grid-rows-1 h-screen bg-gray-100'>
      <div
        class='login-container flex flex-col w-3/12 m-auto shadow-md bg-white'
        style={{ height: "210px" }}
      >
        <div class='flex'>
          <input
            placeholder='Username'
            class='placeholder-blue-300'
            name='username'
            onBlur={onUsernameBlur}
          />
        </div>
        <div class='flex'>
          <input
            placeholder='Password'
            class='placeholder-blue-300'
            name='passwd'
            onBlur={onPasswordBlur}
            type='password'
          />
        </div>
        <div class='flex justify-center align-center'>
          <button
            class='bg-blue-400 w-1/2 text-center rounded-full text-white'
            style={{ height: "45px" }}
            onClick={onLoginClick}
          >
            Login
          </button>
        </div>
        <span class='text-red-500 text-center'>{error}</span>
      </div>
    </div>
  );
}

export default withRouter(Login);
