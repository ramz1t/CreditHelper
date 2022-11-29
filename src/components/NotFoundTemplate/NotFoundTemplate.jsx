import React from "react";
import s from "./NotFoundTemplate.module.css"
import { NavLink } from "react-router-dom";

const NotFoundTemplate = () => {
    return (
        <div className={s.error_wrapper}>
            <h1>Упс, кажется вы не туда попали</h1>
            <h3>404 Page Not Found Error</h3>
            <img src="/not_found.png" alt="" />
            <NavLink to='/'>Вернуться на главную страницу</NavLink>
        </div>
    )
}

export default NotFoundTemplate