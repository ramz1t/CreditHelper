import React from "react";
import { useState, useEffect } from 'react'
import s from './ConnectionStatus.module.css'
import axios from "../../api/axios";
import { useTranslation } from "react-i18next";

const ConnectionStatus = () => {
    const [online, setOnline] = useState(true);
    const { t } = useTranslation()

    useEffect(() => {
        axios.get('api/health').then(res => {
            setOnline(true)
        }).catch(err => {
            setOnline(false)
        })
    }, []);

    return (
        <>
            {!online ? <p className={s.container}>{t('no_connection')}</p> : null}
        </>
    )
};

export default ConnectionStatus