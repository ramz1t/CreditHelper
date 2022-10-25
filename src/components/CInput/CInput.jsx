import React from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import s from './CInput.module.css'

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setIsDirty] = useState(false)
    const valid = useValidation(value, validations)
    const allValid = !Object.values(valid).some(item => item)

    const checkValue = (e) => {
        setValue(e.target.value)
        setIsDirty(true)
    }
    return {
        value,
        isDirty,
        checkValue,
        allValid,
        ...valid
    }
}

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(false)
    const [minLengthError, setMinLengthError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [pwdError, setPwdError] = useState(false)
    const [matchError, setMatchError] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break
                case 'minLength':
                    setMinLengthError(value.length < validations[validation])
                    break
                case 'isEmail':
                    var re =
                        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    setEmailError(!re.test(value));
                    break
                case 'isPassword':
                    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
                    setPwdError(!re.test(value));
                    break
                case 'isMatch':
                    setMatchError(value !== validations[validation])
                    break
            }
        }
    }, [value])

    return {
        isEmpty,
        minLengthError,
        matchError,
        pwdError,
        emailError
    }
}

const CInput = (props) => {

    const inputRef = useRef()

    useEffect(() => {
        if (props.autoRef) {
            inputRef.current.focus()
        }
    }, [])

    return (
        <div className={s.input_wrapper}>
            <label htmlFor={props.id}>{`${props.title}:`}</label>
            <input
                id={props.id}
                type={props.type}
                ref={inputRef}
                value={props.instance.value}
                onChange={props.instance.checkValue}
                onBlur={props.instance.checkValue}
            />
            {(props.instance.isDirty && props.instance.emailError) && <p><b>Ошибка в адресе почты</b></p>}
            {(props.instance.isDirty && props.instance.pwdError) && <p><b>Пароль должен быть не менее 8 символов, содержать маленькие и большие буквы, минимум одну цифру и один спецсимвол</b></p>}
            {(props.instance.isDirty && props.instance.isEmpty) && <p><b>Поле не может быть пустым</b></p>}
            {(props.instance.isDirty && props.instance.matchError) && <p><b>Пароли не совпадают</b></p>}
            {(props.instance.isDirty && props.instance.minLengthError) && <p><b>Мало символов</b></p>}
        </div>
    )
}

export { CInput, useInput }