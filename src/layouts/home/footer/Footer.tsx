import { useTheme } from "@mui/material/styles"
import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import Image from "@/components/image";
import Iconify from "@/components/iconify";

const instagramImages = [
    "https://themewagon.github.io/karma/img/i1.jpg",
    "https://themewagon.github.io/karma/img/i2.jpg",
    "https://themewagon.github.io/karma/img/i3.jpg",
    "https://themewagon.github.io/karma/img/i4.jpg",
    "https://themewagon.github.io/karma/img/i5.jpg",
    "https://themewagon.github.io/karma/img/i6.jpg",
    "https://themewagon.github.io/karma/img/i7.jpg",
    "https://themewagon.github.io/karma/img/i8.jpg",
]

export default function Footer() {
    const theme = useTheme()

    return (
        <Box sx={{
            paddingY: 12.5,
            backgroundColor: theme.palette.common.black
        }}>
            <Container maxWidth='lg'>
                <Stack direction='row' flexWrap='wrap'>
                    <Box flex='0 0 25%' maxWidth='25%' px={1}>
                        <Typography variant='overline' color='Menu'>About Us</Typography>
                        <Box height={12}></Box>
                        <Typography variant='body2' color='GrayText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</Typography>
                    </Box>
                    <Box flex='0 0 33%' maxWidth='33%' px={1}>
                        <Typography variant='overline' color='Menu'>Newsletter</Typography>
                        <Box height={12}></Box>
                        <Typography variant='body2' color='GrayText'>Stay update with our latest news.</Typography>
                        <TextField
                            label="Nhập Email" variant="filled" fullWidth
                            sx={{
                                mt: 2,
                                '& .MuiFilledInput-root': { backgroundColor: 'white' },
                                '& .MuiFilledInput-root:hover': { backgroundColor: 'white' },
                                '& .MuiFilledInput-root.Mui-focused': { backgroundColor: 'white' }
                            }}
                        />
                    </Box>
                    <Box flex='0 0 25%' maxWidth='25%' px={1}>
                        <Typography variant='overline' color='Menu'>Instagram Feed</Typography>
                        <Box height={12}></Box>
                        <Stack direction='row' flexWrap='wrap'>
                            {instagramImages.map(image => (
                                <Box p={0.5} key={image} maxWidth='25%' flex='0 0 25%'>
                                    <Image alt={image} src={image} />
                                </Box>
                            ))}
                        </Stack>
                    </Box>
                    <Box flex='0 0 17%' maxWidth='17%' px={1}>
                        <Typography variant='overline' color='Menu'>Follow us</Typography>
                        <Box height={12}></Box>
                        <Typography variant='body2' color='GrayText'>Let us be social.</Typography>
                        <Stack direction='row' spacing={1} mt={1}>
                            <Iconify icon='eva:facebook-outline' width={24} color='white' />
                            <Iconify icon='eva:phone-call-outline' width={24} color='white' />
                            <Iconify icon='eva:twitter-outline' width={24} color='white' />
                            <Iconify icon='ri:telegram-line' width={24} color='white' />
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}