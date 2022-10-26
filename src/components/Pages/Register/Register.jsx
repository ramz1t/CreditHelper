import React from "react";
import { useEffect, useState, useRef } from "react";
import s from './Register.module.css';
import { NavLink } from "react-router-dom";
import { CInput, useInput } from "../../UI/CInput/CInput";

const Register = () => {
    const name = useInput('', { isEmpty: true })
    const surname = useInput('', { isEmpty: true })
    const login = useInput('', { isEmpty: true })
    const email = useInput('', { isEmail: true })
    const pwd = useInput('', { isPassword: true })
    const repeatPwd = useInput('', { isMatch: pwd.value })

    const formValid = [name.allValid, surname.allValid, login.allValid, email.allValid, pwd.allValid, repeatPwd.allValid].every(item => item)

    const register = (e) => {
        e.preventDefault()
        console.log(name, surname, email, login, pwd, repeatPwd)
    }

    return (
        <div className={s.form_wrapper}>
            <form className={s.register_form} onSubmit={register}>
                <h1>Регистрация</h1>
                <CInput title='Имя' autoRef={true} type='text' instance={name} />
                <CInput title='Фамилия' type='text' instance={surname} />
                <CInput title='Почта' type='text' instance={email} />
                <CInput title='Имя пользователя' type='text' instance={login} />
                <CInput title='Пароль' type='password' instance={pwd} />
                <CInput title='Повторите пароль' type='password' instance={repeatPwd} />
                <button disabled={!formValid}>Зарегестрироваться</button>
                <p style={{ marginBottom: 0, marginTop: "10px" }}>Уже есть аккаунт?</p>
                <NavLink to="/login">Войти</NavLink>
            </form>
        </div>
    )
}

export default Register