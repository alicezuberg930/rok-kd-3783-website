import Image from "@/components/image";
import { Box, Container, Stack } from "@mui/material";
import Link from "next/link";

type Props = {
    data: string[]
}

export default function BrandSection({ data }: Props) {
    return (
        <Container maxWidth='lg'>
            <Box paddingY={12.5}>
                <Stack direction='row' flexWrap='wrap'>
                    {data.map((item, i) => (
                        <Link href='/' key={i} style={{ flexBasis: 0, flexGrow: 1, position: 'relative' }} >
                            <img alt={item} src={item} style={{ opacity: .4, margin: 'auto' }} />
                        </Link>
                    ))}
                </Stack>
            </Box>
        </Container>
    )
}