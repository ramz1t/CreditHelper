import React from "react";
import { useEffect, useState, useRef } from "react";
import s from './Login.module.css'
import { NavLink } from "react-router-dom";

const Login = () => {

    const [login, setLogin] = useState('')
    const [pwd, setPwd] = useState('')
    const [error, setError] = useState('')

    const loginRef = useRef()

    useEffect(() => {
        loginRef.current.focus()
    }, [])

    useEffect(() => {
        setError('')
    }, [login, pwd])

    const authorize = (e) => {
        const loginDB = 'username'
        const pwdDB = 'password'
        e.preventDefault()
        if (login === '' || pwd === '') {
            setError('Заполнены не все поля')
            return
        } else if (loginDB !== login || pwdDB !== pwd) {
            setError('Wrong credentials')
            return
        } else {
            setError('Done!')
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
                <button>Войти</button>
                <p style={{ marginBottom: 0, marginTop: "10px" }}>Нет аккаунта?</p>
                <NavLink to="/register">Регистрация</NavLink>
            </form>
        </div>
    )
}

export default Login;