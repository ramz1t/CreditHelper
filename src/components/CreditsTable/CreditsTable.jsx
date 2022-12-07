import React from 'react'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next';
import { useTable, useSortBy } from "react-table";
import './CreditsTable.module.css'
import DelCell from './DelCell';
import { VscTriangleDown as Down, VscTriangleUp as Up } from 'react-icons/vsc'

const CreditsTable = ({ data, setData }) => {
    const { t } = useTranslation()
    const columns = useMemo(
        () => [
            {
                Header: t('sum'),
                accessor: "value",
                Cell: ({ cell: { value } }) => {
                    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                }
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
                        value = parseFloat(value).toFixed(2)
                    }
                    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                }
            },
            {
                Header: t('total_p'),
                accessor: "total_payment",
                Cell: ({ cell: { value } }) => {
                    if (parseInt(value) !== value) {
                        value = parseFloat(value).toFixed(2)
                    }
                    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                }
            },
            {
                Header: t('overpay'),
                accessor: "overpay",
                Cell: ({ cell: { value } }) => {
                    if (parseInt(value) !== value) {
                        value = parseFloat(value).toFixed(2)
                    }
                    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                }
            },
            {
                Header: '',
                accessor: 'id',
                Cell: ({ cell: { value } }) => {
                    return <DelCell state={data} setState={setData} id={value} />
                },
                disableSortBy: true
            }
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, useSortBy);

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render("Header")}
                                {
                                    column.isSorted
                                        ? column.isSortedDesc
                                            ? <Down />
                                            : <Up />
                                        : null
                                }
                            </th>
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