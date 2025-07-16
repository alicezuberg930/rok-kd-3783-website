import CustomBreadcrumbs from "@/components/custom-breadcrumbs"
import { Box, Container, Stack } from "@mui/material"
import DealsOfTheWeekSection from "@/sections/home/DealsOfTheWeekSection";
import FitlerBarSection from "@/sections/filter/FitlerBarSection";

const hotDealProducts = [
    {
        image: "https://www.anhshop.com/wp-content/uploads/2022/10/Vegeta-Super-Saiyan-Blue-Ichiban-Kuji-Ultimate-Variation-Masterlise-figure2.jpg",
        title: "Black lace heel",
        price: "$210",
        discountedPrice: "$189"
    },
    {
        image: "https://www.anhshop.com/wp-content/uploads/2022/10/Vegeta-Super-Saiyan-Blue-Ichiban-Kuji-Ultimate-Variation-Masterlise-figure2.jpg",
        title: "Black lace heel 2",
        price: "$210",
        discountedPrice: "$189"
    },
    {
        image: "https://www.anhshop.com/wp-content/uploads/2022/10/Vegeta-Super-Saiyan-Blue-Ichiban-Kuji-Ultimate-Variation-Masterlise-figure2.jpg",
        title: "Black lace heel 3",
        price: "$210",
        discountedPrice: "$189"
    },
    {
        image: "https://www.anhshop.com/wp-content/uploads/2022/10/Vegeta-Super-Saiyan-Blue-Ichiban-Kuji-Ultimate-Variation-Masterlise-figure2.jpg",
        title: "Black lace heel 4",
        price: "$210",
        discountedPrice: "$189"
    },
    {
        image: "https://www.anhshop.com/wp-content/uploads/2022/10/Vegeta-Super-Saiyan-Blue-Ichiban-Kuji-Ultimate-Variation-Masterlise-figure2.jpg",
        title: "Black lace heel 5",
        price: "$210",
        discountedPrice: "$189"
    },
    {
        image: "https://www.anhshop.com/wp-content/uploads/2022/10/Vegeta-Super-Saiyan-Blue-Ichiban-Kuji-Ultimate-Variation-Masterlise-figure2.jpg",
        title: "Black lace heel 6",
        price: "$210",
        discountedPrice: "$189"
    },
    {
        image: "https://i5.walmartimages.com/asr/73124258-3f13-4a65-a536-969ed09a8bd6.af6dbad3893cff85a6f308888ab5dd92.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
        title: "Black lace heel 7",
        price: "$210",
        discountedPrice: "$189"
    },
    {
        image: "https://i5.walmartimages.com/asr/73124258-3f13-4a65-a536-969ed09a8bd6.af6dbad3893cff85a6f308888ab5dd92.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
        title: "Black lace heel 8",
        price: "$210",
        discountedPrice: "$189"
    },
    {
        image: "https://i5.walmartimages.com/asr/73124258-3f13-4a65-a536-969ed09a8bd6.af6dbad3893cff85a6f308888ab5dd92.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
        title: "Black lace heel 9",
        price: "$210",
        discountedPrice: "$189"
    },
    {
        image: "https://i5.walmartimages.com/asr/73124258-3f13-4a65-a536-969ed09a8bd6.af6dbad3893cff85a6f308888ab5dd92.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
        title: "Black lace heel 10",
        price: "$210",
        discountedPrice: "$189"
    },
    {
        image: "https://i5.walmartimages.com/asr/73124258-3f13-4a65-a536-969ed09a8bd6.af6dbad3893cff85a6f308888ab5dd92.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
        title: "Black lace heel 11",
        price: "$210",
        discountedPrice: "$189"
    },
    {
        image: "https://i5.walmartimages.com/asr/73124258-3f13-4a65-a536-969ed09a8bd6.af6dbad3893cff85a6f308888ab5dd92.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
        title: "Black lace heel 12",
        price: "$210",
        discountedPrice: "$189"
    },
]

export default function page() {
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
                                {
                                    name: 'Shop',
                                    href: '/',
                                },
                                { name: 'Fashion Category' },
                            ]}
                        />
                    </Stack>
                </Container>
            </Box>

            <Container maxWidth='lg'>
                <Stack direction='row' spacing={2} py={12.5}>
                    <FitlerBarSection />
                </Stack>
            </Container>

            <DealsOfTheWeekSection data={hotDealProducts} />
        </>
    )
}