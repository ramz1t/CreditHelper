import React from "react";
import AuthContext from "../../../context/AuthProvider";
import { useContext } from "react";

const Home = () => {
    const { auth } = useContext(AuthContext)

    return (
        <div>
            <h1>Home page</h1>
            <p>Username: {auth.login}</p>
            <p>Time: {auth.authTime}</p>
            <p>Token: {auth.accessToken}</p>
        </div>
    )
}

export default Home