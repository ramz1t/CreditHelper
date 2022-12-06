import React from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import s from './CInput.module.css'

const CInput = (props) => {

    const inputRef = useRef()
    const { t } = useTranslation()

    useEffect(() => {
        if (props.autoRef) {
            inputRef.current.focus()
        }
    }, [])

    return (
        <div className={props.className ? `${s.container} ${props.className}` : s.container}>
            {props.title ? <label htmlFor={props.id}>{props.title}:</label> : null}
            <input
                id={props.id}
                type={props.type}
                ref={inputRef}
                value={props.instance.value}
                onChange={props.instance.checkValue}
                onBlur={props.instance.checkValue}
                disabled={props.disabled}
            />
            {(props.instance.isDirty && props.instance.emailError) && <p>{t('email_err')}</p>}
            {(props.instance.isDirty && props.instance.pwdError) && <p>{t('pass_err')}</p>}
            {(props.instance.isDirty && props.instance.isEmpty) && <p>{t('empty_err')}</p>}
            {(props.instance.isDirty && props.instance.matchError) && <p>{t('pass_miss')}</p>}
            {(props.instance.isDirty && props.instance.minLengthError) && <p>Мало символов</p>}
            {(props.instance.isDirty && props.instance.intError) && <p>{t('int_err')}</p>}
            {(props.instance.isDirty && props.instance.floatError) && <p>{t('float_err')}</p>}
        </div>
    )
}

export default CInput