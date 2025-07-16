'use client'
import { varSlide } from "@/components/animate";
import Image from "@/components/image";
import { Box, Container, Stack, styled, Typography } from "@mui/material";
import { m } from "framer-motion";

type Props = {
    data: string[]
}

export default function GallerySection({ data }: Props) {
    const MotionBox = m(Box)
    const StyledMotionBox = styled(MotionBox)(({ theme }) => ({
        position: 'absolute',
        top: '50%',
        left: '30%',
        textAlign: 'center',
        transform: 'translate(-50%,-50%)'
    }))

    return (
        <Container maxWidth='lg'>
            <Stack direction='row'>
                <Box flex='0 0 66.666667%'>
                    <Stack flexWrap='wrap' direction='row'>
                        <Box flex='0 0 66.666667%' position='relative' px={1} mb={2}>
                            <Image sx={{ width: '100%', height: '100%' }} alt={data[0]} src={data[0]} />
                            {/* <StyledMotionBox
                                variants={varSlide({}).inUp}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            >
                                <Typography variant="overline" color='white'>
                                    Sneaker For Sports
                                </Typography>
                            </StyledMotionBox> */}
                        </Box>
                        <Box flex='0 0 33.333333%' position='relative' px={1} mb={2}>
                            <Image sx={{ width: '100%', height: '100%' }} alt={data[1]} src={data[1]} />
                            {/* <StyledMotionBox
                                variants={varSlide({}).inUp}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            >
                                <Typography variant="overline" color='white'>
                                    Sneaker For Sports
                                </Typography>
                            </StyledMotionBox> */}
                        </Box>
                        <Box flex='0 0 33.333333%' position='relative' px={1}>
                            <Image sx={{ width: '100%', height: '100%' }} alt={data[2]} src={data[2]} />
                            {/* <StyledMotionBox
                                variants={varSlide({}).inUp}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            >
                                <Typography variant="overline" color='white'>
                                    Sneaker For Sports
                                </Typography>
                            </StyledMotionBox> */}
                        </Box>
                        <Box flex='0 0 66.666667%' position='relative' px={1}>
                            <Image sx={{ width: '100%', height: '100%' }} alt={data[3]} src={data[3]} />
                            {/* <StyledMotionBox
                                variants={varSlide({}).inUp}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            >
                                <Typography variant="overline" color='white'>
                                    Sneaker For Sports
                                </Typography>
                            </StyledMotionBox> */}
                        </Box>
                    </Stack>
                </Box>
                <Box flex='0 0 33.333333%' position='relative' px={1}>
                    <Image sx={{ width: '100%', height: '100%' }} alt={data[4]} src={data[4]} />
                    {/* <StyledMotionBox
                        variants={varSlide({}).inUp}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <Typography variant="overline" color='white'>
                            Sneaker For Sports
                        </Typography>
                    </StyledMotionBox> */}
                </Box>
            </Stack>
        </Container >
    )
} 