import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './Footer.module.css'

const Footer = () => {
    const { t, i18n } = useTranslation()

    const changeLang = (e) => {
        i18n.changeLanguage(e.target.value)
        localStorage.setItem('lang', e.target.value)
    }

    return (
        <div className={s.container}>
            <div className={s.footer__inner}>
                {`${t('author')}, 2022`}
                <a href='https://github.com' target='blank'>{t('frontend')}</a>
                <a href="https://github.com" target='blank'>{t('backend')}</a>
                <select onChange={changeLang}>
                    <option>{t('choose_lang')}</option>
                    <option value="ru">🇷🇺 Russian</option>
                    <option value="en">🇺🇸 English</option>
                </select>
            </div>
        </div>
    )
}

export default Footer