'use client'
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import HotDealCarousel from "./carousel/HotDealCarousel";
import { IProduct } from "@/@types/product";
import EmptyContent from "@/components/empty-content";

type Props = {
    data: IProduct[]
    isLoading: boolean
};

export default function HotDealSection({ data, isLoading }: Props) {
    const stackItemStyle = { alignItems: 'center', flex: 1, borderRight: '1px solid #EEEEEF' }
    const hoursRef = useRef<HTMLElement>(null)
    const minutesRef = useRef<HTMLElement>(null)
    const secondsRef = useRef<HTMLElement>(null)
    let timeLeft = 86400

    const getHours = (seconds: number) => {
        return String(Math.floor(seconds / 3600)).padStart(2, "0")
    }

    const getMinutes = (seconds: number) => {
        return String(Math.floor((seconds % 3600) / 60)).padStart(2, "0")
    }

    const getSeconds = (seconds: number) => {
        return String(seconds % 60).padStart(2, "0")
    }

    useEffect(() => {
        const timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft -= 1
                if (hoursRef.current) hoursRef.current.innerHTML = String(getHours(timeLeft))
                if (minutesRef.current) minutesRef.current.innerHTML = String(getMinutes(timeLeft))
                if (secondsRef.current) secondsRef.current.innerHTML = String(getSeconds(timeLeft))
            } else {
                if (timer) clearInterval(timer)
            }
        }, 1000)
        return () => { if (timer) clearInterval(timer) }
    }, [])

    return (
        <Stack
            direction='row' alignItems='center' marginY={12.5}
            sx={{ backgroundColor: (theme) => theme.palette.grey[200] }}
        >
            <Box
                sx={{
                    paddingY: '275px',
                    flex: 1,
                    textAlign: 'center',
                    backgroundSize: 'cover',
                    background: "url('/assets/exclusive.jpg') center no-repeat",
                }}
            >
                <Box px={20}>
                    <Typography variant="h4" color='white'>Exclusive Hot Deal Ends Soon!</Typography>
                    <Typography variant="body2" color='white'>Who are in extremely love with eco friendly system.</Typography>
                    <Stack direction='row' py={2} borderRadius={1} mt={3} sx={{ backgroundColor: 'white' }}>
                        <Stack sx={stackItemStyle}>
                            <Typography variant="h3">29</Typography>
                            <Typography variant="body2">Days</Typography>
                        </Stack>
                        <Stack sx={stackItemStyle}>
                            <Typography variant="h3">
                                <Box ref={hoursRef}></Box>
                            </Typography>
                            <Typography variant="body2">Hours</Typography>
                        </Stack>
                        <Stack sx={stackItemStyle}>
                            <Typography variant="h3">
                                <Box ref={minutesRef}></Box>
                            </Typography>
                            <Typography variant="body2">Mins</Typography>
                        </Stack>
                        <Stack sx={stackItemStyle}>
                            <Typography variant="h3">
                                <Box ref={secondsRef}></Box>
                            </Typography>
                            <Typography variant="body2">Secs</Typography>
                        </Stack>
                    </Stack>
                </Box>
                <Button sx={{ borderRadius: 4, mt: 3, px: 3 }} variant='contained'>
                    SHOP NOW
                </Button>
            </Box>

            <Box sx={{ flex: 1 }}>
                <Container maxWidth='sm'>
                    {isLoading ? (
                        <EmptyContent title="Dữ liệu đang tải" />
                    ) : (
                        <HotDealCarousel data={data} />
                    )}
                </Container>
            </Box>
        </Stack >
    )
}