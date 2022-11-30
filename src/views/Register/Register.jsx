import React from "react";
import { useState } from "react";
import s from './Register.module.css';
import { NavLink } from "react-router-dom";
import CInput from "../../components/CInput/CInput";
import useInput from "../../hooks/useInput";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import { useTranslation } from "react-i18next";

const Register = () => {
    const { t } = useTranslation()
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
                <h1>{t('register')}</h1>
                {error ? <p data-banner-type='error'>{error}</p> : ''}
                {success ? <p data-banner-type='success'>{t('acc_created')}</p> : ''}
                <CInput className={s.register_form__input_field} title={t('name')} autoRef={true} type='text' instance={name} />
                <CInput className={s.register_form__input_field} title={t('surname')} type='text' instance={surname} />
                <CInput className={s.register_form__input_field} title={t('email')} type='text' instance={email} />
                <CInput className={s.register_form__input_field} title={t('login')} type='text' instance={login} />
                <CInput className={s.register_form__input_field} title={t('password')} type='password' instance={pwd} />
                <CInput className={s.register_form__input_field} title={t('repeat_password')} type='password' instance={repeatPwd} />
                <button disabled={!formValid || repeatPwd.value === ''}>{t('submit_reg')}</button>
                <p style={{ marginBottom: 0, marginTop: "10px" }}>{t('has_acc')}</p>
                <NavLink to="/login">{t('login')}</NavLink>
            </form>
        </div >
    )
}

export default Register