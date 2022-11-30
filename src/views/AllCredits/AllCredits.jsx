import React from 'react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import CreditsTable from '../../components/CreditsTable/CreditsTable'
import useAxios from '../../hooks/useAxios'
import s from './AllCredits.module.css'

const AllCredits = () => {
    const { t } = useTranslation()
    const api = useAxios()
    const [credits, setCredits] = useState([])
    const [loading, setLoading] = useState(true)

    const handleDownload = () => api.get('api/download')
    useEffect(() => {
        api.get('api/my_credits').then(res => {
            setLoading(false)
            setCredits(res.data)
        }).catch(err => {
            setLoading(false)
            setCredits('error')
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className={s.container}>
            <button onClick={handleDownload}>exp</button>
            <h1>{t('my_credits')}</h1>
            <p>{t('my_credits_desc')}</p>
            {loading ?
                t('loading')
                :
                credits !== 'error' ?
                    <div className={s.table_wrapper}><CreditsTable data={credits} /></div>
                    :
                    <p data-type="error">{t('fetch_fail')}</p>
            }
        </div>
    )
}

export default AllCredits