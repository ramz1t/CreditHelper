import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './AllCredits.module.css'

const AllCredits = () => {
    const { t } = useTranslation()

    return (
        <div className={s.container}>
            <h1>{t('my_credits')}</h1>
        </div>
    )
}

export default AllCredits