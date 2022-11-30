import React from 'react'
import { useTranslation } from 'react-i18next';
import { useTable, useSortBy } from "react-table";
import s from './CreditsTable.module.css'

const CreditsTable = ({ data }) => {
    const { t } = useTranslation()
    const columns = [
        {
            Header: t('sum'),
            accessor: "value"
        },
        {
            Header: t('rate'),
            accessor: "rate"
        },
        {
            Header: t('years'),
            accessor: "years_count"
        },
        {
            Header: t('month_p'),
            accessor: "monthly_payment",
            Cell: ({ cell: { value } }) => {
                if (parseInt(value) !== value) {
                    return parseFloat(value).toFixed(2)
                }
            }
        },
        {
            Header: t('total_p'),
            accessor: "total_payment",
            Cell: ({ cell: { value } }) => {
                if (parseInt(value) !== value) {
                    return parseFloat(value).toFixed(2)
                }
            }
        },
        {
            Header: t('overpay'),
            accessor: "overpay",
            Cell: ({ cell: { value } }) => {
                if (parseInt(value) !== value) {
                    return parseFloat(value).toFixed(2)
                }
            }
        }
    ]
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, useSortBy);

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}

export default CreditsTable