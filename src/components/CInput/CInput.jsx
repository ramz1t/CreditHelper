import React from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import s from './CInput.module.css'

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

export default CInput