import React from "react";
import { useEffect, useState, useRef, useContext } from "react";
import s from './Login.module.css'
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";

const Login = () => {
    const { loginUser } = useContext(AuthContext)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const loginRef = useRef()

    useEffect(() => {
        loginRef.current.focus()
    }, [])

    useEffect(() => {
        setError('')
    }, [login, password])

    const authorize = async (e) => {
        e.preventDefault()
        setError(await loginUser(login, password))
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button disabled={login === '' || password === ''}>Войти</button>
                <p style={{ marginBottom: 0, marginTop: "10px" }}>Нет аккаунта?</p>
                <NavLink to="/register">Регистрация</NavLink>
            </form>
        </div>
    )
}

export default Login;