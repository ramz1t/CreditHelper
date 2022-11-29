import React from "react";
import { useState, useEffect } from 'react'
import s from './ConnectionStatus.module.css'
import axios from "../../api/axios";

const ConnectionStatus = () => {
    const [online, setOnline] = useState(true);

    useEffect(() => {
        axios.get('api/health').then(res => {
            setOnline(true)
        }).catch(err => {
            setOnline(false)
        })
    }, []);

    return (
        <>
            {!online ? <p className={s.container}>Удаленный сервер не отвечает, часть функций приложения может быть недоступна</p> : null}
        </>
    )
};

export default ConnectionStatus