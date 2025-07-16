'use client'
import { Box, Card, MenuItem, MenuList, Stack, Typography } from "@mui/material";

const categories = [
    {
        title: "Fruits and Vegetables",
        amount: 53
    },
    {
        title: "Meat and Fish",
        amount: 53
    },
    {
        title: "Cooking",
        amount: 43
    },
    {
        title: "Beverages",
        amount: 24
    },
    {
        title: "Home and Cleaning",
        amount: 12
    },
    {
        title: "Pest Control",
        amount: 21
    },
    {
        title: "Office Products",
        amount: 67
    },
    {
        title: "Beauty Products",
        amount: 65
    },
    {
        title: "Health Products",
        amount: 29
    },
    {
        title: "Pet Care",
        amount: 12
    },
    {
        title: "Home Appliances",
        amount: 15
    },
    {
        title: "Baby Care",
        amount: 15
    }
]

export default function FitlerBarSection() {
    return (
        <Card>
            <Stack spacing={0}>
                <Box
                    sx={{
                        bgcolor: 'green',
                        borderBottom: (t) => `1px solid ${t.palette.grey[200]}`,
                        padding: 2
                    }}
                >
                    <Typography variant="subtitle1" color='white'>Browse Categories</Typography>
                </Box>
                {categories.map((category, i) => (
                    <Stack direction='row'
                        sx={{
                            borderBottom: (t) => i < categories.length - 1 ? `1px solid ${t.palette.grey[200]}` : 'none',
                            padding: 2
                        }}
                    >
                        <Typography variant="subtitle2">{category.title}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.disabled', ml: 1 }}>({category.amount})</Typography>
                    </Stack>
                ))}
            </Stack>
        </Card>
    )
}