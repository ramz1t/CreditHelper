import React from 'react'
import { useState } from 'react'
import useAxios from '../../hooks/useAxios'
import s from './DellCell.module.css'
import { MdOutlineDeleteOutline as TrashIcon } from 'react-icons/md'

const DelCell = ({ state, setState, id }) => {
    const api = useAxios()
    const [loading, setLoading] = useState(false)

    const handleDelete = () => {
        setLoading(true)
        api.post('api/delete_credit', { id }).then(res => {
            state = state.filter(el => el.id !== id)
            setLoading(false)
            setState(state)
        }).catch(err => {
            setLoading(false)
            console.log(err)
        })
    }

    return (
        <button className={s.container} onClick={handleDelete}>{loading ? <div className={s.lds_dual_ring}></div> : <TrashIcon />}</button>
    )
}

export default DelCell