import React from "react";
import CreditCalculator from "../../components/CreditCalculator/CreditCalculator";
import Navbar from "../../components/Navbar/Navbar";
import s from './Home.module.css'

const Home = () => {

    return (
        <>
            <div className={s.container}>
                <div className={s.calculator_wrapper}>

                    <h1>Помощничек по выбору оптимальных условий кредитования</h1>
                    <p className={s.description}>Сравните условия предоставления кредитов в разных банках и выберите оптимальные условия с учетом ваших пожеланий и возможностей </p>
                    <CreditCalculator />
                </div>

            </div>
        </>

    )
}

export default Home