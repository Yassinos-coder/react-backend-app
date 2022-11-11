import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";
import { loggedIN } from "../redux/loggedin-reducer";
import { useEffect } from "react";

let verif_success;

const ProtectedRoutes = () => {
    if (useSelector((state) =>state.Auth.islogged) === true) {
        console.log('logged in')
        verif_success= true
    } else {
        verif_success= false
    }

    return verif_success === true  ? <Outlet/>  : <Navigate to={'/Login'}/>
}

export default ProtectedRoutes