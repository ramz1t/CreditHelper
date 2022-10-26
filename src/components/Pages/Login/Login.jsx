import React from "react";
import { useEffect, useState, useRef, useContext } from "react";
import s from './Login.module.css'
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthProvider";
import axios from "../../../api/axios";

const LOGIN_URL = '/token'
const SUCCESS_URL = '/home'

const Login = () => {
    const { auth, setAuth } = useContext(AuthContext)
    const [login, setLogin] = useState('')
    const [pwd, setPwd] = useState('')
    const [error, setError] = useState('')
    const loginRef = useRef()
    const navigate = useNavigate()

    useEffect(() => {
        loginRef.current.focus()
    }, [])

    useEffect(() => {
        setError('')
    }, [login, pwd])

    const authorize = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify({ login, pwd }),
                {
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            )
            const accessToken = response?.data?.token
            const authTime = new Date().toLocaleString()
            setAuth({ login, accessToken, authTime })
            navigate(SUCCESS_URL)
        } catch (err) {
            if (!err?.response) {
                setError('Сервер не отвечает')
            } else {
                setError(err?.response?.data?.message)
            }
        }
    }

    return (
        <div className={s.form_wrapper}>
            <form className={s.login_form} onSubmit={authorize}>
                <h1 className={s.login_form__title}>Войти</h1>
                <p className={error ? s.login_form__error : s.login_form__error_disabled}>{error}</p>
                <label htmlFor="login">Логин:</label>
                <input
                    id="login"
                    type="text"
                    value={login}
                    ref={loginRef}
                    area-live="assertive"
                    onChange={(e) => setLogin(e.target.value)}
                />
                <label htmlFor="password">Пароль:</label>
                <input
                    id="password"
                    type="password"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                />
                <button disabled={login === '' || pwd === ''}>Войти</button>
                <p style={{ marginBottom: 0, marginTop: "10px" }}>Нет аккаунта?</p>
                <NavLink to="/register">Регистрация</NavLink>
            </form>
        </div>
    )
}

export default Login;