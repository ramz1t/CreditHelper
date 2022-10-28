import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import { FiLogOut } from 'react-icons/fi'

const Navbar = () => {
    return (
        <nav className={s.container}>
            <h1>Credit Helper</h1>
            <NavLink className={({ isActive }) => isActive ? s.navbar__button_active : s.navbar__button} to='/home/add'>Калькулятор кредитов</NavLink>
            <NavLink className={({ isActive }) => isActive ? s.navbar__button_active : s.navbar__button} to='/home/my_credits'>Мои кредиты</NavLink>
            <NavLink id={s.logout_btn} className={s.navbar__button} to="/login">Выйти<FiLogOut /></NavLink>
        </nav>
    )
}

export default Navbar