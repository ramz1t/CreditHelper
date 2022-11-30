import React from 'react'
import { useState } from 'react'
import s from './CreditCalculator.module.css'
import CreditForm from './CreditForm/CreditForm'
import { BsPlusCircle as PlusIcon } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

const CreditCalculator = () => {
    const [forms, setForms] = useState([<CreditForm />])
    const { t } = useTranslation()
    const addForm = () => {
        setForms([...forms, <CreditForm />])
    }

    return (
        <div className={s.container}>
            <div className={s.labels_wrapper}>
                <p>{t('sum')}</p>
                <p>{t('rate')}</p>
                <p>{t('years')}</p>
                <p>{t('month_p')}</p>
                <p>{t('total_p')}</p>
                <p>{t('overpay')}</p>
            </div>
            <div className={s.forms_wrapper}>
                {forms}
            </div>
            <div className={s.buttons_wrapper}>
                <button className={s.add_button} onClick={addForm}>
                    <PlusIcon />
                </button>
                <button className={s.clear_button} onClick={() => setForms([])}>
                    {t('clear')}
                </button>
            </div>

        </div>
    )
}

export default CreditCalculator