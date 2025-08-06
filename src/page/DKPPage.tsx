'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getComparator, TableHeadCustom, TableNoData, TablePaginationCustom, TableSkeleton, useTable } from '@/components/table'
import { Gorvernor } from '@/@types/gorvernor'
import { Card, Container, Table, TableBody, TableContainer } from '@mui/material'
import CustomBreadcrumbs from '@/components/custom-breadcrumbs'
import { PATH_DASHBOARD } from '@/routes/paths'
import Scrollbar from '@/components/scrollbar'
import { GorvernorTableRow, GorvernorTableToolbar } from '@/sections/dkp/list'

const TABLE_HEAD = [
    { id: 'governorID', label: 'Governor ID', align: 'left' },
    { id: 'governorName', label: 'Governor Name', align: 'left' },
    { id: 'power', label: 'Power', align: 'left' },
    { id: 'killPoints', label: 'Kill Points', align: 'left' },
    { id: 'deads', label: 'Deads', align: 'left' },
]

export default function DKPPage() {
    const {
        dense,
        page,
        order,
        orderBy,
        rowsPerPage,
        setPage,
        //
        selected,
        setSelected,
        onSelectRow,
        onSelectAllRows,
        //
        onSort,
        onChangeDense,
        onChangePage,
        onChangeRowsPerPage,
    } = useTable()

    const [tableData, setTableData] = useState<Gorvernor[]>([])

    const [filterName, setFilterName] = useState<string>('')

    const [filterID, setFilterID] = useState<string>('')

    const [openConfirm, setOpenConfirm] = useState<boolean>(false)

    const dataFiltered = applyFilter({
        inputData: tableData,
        comparator: getComparator(order, orderBy),
        filterName,
        filterID
    })

    const dataInPage = dataFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

    const denseHeight = dense ? 52 : 72

    const isFiltered = filterName !== '' || filterID !== ''

    const isNotFound = (!dataFiltered.length && !!filterName) || (!dataFiltered.length && !!filterID)

    useEffect(() => {
        const fetchDKPList = async () => {
            try {
                const response = await axios.get("https://script.google.com/macros/s/AKfycbypJB0uknAS7NPjDxRU5d2-tJjljYlrUVUq8n_PbjS4YRU-zU5A5y9rqXj4YGlyvDjt/exec")
                setTableData(response.data.data)
            } catch (error) {
                console.error('Error fetching or parsing XLSX file:', error)
            }
        }
        fetchDKPList()
    }, [])

    const handleOpenConfirm = () => {
        setOpenConfirm(true)
    }

    const handleCloseConfirm = () => {
        setOpenConfirm(false)
    }

    const handleFilterName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPage(0)
        setFilterName(event.target.value)
    }

    const handleFilterID = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPage(0)
        setFilterID(event.target.value)
    }

    // const handleDeleteRow = (id: string) => {
    //     const deleteRow = tableData.filter((row) => row._id !== id)
    //     setSelected([])
    //     setTableData(deleteRow)

    //     if (page > 1) {
    //         if (dataInPage.length < 2) {
    //             setPage(page - 1)
    //         }
    //     }
    // }

    const handleDeleteRows = (selectedRows: string[]) => {
        const deleteRows = tableData.filter((row) => !selectedRows.includes(String(row.governorID)))
        setSelected([])
        setTableData(deleteRows)

        if (page > 0) {
            if (selectedRows.length === tableData.length) {
                setPage(page - 1)
            } else if (selectedRows.length === tableData.length) {
                setPage(1)
            } else if (selectedRows.length > dataInPage.length) {
                const newPage = Math.ceil((tableData.length - selectedRows.length) / rowsPerPage) - 1
                setPage(newPage)
            }
        }
    }

    const handleResetFilter = () => {
        setFilterName('')
        setFilterID('')
    }

    return (
        <Container maxWidth='xl'>
            <CustomBreadcrumbs
                heading="DKP List"
                links={[
                    { name: 'Home', href: PATH_DASHBOARD.root },
                    { name: 'DKP', href: '#' },
                    { name: 'List' },
                ]}
            />

            <Card>
                <GorvernorTableToolbar
                    isFiltered={isFiltered}
                    filterName={filterName}
                    filterID={filterID}
                    onFilterName={handleFilterName}
                    onFilterID={handleFilterID}
                    onResetFilter={handleResetFilter}
                />

                <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
                    <Scrollbar>
                        <Table size={dense ? 'small' : 'medium'} sx={{ minWidth: 800 }}>
                            <TableHeadCustom
                                order={order}
                                orderBy={orderBy}
                                headLabel={TABLE_HEAD}
                                rowCount={tableData.length}
                                numSelected={selected.length}
                                onSort={onSort}
                            />

                            <TableBody>
                                {dataFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                                    <GorvernorTableRow
                                        key={row.governorID}
                                        row={row}
                                        selected={selected.includes(String(row.governorID))}
                                    />
                                ))}

                                {tableData.length == 0 && (
                                    <>
                                        <TableSkeleton />
                                        <TableSkeleton />
                                        <TableSkeleton />
                                        <TableSkeleton />
                                        <TableSkeleton />
                                    </>
                                )}

                                <TableNoData isNotFound={isNotFound} />
                            </TableBody>
                        </Table>
                    </Scrollbar>
                </TableContainer>

                <TablePaginationCustom
                    count={dataFiltered.length}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    onPageChange={onChangePage}
                    onRowsPerPageChange={onChangeRowsPerPage}
                    //
                    dense={dense}
                    onChangeDense={onChangeDense}
                />
            </Card>
        </Container>
    )
}

// ----------------------------------------------------------------------

function applyFilter({
    inputData,
    comparator,
    filterName,
    filterID
}: {
    inputData: Gorvernor[]
    comparator: (a: any, b: any) => number
    filterName: string
    filterID: string
}) {
    const stabilizedThis = inputData.map((el, index) => [el, index] as const)

    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0])
        if (order !== 0) return order
        return a[1] - b[1]
    })

    inputData = stabilizedThis.map((el) => el[0])

    if (filterName) {
        inputData = inputData.filter((input) => input.governorName.toLowerCase().indexOf(filterName.toLowerCase()) !== -1)
    }

    if (filterID) {
        inputData = inputData.filter((input) => String(input.governorID).indexOf(filterID) !== -1)
    }

    return inputData
}