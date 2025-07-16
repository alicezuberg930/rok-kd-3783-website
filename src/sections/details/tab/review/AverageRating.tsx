import Iconify from "@/components/iconify";
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const reviews = [5, 4, 3, 2, 1]

export default function AverageRating() {
    return (
        <Stack direction='row'>
            <Box flex={1} sx={{ bgcolor: (theme) => theme.palette.grey[200], textAlign: 'center', py: 2 }}>
                <Typography variant="h5">Overall</Typography>
                <Typography variant="h2" gutterBottom>4.0</Typography>
                <Typography variant="subtitle2">(03 reviews)</Typography>
            </Box>

            <Box flex={1}>
                <Container>
                    <Typography variant="body1" fontWeight={600} gutterBottom>Based on 778 Reviews</Typography>
                    {reviews.map(review => (
                        <Stack direction='row' spacing={1} key={review}>
                            <Stack direction='row'>
                                <Iconify icon='ri:star-fill' color={review >= 1 ? 'yellow' : 'inherit'} width={14} />
                                <Iconify icon='ri:star-fill' color={review >= 2 ? 'yellow' : 'inherit'} width={14} />
                                <Iconify icon='ri:star-fill' color={review >= 3 ? 'yellow' : 'inherit'} width={14} />
                                <Iconify icon='ri:star-fill' color={review >= 4 ? 'yellow' : 'inherit'} width={14} />
                                <Iconify icon='ri:star-fill' color={review >= 5 ? 'yellow' : 'inherit'} width={14} />
                            </Stack>
                            <Typography variant='subtitle2'>{review * 4} (Reviews)</Typography>
                        </Stack>
                    ))}
                </Container>
            </Box>
        </Stack>
    )
}