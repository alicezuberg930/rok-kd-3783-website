import Image from "@/components/image";
import { Box, Container, Stack, Typography } from "@mui/material";

type Props = {
    data: {
        image: string
        title: string
        price: string
        discountedPrice: string
    }[]
}

export default function DealsOfTheWeekSection({ data }: Props) {
    return (
        <Container maxWidth='lg' sx={{ pb: 12.5 }}>
            <Box textAlign='center' mb={6}>
                <Typography variant="h3">Deals of the Week</Typography>
                <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
            </Box>
            <Stack direction='row' flexWrap='wrap'>
                {data.map((item, i) => (
                    <Box key={i} px={1} sx={{ flex: { lg: '0 0 25%', md: '0 0 33.333333%', sm: '0 0 50%' } }}>
                        <Stack direction='row' alignItems='center' spacing={2} mb={2}>
                            <Image alt={item.image} src={item.image} sx={{ height: 70, width: 70 }} />
                            <Stack spacing={.5}>
                                <Typography variant="subtitle2">{item.title}</Typography>
                                <Stack spacing={2} direction='row'>
                                    <Typography variant="button">{item.discountedPrice}</Typography>
                                    <Typography variant="button" sx={{ textDecoration: 'line-through', color: 'GrayText' }}>
                                        {item.price}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                ))}
            </Stack>
        </Container>
    )
}