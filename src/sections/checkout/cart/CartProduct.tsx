import { ICheckoutCartItem } from "@/@types/product"
import { IncrementerButton } from "@/components/custom-input";
import Iconify from "@/components/iconify";
import Image from "@/components/image";
import Label from "@/components/label";
import { fCurrency } from "@/utils/formatNumber";
import { Box, Divider, IconButton, Stack, TableCell, TableRow, Typography } from "@mui/material";

type Props = {
    row: ICheckoutCartItem
}

export default function CartProduct({ row }: Props) {
    const { name, price, cover, quantity } = row;

    return (
        <TableRow sx={{ borderBottom: (theme) => `1px solid ${theme.palette.grey[300]}` }}>
            <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
                <Image
                    alt="product image"
                    src={cover}
                    sx={{ width: 150, height: 100, borderRadius: 1.5, mr: 2 }}
                />

                <Stack spacing={.5}>
                    <Typography noWrap variant="subtitle2" sx={{ maxWidth: 240 }}>
                        {name}
                    </Typography>

                    <Stack
                        direction="row"
                        alignItems="center"
                        sx={{ typography: 'body2', color: 'text.secondary' }}
                    >
                        size: <Label sx={{ ml: 0.5 }}> XL </Label>
                    </Stack>
                </Stack>
            </TableCell>

            <TableCell>
                <Typography noWrap variant='button'>
                    {fCurrency(price)}
                </Typography>
            </TableCell>

            <TableCell>
                <IncrementerButton
                    quantity={quantity}
                    onDecrease={() => { }}
                    onIncrease={() => { }}
                    disabledDecrease={quantity <= 1}
                    disabledIncrease={quantity >= 5}
                />
            </TableCell>

            <TableCell align="left">
                <Typography noWrap variant='button'>
                    {fCurrency(price * quantity)}
                </Typography>
            </TableCell>

            <TableCell align="left">
                <IconButton onClick={() => { }}>
                    <Iconify icon="eva:trash-2-outline" />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}