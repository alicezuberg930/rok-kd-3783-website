import CustomBreadcrumbs from "@/components/custom-breadcrumbs";
import ProductInfoSection from "@/sections/details/ProductInfoSection";
import ProductDescriptionSection from "@/sections/details/ProductDescriptionSection";
import { Box, Container, Stack } from "@mui/material";
import DealsOfTheWeekSection from "@/sections/home/DealsOfTheWeekSection";

const hotDealProducts = [
    {
        image: "https://themewagon.github.io/karma/img/r1.jpg",
        title: "Black lace heel",
        price: "$210",
        discountedPrice: "$189"
    },
    {
        image: "https://themewagon.github.io/karma/img/r2.jpg",
        title: "Black lace heel 2",
        price: "$210",
        discountedPrice: "$189"
    },
    {
        image: "https://themewagon.github.io/karma/img/r3.jpg",
        title: "Black lace heel 3",
        price: "$210",
        discountedPrice: "$189"
    },
    {
        image: "https://themewagon.github.io/karma/img/r4.jpg",
        title: "Black lace heel 4",
        price: "$210",
        discountedPrice: "$189"
    },
    {
        image: "https://themewagon.github.io/karma/img/r5.jpg",
        title: "Black lace heel 5",
        price: "$210",
        discountedPrice: "$189"
    },
    {
        image: "https://themewagon.github.io/karma/img/r6.jpg",
        title: "Black lace heel 6",
        price: "$210",
        discountedPrice: "$189"
    },
    {
        image: "https://themewagon.github.io/karma/img/r7.jpg",
        title: "Black lace heel 7",
        price: "$210",
        discountedPrice: "$189"
    },
    {
        image: "https://themewagon.github.io/karma/img/r8.jpg",
        title: "Black lace heel 8",
        price: "$210",
        discountedPrice: "$189"
    },
    {
        image: "https://themewagon.github.io/karma/img/r9.jpg",
        title: "Black lace heel 9",
        price: "$210",
        discountedPrice: "$189"
    },
    {
        image: "https://themewagon.github.io/karma/img/r10.jpg",
        title: "Black lace heel 10",
        price: "$210",
        discountedPrice: "$189"
    },
    {
        image: "https://themewagon.github.io/karma/img/r11.jpg",
        title: "Black lace heel 11",
        price: "$210",
        discountedPrice: "$189"
    },
    {
        image: "https://themewagon.github.io/karma/img/r12.jpg",
        title: "Black lace heel 12",
        price: "$210",
        discountedPrice: "$189"
    },
]

export default function ProductDetailsPage() {
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
                            heading="Product Details Page"
                            links={[
                                {
                                    name: 'Home',
                                    href: '/',
                                },
                                {
                                    name: 'Shop',
                                    href: '/',
                                },
                                { name: 'product-details' },
                            ]}
                        />
                    </Stack>
                </Container>
            </Box>

            <ProductInfoSection />

            <ProductDescriptionSection />

            <DealsOfTheWeekSection data={hotDealProducts} />
        </>
    )
}