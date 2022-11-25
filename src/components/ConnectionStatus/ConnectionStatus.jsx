import React from "react";
import { useState, useEffect } from 'react'
import s from './ConnectionStatus.module.css'
import axios from "../../api/axios";

const CHECK_TIMEOUT_SECS = 60

const ConnectionStatus = () => {
    const [online, setOnline] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get('/health').then(res => {
                setOnline(true)
            }).catch(err => {
                setOnline(false)
            })
        }, CHECK_TIMEOUT_SECS * 1000)
        return () => {
            clearInterval(interval)
        }
    }, []);

    return (
        <>
            {!online ? <p className={s.container}>Удаленный сервер не отвечает, часть функций приложения может быть недоступна</p> : null}
        </>
    )
};

export default ConnectionStatus