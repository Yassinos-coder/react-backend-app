import React, {useState} from "react";
import "./Login.css";
import Signups from "../../modals/Signups";
import {useDispatch} from "react-redux";
import { loggedIN } from "../../redux/loggedin-reducer";
import {  useNavigate } from "react-router-dom";
import { createAccount } from "../../redux/reducer";



const Login = () => {

  const dispatch = useDispatch()

  const uname = React.createRef();
  const passwd = React.createRef();
  const navigate = useNavigate();
  const [signup, setSignups] = useState(new Signups())

  const isAuth = () => {
    if (uname.current.value === "yassinos" && passwd.current.value === "yassinos") {
      dispatch(loggedIN(true))
      navigate("/UserTasks")
    } else {
      alert('noyaaaaaah')
    }
  }

  const SignUp = () => {
    dispatch(createAccount({accountInfo: signup}))
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
            onClick={()=>{isAuth()}}
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
            onChange={(e) => {setSignups({...signup, Firstname: e.target.value})}}
            className="inputs"
            type="text"
            name="fname"
            placeholder="ex: Jhon"
          />
          <label className="labels" htmlFor="lname">
            Lastname
          </label>
          <input
            onChange={(e) => {setSignups({...signup, Lastname: e.target.value})}}
            className="inputs"
            type="text"
            name="lname"
            placeholder="ex: Doe"
          />
          <label className="labels" htmlFor="email">
            E-mail
          </label>
          <input
          onChange={(e) => {setSignups({...signup, Email: e.target.value})}}
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
            onChange={(e) => {setSignups({...signup, Password: e.target.value})}}
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
          <button  
          onClick={()=>{SignUp()}}
          type="submit" className="btn-signup">
            SignUp
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
