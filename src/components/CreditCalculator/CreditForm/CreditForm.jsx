import React from 'react'
import { useState, useEffect, useContext } from 'react'
import s from './CreditForm.module.css'
import CInput from './../../CInput/CInput'
import useInput from '../../../hooks/useInput'
import { MdOutlineDeleteOutline as TrashIcon } from 'react-icons/md'
import { VscFolderActive, VscNewFolder } from 'react-icons/vsc'
import AuthContext from '../../../context/AuthProvider'
import useAxios from '../../../hooks/useAxios'
import { useTranslation } from 'react-i18next'

const getCreditResult = (creditSum, rate, yearCount) => {
    const monthCount = yearCount * 12
    const creditRate = rate / 100 / 12
    const monthlyPayment = creditSum * creditRate / (1 - 1 / ((1 + creditRate) ** monthCount).toFixed(10))
    return monthlyPayment
}

const CreditForm = () => {
    const creditSum = useInput('', { isInt: true })
    const rate = useInput('', { isFloat: true })
    const yearCount = useInput('', { isInt: true })
    const [monthlyPayment, setMonthlyPayment] = useState(0.00)
    const [deleted, setDeleted] = useState(false)
    const [filled, setFilled] = useState(false)
    const [saved, setSaved] = useState(false)
    const [loading, setLoading] = useState(false)
    const { user } = useContext(AuthContext)
    const api = useAxios()
    const { t } = useTranslation()

    useEffect(() => {
        if ([creditSum, rate, yearCount].every(item => item.allValid && item.value !== '')) {
            setMonthlyPayment(getCreditResult(creditSum.value, rate.value, yearCount.value))
            setFilled(true)
        } else {
            setMonthlyPayment(0.00)
            setFilled(false)
        }
    }, [creditSum, rate, yearCount])

    const handleCreditSave = () => {
        if (!filled) {
            alert(t('not_enough_data'))
            throw Error('Not enough data provided to save credit to DB')
        }
        if (loading) {
            throw Error('Already saving, dont spam')
        }
        setLoading(true)
        api.post('/api/add_credit', {
            'value': parseInt(creditSum.value),
            'rate': parseFloat(rate.value),
            'years_count': parseInt(yearCount.value),
            'monthly_payment': monthlyPayment,
            'total_payment': monthlyPayment * yearCount.value * 12,
            'overpay': monthlyPayment * yearCount.value * 12 - creditSum.value
        }).then(res => {
            setSaved(true)
            setLoading(false)
        }).catch(err => {
            setLoading(false)
            alert(t('save_err'))
        })
    }

    return (
        <>
            {deleted ? null :
                <div className={s.container}>
                    <CInput disabled={saved} className={s.calculator_input} instance={creditSum} />
                    <CInput disabled={saved} className={s.calculator_input} instance={rate} />
                    <CInput disabled={saved} className={s.calculator_input} instance={yearCount} />
                    <div className={s.infofield}>
                        <p>{parseFloat(monthlyPayment).toFixed(2)}</p>
                    </div>
                    <div className={s.infofield}>
                        <p>{monthlyPayment ? (monthlyPayment * yearCount.value * 12).toFixed(2) : '0.00'}</p>
                    </div>
                    <div className={s.infofield}>
                        {monthlyPayment ? <p>{(monthlyPayment * yearCount.value * 12 - creditSum.value).toFixed(2)}</p> : <p>0.00</p>}
                    </div>
                    <div className={s.buttons_wrapper}>
                        <button onClick={() => setDeleted(true)} className={s.button_red}><TrashIcon /></button>
                        {user &&
                            <button onClick={handleCreditSave} className={s.button_green}>
                                {loading ? <div className={s.lds_dual_ring}></div> : saved ? <VscFolderActive /> : <VscNewFolder />}
                            </button>}
                    </div>
                </div>
            }

        </>
    )
}

export default CreditForm