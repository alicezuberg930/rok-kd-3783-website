'use client'
import { Button, Container } from "@mui/material";
import CartProductList from "./CartProductList";
import CheckoutSummary from "../CheckoutSummary";
import { ICheckoutCartItem } from "@/@types/product";

type Props = {
    data: ICheckoutCartItem[]
}

export default function CheckoutCart({ data }: Props) {
    return (
        <>
            <CartProductList data={data} />

            <Container maxWidth='xs' sx={{ ml: 'auto', mr: 0 }}>
                <CheckoutSummary
                    enableDiscount
                    shipping={20}
                    total={3820}
                    discount={400}
                    subtotal={4200}
                    onApplyDiscount={(discount) => { }}
                />
                <Button
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    disabled={!data.length}
                // onClick={onNextStep}
                >
                    Proceed To Checkout
                </Button>
            </Container>
        </>
    )
}