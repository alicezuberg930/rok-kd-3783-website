import { useRef } from 'react';
// @mui
import { Box, CardProps } from '@mui/material';
// components
import Image from '@/components/image';
import Carousel, { CarouselArrows } from '@/components/carousel';

// ----------------------------------------------------------------------

interface Props extends CardProps {
    images: string[]
};

export default function ProductInfoCarousel({ images }: Props) {
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
        <Box sx={{ position: 'relative' }}>
            <CarouselArrows filled shape='rounded' onNext={handleNext} onPrevious={handlePrev}>
                <Carousel ref={carouselRef} {...carouselSettings}>
                    {images.map((image) => (
                        <Image key={image} alt={image} src={image} ratio='3/4' />
                    ))}
                </Carousel>
            </CarouselArrows>
        </Box>
    );
}