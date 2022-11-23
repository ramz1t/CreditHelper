import React from "react";
import { useState } from "react";
import s from './Register.module.css';
import { NavLink } from "react-router-dom";
import CInput from "../../components/CInput/CInput";
import useInput from "../../hooks/useInput";
import axios from "../../api/axios";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";

const REGISTER_URL = '/create_user'

const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const name = useInput('', { isEmpty: true })
    const surname = useInput('', { isEmpty: true })
    const login = useInput('', { isEmpty: true })
    const email = useInput('', { isEmail: true })
    const pwd = useInput('', { isPassword: true })
    const repeatPwd = useInput('', { isMatch: pwd.value })
    const { registerUser } = useContext(AuthContext)

    const formValid = [name.allValid, surname.allValid, login.allValid, email.allValid, pwd.allValid, repeatPwd.allValid].every(item => item)

    const register = async (e) => {
        e.preventDefault()
        const [responseError, responseStatus] = await registerUser(name.value, surname.value, login.value, email.value, pwd.value)
        setError(responseError)
        setSuccess(responseStatus)
    }

    return (
        <div className={s.form_wrapper}>
            <form className={s.register_form} onSubmit={register}>
                <h1>Регистрация</h1>
                {error ? <p data-banner-type='error'>{error}</p> : ''}
                {success ? <p data-banner-type='success'>Аккаунт создан</p> : ''}
                <CInput className={s.register_form__input_field} title='Имя' autoRef={true} type='text' instance={name} />
                <CInput className={s.register_form__input_field} title='Фамилия' type='text' instance={surname} />
                <CInput className={s.register_form__input_field} title='Почта' type='text' instance={email} />
                <CInput className={s.register_form__input_field} title='Имя пользователя' type='text' instance={login} />
                <CInput className={s.register_form__input_field} title='Пароль' type='password' instance={pwd} />
                <CInput className={s.register_form__input_field} title='Повторите пароль' type='password' instance={repeatPwd} />
                <button disabled={!formValid || repeatPwd.value === ''}>Зарегестрироваться</button>
                <p style={{ marginBottom: 0, marginTop: "10px" }}>Уже есть аккаунт?</p>
                <NavLink to="/login">Войти</NavLink>
            </form>
        </div >
    )
}

export default Register