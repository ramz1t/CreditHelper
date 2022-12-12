import React from 'react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import CreditsTable from '../../components/CreditsTable/CreditsTable'
import useAxios from '../../hooks/useAxios'
import s from './AllCredits.module.css'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import fileDownload from 'js-file-download'
import { useContext } from 'react'
import AuthContext from '../../context/AuthProvider'

const AllCredits = () => {
    const { t } = useTranslation()
    const api = useAxios()
    const [credits, setCredits] = useState([])
    const [loading, setLoading] = useState(true)
    const [exporting, setExporting] = useState(false)
    const { user } = useContext(AuthContext)

    const handleDownload = () => {
        setExporting(true)
        api.get('api/download', {
            responseType: 'blob',
            params: { locale: localStorage.getItem('lang') || 'ru' }
        }).then(res => {
            setExporting(false)
            fileDownload(res.data, `${user.username}_credits.xlsx`)
        }).catch(err => {
            setExporting(false)
            alert('failed to download')
        })
    }

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
            <h1>{t('my_credits')}</h1>
            <div>
                <p>{t('my_credits_desc')}</p>
                <p>{t('filter')}</p>
            </div>
            {loading ?
                t('loading')
                :
                credits !== 'error' ?
                    <div className={s.table_wrapper}><CreditsTable setData={setCredits} data={credits} /></div>
                    :
                    <p data-type="error">{t('fetch_fail')}</p>
            }

            <button className={s.export} onClick={handleDownload}><AiOutlineCloudDownload />{exporting ? t('loading') : t('export')}</button>
        </div>
    )
}
// #TODO: excel export
export default AllCredits