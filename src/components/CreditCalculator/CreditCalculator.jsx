import React from 'react'
import { useState } from 'react'
import s from './CreditCalculator.module.css'
import CreditForm from './CreditForm/CreditForm'
import { BsPlusCircle as PlusIcon } from 'react-icons/bs'

const CreditCalculator = () => {
    const [forms, setForms] = useState([<CreditForm />])

    const addForm = () => {
        setForms([...forms, <CreditForm />])
    }

    return (
        <>
            <div className={s.labels_wrapper}>
                <p>Сумма кредита, руб:</p>
                <p>Ставка, %:</p>
                <p>Количество лет:</p>
                <p>Ежемесячный платеж:</p>
                <p>Общая сумма выплат:</p>
                <p>Переплата по кредиту:</p>
            </div>
            {forms}
            <div className={s.buttons_wrapper}>
                <button className={s.add_button} onClick={addForm}>
                    <PlusIcon />
                </button>
                <button
                    className={s.clear_button}
                    onClick={() => setForms([])}
                >
                    Очистить формы
                </button>
            </div>

        </>
    )
    //TODO: clear all
}

export default CreditCalculator