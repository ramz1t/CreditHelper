import React from "react";
import { useTranslation } from "react-i18next";
import CreditCalculator from "../../components/CreditCalculator/CreditCalculator";
import Navbar from "../../components/Navbar/Navbar";
import s from './Home.module.css'

const Home = () => {
    const { t } = useTranslation()
    return (
        <div className={s.container}>
            <h1>{t('calculator_heading')}</h1>
            <p>{t('calculator_description')}</p>
            <CreditCalculator />
        </div>
    )
}

export default Home