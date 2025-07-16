'use client'
import { useEffect } from "react";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs"
import CheckoutPayment from "@/sections/checkout/payment/CheckoutPayment"
import { Box, Container, Stack } from "@mui/material"
// redux
import { useDispatch, useSelector } from '@/redux/store';
import { getCart } from "@/redux/slices/product";

export default function page() {
    const dispatch = useDispatch();

    const { checkout } = useSelector((state) => state.product);

    const { cart, billing, activeStep } = checkout;

    useEffect(() => {
        dispatch(getCart(cart));
    }, [dispatch, cart]);

    return (
        <>
            <Box sx={{
                background: 'url("/assets/common-banner.jpg") center no-repeat',
                backgroundSize: 'cover',
                pt: '130px'
            }}>
                <Container maxWidth='lg'>
                    <Stack alignItems='flex-end' py={11.5}>
                        <CustomBreadcrumbs
                            heading="Confimation"
                            links={[
                                {
                                    name: 'Home',
                                    href: '/',
                                },
                                { name: 'Confirmation' },
                            ]}
                        />
                    </Stack>
                </Container>
            </Box>

            <Container maxWidth='lg' sx={{ py: 12.5 }}>
                <CheckoutPayment
                    checkout={checkout}
                    onNextStep={() => { }}
                    onBackStep={() => { }}
                    onGotoStep={() => { }}
                    onApplyShipping={(n) => { }}
                    onReset={() => { }}
                />
            </Container>
        </>
    )
}

