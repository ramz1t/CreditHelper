import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './Landing.module.css'

const Landing = () => {
    const { t } = useTranslation()

    return (
        <div className={s.container}>
            <div className={s.landing_top}>
                <div className={s.landing__titles}>
                    <h1 className={s.landing_title}>Credit</h1>
                    <h1 className={s.landing_title}>Helper</h1>
                </div>
                <img src="safe.png" alt='' />
            </div>
            <p>{t('main_body')}</p>
        </div>
    )
}

export default Landing