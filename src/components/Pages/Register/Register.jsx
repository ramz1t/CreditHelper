import React from "react";
import { useEffect, useState, useRef } from "react";
import s from './Register.module.css';
import { NavLink } from "react-router-dom";
import { CInput, useInput } from "../../UI/CInput/CInput";
import axios from "../../../api/axios";

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

    const formValid = [name.allValid, surname.allValid, login.allValid, email.allValid, pwd.allValid, repeatPwd.allValid].every(item => item)

    const register = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(
                REGISTER_URL,
                JSON.stringify({
                    name: name.value,
                    surname: surname.value,
                    login: login.value,
                    email: email.value,
                    pwd: pwd.value
                }),
                {
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            )
            setError('')
            setSuccess(true)
        } catch (err) {
            if (!err?.response) {
                setSuccess(false)
                setError('Сервер не отвечает')
            } else {
                setSuccess(false)
                setError(err?.response?.data?.message)
            }
        }
    }

    return (
        <div className={s.form_wrapper}>
            <form className={s.register_form} onSubmit={register}>
                <h1>Регистрация</h1>
                {error ? <p data-banner-type='error'>{error}</p> : ''}
                {success ? <p data-banner-type='success'>Аккаунт создан</p> : ''}
                <CInput title='Имя' autoRef={true} type='text' instance={name} />
                <CInput title='Фамилия' type='text' instance={surname} />
                <CInput title='Почта' type='text' instance={email} />
                <CInput title='Имя пользователя' type='text' instance={login} />
                <CInput title='Пароль' type='password' instance={pwd} />
                <CInput title='Повторите пароль' type='password' instance={repeatPwd} />
                <button disabled={!formValid || repeatPwd.value === ''}>Зарегестрироваться</button>
                <p style={{ marginBottom: 0, marginTop: "10px" }}>Уже есть аккаунт?</p>
                <NavLink to="/login">Войти</NavLink>
            </form>
        </div >
    )
}

export default Register