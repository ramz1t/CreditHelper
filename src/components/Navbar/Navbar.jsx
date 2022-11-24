import React from 'react'
import { useState, useContext } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import { FiLogOut } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import AuthContext from '../../context/AuthProvider'

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext)
    const [expanded, setExpanded] = useState(false)
    const navigate = useNavigate()

    const handleLogout = () => {
        logoutUser()
        navigate('/login')
    }

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
                        <button onClick={handleLogout} id={s.logout_btn} className={s.navbar__button}>Выйти, {user.email}<FiLogOut /></button>
                    </>
                ) : (
                    <NavLink id={s.logout_btn} className={s.navbar__button} to="/login">Войти<FiLogOut /></NavLink>
                )}
        </nav>
    )
}

export default Navbar