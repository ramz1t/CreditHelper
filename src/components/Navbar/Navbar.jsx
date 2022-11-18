import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import { FiLogOut } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
    const [expanded, setExpanded] = useState(false)

    return (
        <nav className={`${s.container} ${expanded ? s.container_expanded : ''}`}>
            <NavLink id={s.home} to='/'>Credit Helper</NavLink>
            <button className={s.container__expandbtn} onClick={() => { setExpanded(!expanded) }}><GiHamburgerMenu /></button>
            <NavLink className={({ isActive }) => isActive ? s.navbar__button_active : s.navbar__button} to='/home/add'>Калькулятор кредитов</NavLink>
            <NavLink className={({ isActive }) => isActive ? s.navbar__button_active : s.navbar__button} to='/home/all'>Мои кредиты</NavLink>
            <NavLink id={s.logout_btn} className={s.navbar__button} to="/login">Выйти<FiLogOut /></NavLink>
        </nav>
    )
}

export default Navbar