import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
    let auth = useSelector((state) => state.Auth.islogged)
    return (auth === true ? <Outlet/> : <Navigate to='/Login' />)
}

export default ProtectedRoutes