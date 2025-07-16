import { ICheckoutCartItem } from "@/@types/product";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs";
import CartProductList from "@/sections/checkout/cart/CartProductList";
import CheckoutCart from "@/sections/checkout/cart/CheckoutCart";
import CheckoutSummary from "@/sections/checkout/CheckoutSummary";
import { Box, Container, Stack } from "@mui/material";

const cart: ICheckoutCartItem[] = [
    {
        id: '1',
        cover: "https://cdn1.npcdn.net/images/61bafed879b555754629a8d4829c7c29_1737188591.webp?md5id=e521eb05eb8a2e794ac25a62e663e370&new_width=1000&new_height=1000&size=max&w=1608536500&from=jpeg&type=1",
        name: "Violet Evergarden Figure",
        price: 350,
        total: 350 * 2,
        quantity: 2
    },
    {
        id: '2',
        cover: "https://flyingraijin.com/cdn/shop/files/3_317f33a0-f35b-432e-b649-5fc268e18aee.jpg?v=1732212514&width=1445",
        name: "Violet Evergarden Figure",
        price: 350,
        total: 350,
        quantity: 1
    },
    {
        id: '3',
        cover: "https://cdn1.npcdn.net/images/61bafed879b555754629a8d4829c7c29_1737188591.webp?md5id=e521eb05eb8a2e794ac25a62e663e370&new_width=1000&new_height=1000&size=max&w=1608536500&from=jpeg&type=1",
        name: "Violet Evergarden Figure",
        price: 320,
        total: 320 * 4,
        quantity: 4
    },
    {
        id: '4',
        cover: "https://flyingraijin.com/cdn/shop/files/3_317f33a0-f35b-432e-b649-5fc268e18aee.jpg?v=1732212514&width=1445",
        name: "Violet Evergarden Figure",
        price: 390,
        total: 390 * 5,
        quantity: 5
    },
    {
        id: '5',
        cover: "https://cdn1.npcdn.net/images/61bafed879b555754629a8d4829c7c29_1737188591.webp?md5id=e521eb05eb8a2e794ac25a62e663e370&new_width=1000&new_height=1000&size=max&w=1608536500&from=jpeg&type=1",
        name: "Violet Evergarden Figure",
        price: 350,
        total: 350 * 3,
        quantity: 3
    },
]

export default function CartPage() {
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
                            heading="Shopping Cart"
                            links={[
                                {
                                    name: 'Home',
                                    href: '/',
                                },
                                { name: 'Cart' }
                            ]}
                        />
                    </Stack>
                </Container>
            </Box>

            <Container maxWidth='lg' sx={{ py: 12.5 }}>
                <CheckoutCart data={cart} />
            </Container>
        </>
    )
}