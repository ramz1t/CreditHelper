import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";

const PrivateRoute = () => {
    let { user } = useContext(AuthContext);
    return user ? (
        <Outlet />
    ) : (
        <>
            <h1>Эта страница существует, но для доступа к ней нужно авторизироваться</h1>
            <NavLink to='/login'>Войти</NavLink>
        </>

    );
};

export default PrivateRoute;