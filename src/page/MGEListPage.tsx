'use client'
import React, { useEffect, useState } from 'react'
import { getComparator, TableHeadCustom, TableNoData, TablePaginationCustom, TableSkeleton, useTable } from '@/components/table'
import { Card, Container, Table, TableBody, TableContainer } from '@mui/material'
import CustomBreadcrumbs from '@/components/custom-breadcrumbs'
import { PATH_DASHBOARD } from '@/routes/paths'
import Scrollbar from '@/components/scrollbar'
import useMGE from '@/hooks/api/useMGE'
import { IMGEApplication } from '@/@types/mge'
import { MGEApplicationTableRow, MGEApplicationTableToolbar } from '@/sections/mge-application/list'
import { useRouter } from 'next/navigation'

const TABLE_HEAD = [
    { id: 'governorID', label: 'Governor ID', align: 'left' },
    { id: 'governorName', label: 'Governor Name', align: 'left' },
    { id: 'unitTypeSpecialty', label: 'Unit type', align: 'left' },
    { id: 'combatTypeSpecialty', label: 'Combat type', align: 'left' },
    { id: 'vipLevel', label: 'VIP', align: 'left' },
    { id: 'commanderName', label: 'Commander wanted', align: 'left' },
    { id: '', label: '', align: 'left' },
]

export default function MGEListPage() {
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

    const [tableData, setTableData] = useState<IMGEApplication[]>([])

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

    const { getMGEList } = useMGE()

    const { data: mgeList, isLoading, isError } = getMGEList()

    useEffect(() => {
        if (!isLoading && !isError && mgeList) setTableData(mgeList.data)
    }, [mgeList, isLoading, isError])

    const navigate = useRouter()

    const handleShowMoreInfo = (id: number) => {
        navigate.push(`/mge-application/${id}`)
    }

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
        const deleteRows = tableData.filter((row) => !selectedRows.includes(String(row.governorId)))
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
                heading="MGE Application List"
                links={[
                    { name: 'Home', href: PATH_DASHBOARD.root },
                    { name: 'MGE', href: '#' },
                    { name: 'List' },
                ]}
            />

            <Card>
                <MGEApplicationTableToolbar
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
                                    <MGEApplicationTableRow
                                        key={row.governorId}
                                        row={row}
                                        selected={selected.includes(String(row.governorId))}
                                        showMoreInfo={(id) => handleShowMoreInfo(id)}
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

                                {isError && (
                                    <TableNoData isNotFound={true} title='An error has occurred while loading data' />
                                )}
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
    inputData: IMGEApplication[]
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
        inputData = inputData.filter((input) => String(input.governorId).indexOf(filterID) !== -1)
    }

    return inputData
}