import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/AuthProvider'
import s from './Profile.module.css'
import { FiLogOut } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

const Profile = () => {
    const { user, logoutUser } = useContext(AuthContext)
    const { t } = useTranslation()

    return (
        <div className={s.container}>
            <h1>{t('profile')}</h1>
            <div className={s.profile_data}>
                <h3>{t('name')}</h3>
                <p>{user.name}</p>
                <h3>{t('surname')}</h3>
                <p>{user.surname}</p>
                <h3>{t('login_info')}</h3>
                <p>{user.username}</p>
                <h3>{t('email')}</h3>
                <p>{user.email}</p>
            </div>
            <button className={s.logout_btn} onClick={logoutUser}>{t('logout')}<FiLogOut /></button>
        </div>
    )
}

export default Profile