import React, { useState } from 'react'
import { CInput } from '../CInput/CInput'
import s from './CreditCalculator.module.css'
import { useInput } from '../CInput/CInput'
import { useEffect } from 'react'

const getCreditResult = (creditSum, creditPercent, yearCount) => {
    const monthCount = yearCount * 12
    const creditRate = creditPercent / 100 / 12
    const monthlyPayment = creditSum * creditRate / (1 - 1 / ((1 + creditRate) ** monthCount).toFixed(10))
    return monthlyPayment
}

const CreditCalculator = () => {
    const creditSum = useInput('', { isEmpty: true, isFloat: true })
    const creditPercent = useInput('', { isEmpty: true, isFloat: true })
    const yearCount = useInput('', { isEmpty: true, isInt: true })
    const [monthlyPayment, setMonthlyPayment] = useState()
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if ([creditSum, creditPercent, yearCount].every(item => item.allValid && item.value !== '')) {
            setMonthlyPayment(getCreditResult(creditSum.value, creditPercent.value, yearCount.value))
            setFormValid(true)
        } else {
            setFormValid(false)
        }
    }, [creditSum, creditPercent, yearCount])

    return (
        <>
            <div className={s.inputs_wrapper}>
                <label>Сумма кредита, руб:</label>
                <label>Процентная ставка, %:</label>
                <label>Количество лет:</label>
                <CInput className={s.calculator_input} autoRef={true} instance={creditSum} />
                <CInput className={s.calculator_input} instance={creditPercent} />
                <CInput className={s.calculator_input} instance={yearCount} />
            </div>
            {formValid ? 'valid' : 'notValid'}
            <p>Ежемесячный платеж {parseFloat(monthlyPayment).toFixed(2)}</p>
            <p>Общая сумма выплат {(monthlyPayment * yearCount.value * 12).toFixed(2)} </p>
            <p>Переплата по кредиту {(monthlyPayment * yearCount.value * 12 - creditSum.value).toFixed(2)}</p>
        </>
    )
}

export default CreditCalculator