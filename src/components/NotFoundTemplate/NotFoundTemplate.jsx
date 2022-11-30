import React from "react";
import s from "./NotFoundTemplate.module.css"
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFoundTemplate = () => {
    const { t } = useTranslation()

    return (
        <div className={s.error_wrapper}>
            <h1>{t('wrong_url')}</h1>
            <h3>404 Page Not Found Error</h3>
            <img src="/not_found.png" alt="" />
            <NavLink to='/'>{t('back_home')}</NavLink>
        </div>
    )
}

export default NotFoundTemplate