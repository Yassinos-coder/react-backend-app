import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
    let auth = useSelector((state) => state.Auth.islogged)
    if (localStorage.logged_in === true) {
        auth = true
    }
    return ( auth === true ? <Outlet/> : <Navigate to='/Login' />)
}

export default ProtectedRoutes