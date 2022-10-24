import React from "react";
import { useEffect, useState, useRef } from "react";
import s from './Login.module.css'

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
            setError('Not enough info')
            return
        } else if (loginDB !== login || pwdDB !== pwd) {
            setError('Wrong credentials')
            return
        } else {
            setError('Done!')
        }
    }

    return (
        <form className={s.login_form} onSubmit={authorize}>
            <p className={error ? s.login_form__error : s.login_form__error_disabled}>{error}</p>
            <label htmlFor="login">Login:</label>
            <input
                type="text"
                value={login}
                ref={loginRef}
                onChange={(e) => setLogin(e.target.value)}
            />
            <label htmlFor="login">Password:</label>
            <input
                type="password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
            />
            <button>Log In</button>
        </form>
    )
}

export default Login;