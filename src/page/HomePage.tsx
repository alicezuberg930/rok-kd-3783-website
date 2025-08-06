'use client'
import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Stack, Typography } from '@mui/material'
import useResponsive from '@/hooks/useResponsive';

export default function HomePage() {
    const isMobile = useResponsive('down', 'sm');

    return (
        <Container maxWidth="xl">
            <Typography textAlign='center' gutterBottom variant='h3'>Welcome to kingdom 3783's website</Typography>
            {/* <Typography textAlign='center'>Kingdom management platform</Typography> */}

            <Stack direction={isMobile ? 'column' : 'row'} spacing={2} mt={4}>
                <Card sx={{ p: 3, flex: 1, textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom>MGE Applications</Typography>
                    <Button variant="contained" color="primary" href="/apply-mge">
                        Apply
                    </Button>
                </Card>
                <Card sx={{ p: 3, flex: 1, textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom>DKP List</Typography>
                    <Button variant="contained" color="primary" href="/dkp">
                        View List
                    </Button>
                </Card>
            </Stack>
        </Container>
    )
}