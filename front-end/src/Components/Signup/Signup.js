import './Signup.css'
import React, { useState } from "react";
import { createAccount } from "../../redux/reducer";
import { useDispatch } from "react-redux";
import Signups from "../../modals/SignupsModal";
import {Link} from 'react-router-dom'
 
const Signup = () => {
  const passwd_input = React.createRef()
  const cm_passwd_input = React.createRef()
  const [signup, setSignups] = useState(new Signups());
  const dispatch = useDispatch();

  const SignUp = () => {
    dispatch(createAccount({ accountInfo: signup }));
  };

  

  return (
    <div className="signup-box">
      {/* Signup Box */}
      <form>
        <div className="Signup-Box">
          <div className="title">
            <h1>Create You Account</h1>
          </div>
          <label className="labels" htmlFor="fname">
            Firstname
          </label>
          <input
            onChange={(e) => {
              setSignups({ ...signup, Firstname: e.target.value });
            }}
            className="inputs"
            type="text"
            name="fname"
            placeholder="ex: Jhon"
          />
          <label className="labels" htmlFor="lname">
            Lastname
          </label>
          <input
            onChange={(e) => {
              setSignups({ ...signup, Lastname: e.target.value });
            }}
            className="inputs"
            type="text"
            name="lname"
            placeholder="ex: Doe"
          />
          <label className="labels" htmlFor="lname">
            Username
          </label>
          <input
            onChange={(e) => {
              setSignups({ ...signup, Username: e.target.value });
            }}
            className="inputs"
            type="text"
            name="username"
            placeholder="ex: Doe101"
          />
          <label className="labels" htmlFor="email">
            E-mail
          </label>
          <input
            onChange={(e) => {
              setSignups({ ...signup, Email: e.target.value });
            }}
            autoComplete="username"
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
           ref={passwd_input}
            autoComplete="new-password"
            onChange={(e) => {
              setSignups({ ...signup, Password: e.target.value });
            }}
            className="inputs"
            type="password"
            name="passwd"
            placeholder="Enter a secure Password"
          />
          <label className="labels" htmlFor="passwd-cm">
            Confirm Password
          </label>
          <input
            ref={cm_passwd_input}
            autoComplete='new-password'
            className="inputs"
            type="password"
            name="passwd-cm"
            placeholder="re-enter your password"
          />
          <div className="link-back">
            <Link to="/Login">
              <p> {"< "}Back to login</p>
            </Link>
          </div>
          <button
            onClick={() => {
              SignUp();
            }}
            type="submit"
            className="btn-signup"
          >
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
