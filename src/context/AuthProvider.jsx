import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

const AuthContext = createContext();

export default AuthContext

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() =>
        localStorage.getItem("authTokens")
            ? JSON.parse(localStorage.getItem("authTokens"))
            : null
    );
    const [user, setUser] = useState(() =>
        localStorage.getItem("authTokens")
            ? jwt_decode(localStorage.getItem("authTokens"))
            : null
    );
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const loginUser = async (username, password) => {
        try {
            const response = await axios.post(
                'api/token',
                JSON.stringify({ username, password }),
                {
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            )
            setAuthTokens(response.data);
            localStorage.setItem("authTokens", JSON.stringify(response.data));
            navigate('/home/add');
        } catch (err) {
            if (!err?.response) {
                return 'Сервер не отвечает'
            } else if (err?.response?.status === 403) {
                return 'Неверный логин или пароль'
            } else {
                return err?.response?.data?.message
            }
        }
    };

    const registerUser = async (name, surname, username, email, password) => {
        try {
            // eslint-disable-next-line no-unused-vars
            const response = await axios.post(
                'api/register',
                JSON.stringify({ name, surname, username, email, password }),
                {
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            )
            return ['', true]
        } catch (err) {
            if (!err?.response) {
                return ['Сервер не отвечает', false]
            } else {
                return [err?.response?.data?.message, false]
            }
        }
    };

    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem("authTokens");
        navigate("/login");
    };

    const contextData = {
        user,
        setUser,
        authTokens,
        setAuthTokens,
        registerUser,
        loginUser,
        logoutUser
    };

    useEffect(() => {
        if (authTokens) {
            setUser(jwt_decode(authTokens.access));
        }
        setLoading(false);
    }, [authTokens, loading]);

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
}