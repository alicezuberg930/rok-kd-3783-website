'use client'
import { ICheckoutCartItem } from "@/@types/product"
import { TableHeadCustom } from "@/components/table"
import { Table, TableBody, TableContainer } from "@mui/material"
import CartProduct from "./CartProduct"

type Props = {
    data: ICheckoutCartItem[]
}

const TABLE_HEAD = [
    { id: 'product', label: 'Product' },
    { id: 'price', label: 'Price' },
    { id: 'quantity', label: 'Quantity' },
    { id: 'total', label: 'Total' },
    { id: '' },
];

export default function CartProductList({ data }: Props) {
    return (
        <TableContainer sx={{ overflow: 'unset', mb: 2 }}>
            <Table sx={{ minWidth: 720 }}>
                <TableHeadCustom headLabel={TABLE_HEAD} />

                <TableBody>
                    {data.map(row => (
                        <CartProduct row={row} key={row.id} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}