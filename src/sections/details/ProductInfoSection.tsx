'use client'
import Iconify from "@/components/iconify";
import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ProductInfoCarousel from "./ProductInfoCarousel";
import { IncrementerButton } from "@/components/custom-input";

const images = [
    "https://i.pinimg.com/originals/0e/88/ba/0e88baa992fedafd518314334ac682ad.jpg",
    "https://cdn.shopify.com/s/files/1/0318/2649/products/FIGURE-118116_06_900x.jpg?v=1598612907",
    "https://i.pinimg.com/originals/0e/88/ba/0e88baa992fedafd518314334ac682ad.jpg",
    "https://cdn.shopify.com/s/files/1/0318/2649/products/FIGURE-118116_06_900x.jpg?v=1598612907",
    "https://i.pinimg.com/originals/0e/88/ba/0e88baa992fedafd518314334ac682ad.jpg",
    "https://cdn.shopify.com/s/files/1/0318/2649/products/FIGURE-118116_06_900x.jpg?v=1598612907"
]

export default function ProductInfoSection() {
    const bg = { background: 'linear-gradient(90deg, #ffba00 0%, #ff6c00 100%)' }
    const [quantity, setQuantity] = useState(1)

    const handleDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    }

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    }

    return (
        <Container maxWidth="lg">
            <Stack pt={12.5} direction='row'>
                <Box sx={{ flex: 1 }}>
                    <Container maxWidth="sm" disableGutters>
                        <ProductInfoCarousel images={images} />
                    </Container>
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Container maxWidth="sm" disableGutters sx={{ pl: 6, pt: 4 }}>
                        <Typography variant="h4">Faded SkyBlu Denim Jeans</Typography>
                        <Typography variant="h4" fontWeight={800}>$149.99</Typography>
                        <Stack direction='row' spacing={3}>
                            <Typography width={120}>Category</Typography>
                            <Typography>:Household</Typography>
                        </Stack>
                        <Stack direction='row' spacing={3}>
                            <Typography width={120}>Availibility</Typography>
                            <Typography>:In Stock</Typography>
                        </Stack>
                        <Box sx={{ pt: 2, mt: 2, mb: 8, borderTop: '1px dotted #d5d5d5' }}>
                            <Typography variant="body2">
                                Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter.
                            </Typography>
                        </Box>
                        <Stack spacing={2} direction='row' alignItems='center'>
                            <Typography variant="body2">Quantity:</Typography>
                            <IncrementerButton
                                quantity={quantity}
                                onDecrease={handleDecrease}
                                onIncrease={handleIncrease}
                                disabledDecrease={quantity <= 1}
                                disabledIncrease={quantity >= 12}
                            />
                        </Stack>
                        <Stack direction='row' spacing={2} mt={3}>
                            <Button variant='contained' sx={{ ...bg, px: 3 }}>
                                Add to cart
                            </Button>
                            <IconButton size='large' sx={bg}>
                                <Iconify icon='eva:heart-outline' color='white' />
                            </IconButton>
                        </Stack>
                    </Container>
                </Box>
            </Stack>
        </Container>
    )
}