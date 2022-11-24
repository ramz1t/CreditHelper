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
            <div className={s.profile_data}>
                <div className={s.profile_data__row}>
                    <h3>Имя:</h3>
                    <p>{user.name}</p>
                </div>
                <div className={s.profile_data__row}>
                    <h3>Фамилия:</h3>
                    <p>{user.surname}</p>
                </div>
                <div className={s.profile_data__row}>
                    <h3>Логин:</h3>
                    <p>{user.username}</p>
                </div>
                <div className={s.profile_data__row}>
                    <h3>Почта:</h3>
                    <p>{user.email}</p>
                </div>
            </div>

            <button className={s.logout_btn} onClick={logoutUser}><FiLogOut />Выйти из учетной записи</button>
        </div>
    )
}

export default Profile