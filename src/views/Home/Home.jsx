import React from "react";
import CreditCalculator from "../../components/CreditCalculator/CreditCalculator";
import Navbar from "../../components/Navbar/Navbar";
import s from './Home.module.css'

const Home = () => {

    return (
        <div className={s.container}>
            <h1>Помощничек по выбору оптимальных условий кредитования</h1>
            <p>Сравните условия предоставления кредитов в разных банках и выберите оптимальные условия с учетом ваших пожеланий и возможностей </p>
            <CreditCalculator />
        </div>
    )
}

export default Home