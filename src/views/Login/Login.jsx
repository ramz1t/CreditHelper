import React from "react";
import { useEffect, useState, useRef, useContext } from "react";
import s from './Login.module.css'
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import { useTranslation } from "react-i18next";

const Login = () => {
    const { t } = useTranslation()
    const { loginUser } = useContext(AuthContext)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const loginRef = useRef()

    useEffect(() => {
        loginRef.current.focus()
    }, [])

    useEffect(() => {
        setError('')
    }, [login, password])

    const authorize = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(await loginUser(login, password))
        setLoading(false)
    }

    return (
        <div className={s.form_wrapper}>
            <form className={s.login_form} onSubmit={authorize}>
                <h1 className={s.login_form__title}>{t('login_info')}</h1>
                <p className={error ? s.login_form__error : s.login_form__error_disabled}>{error}</p>
                <label htmlFor="login">{t('login_info')}</label>
                <input
                    id="login"
                    type="text"
                    value={login}
                    ref={loginRef}
                    area-live="assertive"
                    onChange={(e) => setLogin(e.target.value)}
                />
                <label htmlFor="password">{t('password')}</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button disabled={login === '' || password === ''}>{loading ? t('loading') : t('login')}</button>
                <p style={{ marginBottom: 0, marginTop: "10px" }}>{t('no_acc')}</p>
                <NavLink to="/register">{t('register')}</NavLink>
            </form>
        </div>
    )
}

export default Login;