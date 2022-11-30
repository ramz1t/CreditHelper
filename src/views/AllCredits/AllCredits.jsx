import React from 'react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import useAxios from '../../hooks/useAxios'
import s from './AllCredits.module.css'

const AllCredits = () => {
    const { t } = useTranslation()
    const api = useAxios()

    useEffect(() => {
        api.get('api/my_credits').then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={s.container}>
            <h1>{t('my_credits')}</h1>
        </div>
    )
}

export default AllCredits