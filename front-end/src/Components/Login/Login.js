import React from "react";
import "./Login.css";
import { loggedIN } from "../../redux/loggedin-reducer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const Login = () => {
  const dispatch = useDispatch();

  const uname = React.createRef();
  const passwd = React.createRef();
  const navigate = useNavigate();

  const isAuth = () => {
    if (
      uname.current.value === "yassinos" &&
      passwd.current.value === "yassinos"
    ) {
      dispatch(loggedIN(true));
      localStorage.logged_in = true;
      navigate("/UserTasks");
    } else {
      alert("Wrong Credentials !");
    }
  };



  return (
    <>
      <div className="UsersBox">
        {/* Signin Box */}
        <form>
          <div className="Signin-Box">
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
            <button
              onClick={() => {
                isAuth();
              }}
              type="submit"
              className="btn-singin"
            >
              SignIn
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
