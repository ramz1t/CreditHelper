import React from "react";
import s from "./NotFoundTemplate.module.css"
import { NavLink } from "react-router-dom";

const NotFoundTemplate = (props) => {
    return (
        <div className={s.error_wrapper}>
            <h1>404 page not found</h1>
            <NavLink to={props.url}>Вернуться назад</NavLink>
        </div>
    )
}

export default NotFoundTemplate