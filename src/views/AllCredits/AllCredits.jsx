import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import s from './AllCredits.module.css'

const AllCredits = () => {
    return (
        <>
            <Navbar />
            <div className={s.container}>
                <h1>Мои кредиты</h1>
            </div>
        </>

    )
}

export default AllCredits