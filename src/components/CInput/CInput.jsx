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
    const [intError, setIntError] = useState(false)
    const [floatError, setFloatError] = useState(false)

    useEffect(() => {
        let re = '';
        for (const validation in validations) {
            switch (validation) {
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break
                case 'minLength':
                    setMinLengthError(value.length < validations[validation])
                    break
                case 'isEmail':
                    re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    setEmailError(!re.test(value));
                    break
                case 'isPassword':
                    re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
                    setPwdError(!re.test(value));
                    break
                case 'isMatch':
                    setMatchError(value !== validations[validation])
                    break
                case 'isInt':
                    setIntError(!(!isNaN(value) && (function (x) { return (x | 0) === x; })(parseFloat(value))))
                    break
                case 'isFloat':
                    re = /^[-+]?[0-9]+\.[0-9]+$/
                    setFloatError(!(re.test(String(value)) || (!isNaN(value) && (function (x) { return (x | 0) === x; })(parseFloat(value)))))
                    break
                default:
                    break
            }
        }
    }, [value, validations])

    return {
        isEmpty,
        minLengthError,
        matchError,
        pwdError,
        emailError,
        intError,
        floatError
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
        <div className={props.className ? `${s.container} ${props.className}` : s.container}>
            {props.title ? <label htmlFor={props.id}>{props.title}</label> : null}
            <input
                id={props.id}
                type={props.type}
                ref={inputRef}
                value={props.instance.value}
                onChange={props.instance.checkValue}
                onBlur={props.instance.checkValue}
            />
            {(props.instance.isDirty && props.instance.emailError) && <p>Ошибка в адресе почты</p>}
            {(props.instance.isDirty && props.instance.pwdError) && <p>Пароль должен быть не менее 8 символов, содержать маленькие и большие буквы, минимум одну цифру и один спецсимвол</p>}
            {(props.instance.isDirty && props.instance.isEmpty) && <p>Поле не может быть пустым</p>}
            {(props.instance.isDirty && props.instance.matchError) && <p>Пароли не совпадают</p>}
            {(props.instance.isDirty && props.instance.minLengthError) && <p>Мало символов</p>}
            {(props.instance.isDirty && props.instance.intError) && <p>Введите целое число</p>}
            {(props.instance.isDirty && props.instance.floatError) && <p>Введите целое или дробное число</p>}
        </div>
    )
}

export { CInput, useInput }