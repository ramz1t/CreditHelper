import { Route, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";

const PrivateRoute = () => {
    let { user } = useContext(AuthContext);
    return user ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;