import React from 'react'
import useAxios from '../../hooks/useAxios'
import s from './DellCell.module.css'
import { MdOutlineDeleteOutline as TrashIcon } from 'react-icons/md'

const DelCell = ({ state, setState, id }) => {
    console.log(state)
    const api = useAxios()

    const handleDelete = () => {
        api.post('api/delete_credit', { id }).then(res => {
            state = state.filter(el => el.id !== id)
            setState(state)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <button className={s.container} onClick={handleDelete}><TrashIcon /></button>
    )
}

export default DelCell