'use client'
import Image from "@/components/image";
import { styled, alpha } from '@mui/material/styles';
import { Box, Container, IconButton, IconButtonProps, Stack, Typography } from "@mui/material";
import Iconify from "@/components/iconify";
import { useState } from "react";
import NextLink from 'next/link'
import { IProduct } from "@/@types/product";
import { fCurrencyVND } from "@/utils/formatNumber";
import EmptyContent from "@/components/empty-content";
import slugify from "slugify"

type Props = {
    data: IProduct[],
    isLoading: boolean
}

const StyledIconButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
    transition: theme.transitions.create('all', {
        duration: theme.transitions.duration.standard,
    }),
    borderRadius: Number(theme.shape.borderRadius) * 100,
    opacity: 0.5,
    color: alpha(theme.palette.common.white, 0.8),
    backgroundColor: alpha(theme.palette.grey[900], 0.5),
    '&:hover': {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.grey[600],
        opacity: 1,
    }
}))

export default function LatestProductsSection({ data, isLoading }: Props) {
    const [hoverItems, setHoverItems] = useState<{ [key: string]: boolean }>({})

    const handleSetHover = (name: string, status: boolean) => {
        setHoverItems(prev => ({ ...prev, [name]: status }))
    }

    return (
        <Container maxWidth='lg'>
            <Box paddingY={12.5}>
                <Stack textAlign='center' maxWidth='50%' marginX='auto' mb={6}>
                    <Typography variant="h3" gutterBottom>Latest Products</Typography>
                    <Typography variant="subtitle2" color='GrayText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                </Stack>

                <Stack direction='row' flexWrap='wrap'>
                    {isLoading ? (
                        <EmptyContent title="Đang tải dữ liệu" />
                    ) : data.map((product, i) => (
                        <Box component={NextLink} href={`/product/${slugify(product.figureName)}-${product._id}`} key={i} maxWidth='25%' flex='0 0 25%' px={1} mb={5}>
                            <Image
                                alt={product.images ? product.images[0] : '/assets/exclusive.jpg'} src={product.images ? product.images[0] : '/assets/exclusive.jpg'}
                                sx={{ mb: 3, height: 320 }}
                            />
                            <Typography variant='overline'>{product.figureName}</Typography>
                            <Stack direction='row' alignItems='center' spacing={2} mt={1}>
                                <Typography variant='overline'>{fCurrencyVND(product.variants ? product.variants[0].price : 0)}</Typography>
                                <Typography variant='body2' color='GrayText' sx={{ textDecoration: 'line-through' }}>
                                    {fCurrencyVND(product.variants ? product.variants[0].price : 0)}
                                </Typography>
                            </Stack>
                            <Stack direction='row' spacing={1} mt={2} alignItems='center'>
                                <StyledIconButton
                                    onMouseEnter={() => handleSetHover(`cart-${i}`, true)}
                                    onMouseLeave={() => handleSetHover(`cart-${i}`, false)}
                                >
                                    <Iconify icon="eva:shopping-cart-outline" width={16} />
                                </StyledIconButton>
                                {hoverItems[`cart-${i}`] && <Typography variant="button">Add to bag</Typography>}
                                <StyledIconButton
                                    onMouseEnter={() => handleSetHover(`favorite-${i}`, true)}
                                    onMouseLeave={() => handleSetHover(`favorite-${i}`, false)}
                                >
                                    <Iconify icon="eva:heart-outline" width={16} />
                                </StyledIconButton>
                                {hoverItems[`favorite-${i}`] && <Typography variant="button">Wishlist</Typography>}
                                <StyledIconButton
                                    onMouseEnter={() => handleSetHover(`repeat-${i}`, true)}
                                    onMouseLeave={() => handleSetHover(`repeat-${i}`, false)}
                                >
                                    <Iconify icon="eva:repeat-outline" width={16} />
                                </StyledIconButton>
                                {hoverItems[`repeat-${i}`] && <Typography variant="button">Compare</Typography>}
                                <StyledIconButton
                                    onMouseEnter={() => handleSetHover(`more-${i}`, true)}
                                    onMouseLeave={() => handleSetHover(`more-${i}`, false)}
                                >
                                    <Iconify icon="eva:move-outline" width={16} />
                                </StyledIconButton>
                                {hoverItems[`more-${i}`] && <Typography variant="button">View more</Typography>}
                            </Stack>
                        </Box>
                    ))}
                </Stack>
            </Box>
        </Container>
    )
}