import React from 'react'
import { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import { CgProfile } from 'react-icons/cg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiOutlineLogin } from 'react-icons/hi'
import AuthContext from '../../context/AuthProvider'

const Navbar = () => {
    const { user } = useContext(AuthContext)
    const [expanded, setExpanded] = useState(false)

    return (
        // eslint-disable-next-line jsx-a11y/role-supports-aria-props
        <nav className={s.container} aria-expanded={expanded}>
            <NavLink id={s.home} to='/'>Credit Helper</NavLink>
            <button className={s.container__expandbtn} onClick={() => { setExpanded(!expanded) }}><GiHamburgerMenu /></button>
            <NavLink className={({ isActive }) => isActive ? s.navbar__button_active : s.navbar__button} to='/home/add'>Калькулятор кредитов</NavLink>
            {user ?
                (
                    <>
                        <NavLink className={({ isActive }) => isActive ? s.navbar__button_active : s.navbar__button} to='/home/all'>Мои кредиты</NavLink>
                        <NavLink className={`${s.navbar__button} ${s.navbar__button_last} ${s.navbar__button_profile}`} to='/profile'><CgProfile style={{ scale: 2 }} /><p>{user.username}</p></NavLink>
                    </>
                ) : (
                    <NavLink className={`${s.navbar__button} ${s.navbar__button_last} ${s.navbar__button_login}`} to="/login"><p>Войти</p><HiOutlineLogin /></NavLink>
                )}
        </nav>
    )
}

export default Navbar