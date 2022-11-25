import React from "react";
import s from "./NotFoundTemplate.module.css"
import { NavLink } from "react-router-dom";

const NotFoundTemplate = () => {
    return (
        <div className={s.error_wrapper}>
            <h1>404 page not found</h1>
            <NavLink to='/'>Вернуться на главную страницу</NavLink>
        </div>
    )
}

export default NotFoundTemplate