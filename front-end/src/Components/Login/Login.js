import React from "react";
import "./Login.css";
import Signups from "../../modals/Signups";
import {useDispatch } from "react-redux";
import { loggedIN } from "../../redux/loggedin-reducer";



const Login = () => {

  const dispatch = useDispatch()

  const uname = React.createRef();
  const passwd = React.createRef();
  const signup = (new Signups())

  const isAuth = () => {
    if (uname === "yassinos" && passwd === "123@58") {
      return true
    } else {
      return false
    }
  }
  const reRouteToTask = ()=> {
    (isAuth === true) ? alert('noyaaaaaah') : dispatch(loggedIN(true))
  }

  return (
    <>
      <div className="UsersBox">
        {/* Signin Box */}
        <div className="Signin-Box">
          <label className="labels" htmlFor="uname">
            Username
          </label>
          <input
            className="inputs"
            type="text"
            name="uname"
            ref={uname}
            placeholder="Enter your  username"
          />
          <label className="labels" htmlFor="passwd">
            {" "}
            Password{" "}
          </label>
          <input
            className="inputs"
            type="password"
            name="passwd"
            ref={passwd}
            placeholder="Enter your password"
          />
          <button
           onChange={()=>{isAuth()}}
            onClick={()=>{reRouteToTask()}}
            type="submit"
            className="btn-singin"
          >
            SignIn
          </button>
        </div>
        {/* Signup Box */}
        <div className="Signup-Box">
          <label className="labels" htmlFor="fname">
            Firstname
          </label>
          <input
            className="inputs"
            type="text"
            name="fname"
            placeholder="ex: Jhon"
          />
          <label className="labels" htmlFor="lname">
            Lastname
          </label>
          <input
            className="inputs"
            type="text"
            name="lname"
            placeholder="ex: Doe"
          />
          <label className="labels" htmlFor="email">
            E-mail
          </label>
          <input
            className="inputs"
            type="text"
            name="email"
            id="email"
            placeholder="example@GoMyCode.ma"
          />
          <label className="labels" htmlFor="passwd">
            Password
          </label>
          <input
            className="inputs"
            type="password"
            name="passwd"
            placeholder="Enter a secure Password"
          />
          <label className="labels" htmlFor="passwd-cm">
            Confirm Password
          </label>
          <input
            className="inputs"
            type="password"
            name="passwd-cm"
            placeholder="re-enter your password"
          />
          <button type="submit" className="btn-signup">
            SignUp
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
