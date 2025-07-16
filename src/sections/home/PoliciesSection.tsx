import { Box, Card, Container, Stack, Typography } from "@mui/material";

type Props = {
    data: {
        title: string,
        description: string,
        icon: JSX.Element
    }[]
}

export default function PoliciesSection({ data }: Props) {
    return (
        <Container maxWidth='lg'>
            <Box paddingY={12.5}>
                <Card>
                    <Stack direction='row' justifyContent='space-between' paddingY={5}>
                        {data.map((item, i) => (
                            <Container key={i}
                                sx={{
                                    textAlign: 'center',
                                    borderRight: i < data.length - 1 ? '.2px solid rgba(185, 185, 185, 0.2)' : 'none',
                                }}
                            >
                                {item.icon}
                                <Typography variant='body1'>{item.title}</Typography>
                                <Typography variant='body2' color='GrayText'>{item.description}</Typography>
                            </Container>
                        ))}
                    </Stack>
                </Card>
            </Box>
        </Container>
    )
} 