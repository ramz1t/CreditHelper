import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/AuthProvider'
import s from './Profile.module.css'
import { FiLogOut } from 'react-icons/fi'

const Profile = () => {
    const { user, logoutUser } = useContext(AuthContext)

    return (
        <div className={s.container}>
            <h1>Профиль</h1>
            <p>{user.name}</p>
            <p>{user.surname}</p>
            <p>{user.email}</p>
            <p>{user.username}</p>
            <button className={s.logout_btn} onClick={logoutUser}><FiLogOut />Выйти из учетной записи</button>
        </div>
    )
}

export default Profile