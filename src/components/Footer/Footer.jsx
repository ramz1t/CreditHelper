import React from 'react'
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.container}>
            <div className={s.footer__inner}>
                Фамилия Имя Отчество, 2022
                <a href='https://github.com' target='blank'>Фронтенд</a>
                <a href="https://github.com" target='blank'>Бэкенд</a>
            </div>
        </div>
    )
}

export default Footer