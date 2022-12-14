import React from "react";
import "./Login.css";
import { loggedIN, userData } from "../../redux/loggedin-reducer";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
const Login = () => {
  const dispatch = useDispatch();

  const uname = React.createRef();
  const passwd = React.createRef();
  const navigate = useNavigate();



  const Signin = ()=> {
    let credentials = ({
      uname:uname.current.value,
      passwd: passwd.current.value
    })
    axios.post('http://localhost:9000/Signin', credentials).then((res) => {
      if (res.data===false) {
        alert('Wrong Username or Password!')
        return false
      }else {
        let userid = res.data
        dispatch(userData(credentials.uname))
        dispatch(loggedIN(true));
        localStorage.logged_in = true;  
        navigate(`/UserTasks/${userid}`);
      }
    }).catch(err=>{console.log(err.message)})
  }




  return (
    <>
      <div className="UsersBox">
        {/* Signin Box */}
          <div className="Signin-Box">
            <div className="title">
              <h1>Login To Your Account</h1>
            </div>
            <h3 className="today-date">{new Date().toLocaleString("fr-MA", {day : '2-digit', month: 'numeric',year:'numeric'})}</h3>
            <label className="labels" htmlFor="uname">
              Username
            </label>
            <input
            autoComplete="username"
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
            autoComplete="current-password"
              className="inputs"
              type="password"
              name="passwd"
              ref={passwd}
              placeholder="Enter your password"
            />
            <div className="no-acct">
              <Link className="a-crt-acct" to="/Signup">
                <p>Create an account</p>
              </Link>
            </div>
            <Link to="/">
              <button className="btn-signin">
                Home
              </button>
            </Link>
            <button
              onClick={() => {
                Signin();
              }}
              type="submit"
              className="btn-signin"
            >
              SignIn
            </button>

          </div>
      </div>
    </>
  );
};

export default Login;
