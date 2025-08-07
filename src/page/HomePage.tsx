'use client'
import React, { useEffect, useState } from 'react'
import { Box, Button, Card, Container, Stack, Typography } from '@mui/material'
import useResponsive from '@/hooks/useResponsive';
import Link from 'next/link';

export default function HomePage() {
    const isMobile = useResponsive('down', 'sm');

    return (
        <Container maxWidth="lg">
            <Typography textAlign='center' gutterBottom variant='h3'>Welcome to kingdom 3783's website</Typography>
            {/* <Typography textAlign='center'>Kingdom management platform</Typography> */}

            <Box
                gap={3} mt={4}
                display='grid'
                gridTemplateColumns={{
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                }}
            >
                <Card sx={{ p: 3, flex: 1, textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom>MGE Applications</Typography>
                    <Button variant="contained" color="primary">
                        <Link href="/apply-mge" >
                            Apply
                        </Link>
                    </Button>
                </Card>
                <Card sx={{ p: 3, flex: 1, textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom>DKP List</Typography>
                    <Button variant="contained" color="primary">
                        <Link href="/dkp" >
                            View List
                        </Link>
                    </Button>
                </Card>
                <Card sx={{ p: 3, flex: 1, textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom>Lyceum of Wisdom</Typography>
                    <Button variant="contained" color="primary">
                        <Link href="/preliminary-answers" >
                            Preliminary answers
                        </Link>
                    </Button>
                </Card>
            </Box>
        </Container>
    )
}