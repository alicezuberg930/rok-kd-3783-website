import { useRef } from 'react';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Typography, IconButton, CardProps, Stack, Card } from '@mui/material';
// utils
import { bgBlur } from '@/utils/cssStyles';
// components
import Image from '@/components/image';
import Iconify from '@/components/iconify';
import Carousel, { CarouselArrows } from '@/components/carousel';
import { IProduct } from '@/@types/product';
import { fCurrencyVND } from '@/utils/formatNumber';

// ----------------------------------------------------------------------

const StyledContentItem = styled('div')(({ theme }) => ({
    ...bgBlur({ color: theme.palette.grey[900] }),
    bottom: 0,
    zIndex: 9,
    width: '100%',
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    padding: theme.spacing(3),
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
}));

// ----------------------------------------------------------------------

interface Props extends CardProps {
    data: IProduct[];
};

export default function HotDealCarousel({ data, sx }: Props) {
    const carouselRef = useRef<Carousel | null>(null);

    const carouselSettings = {
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    };

    const handlePrev = () => {
        carouselRef.current?.slickPrev();
    };

    const handleNext = () => {
        carouselRef.current?.slickNext();
    };

    return (
        <Box sx={{ ...sx, pb: 2, position: 'relative' }}>
            <CarouselArrows filled shape='rounded' onNext={handleNext} onPrevious={handlePrev}>
                <Carousel ref={carouselRef} {...carouselSettings}>
                    {data.map((item, i) => (
                        <CarouselItem key={i} item={item} />
                    ))}
                </Carousel>
            </CarouselArrows>
        </Box>
    );
}

// ----------------------------------------------------------------------

function CarouselItem({ item }: { item: IProduct }) {
    const { images, figureName, variants } = item;

    return (
        <Box sx={{ position: 'relative', zIndex: 0 }}>
            <Image alt={images ? images[0] : '/assets/exclusive.jpg'} src={images ? images[0] : '/assets/exclusive.jpg'} ratio="1/1" />

            {/* <StyledContentItem> */}
            <Stack alignItems='center'>
                <Stack direction='row' alignItems='center' spacing={2} mt={1}>
                    <Typography variant='overline'>{fCurrencyVND(variants ? variants[0].price : 0)}</Typography>
                    <Typography variant='body2' color='GrayText' sx={{ textDecoration: 'line-through' }}>
                        {fCurrencyVND(variants ? variants[0].price : 0)}
                    </Typography>
                </Stack>

                <Typography variant="h6" mt={2}>{figureName}</Typography>

                <Stack alignItems='center' direction='row' spacing={2} mt={2}>
                    <IconButton size='large' sx={{ background: 'linear-gradient(90deg, #ffba00 0%, #ff6c00 100%)' }}>
                        <Iconify icon='ri:add-fill' color='white' />
                    </IconButton>
                    <Typography variant='subtitle2'>Add to bag</Typography>
                </Stack>
            </Stack>
            {/* </StyledContentItem> */}
        </Box>
    );
}
