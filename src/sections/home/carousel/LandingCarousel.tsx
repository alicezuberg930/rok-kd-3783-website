'use client'
import { m } from 'framer-motion';
import { useState, useRef } from 'react';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Card, Paper, Button, Typography, CardContent, Stack, IconButton } from '@mui/material';
// utils
import { bgGradient } from '@/utils/cssStyles';
// components
import Image from '@/components/image';
import { MotionContainer, varFade } from '@/components/animate';
import Carousel, { CarouselArrowIndex } from '@/components/carousel';
import Iconify from '@/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  data: {
    id: string;
    title: string;
    image: string;
    description: string;
  }[];
};

export default function LandingCarousel({ data }: Props) {
  const theme = useTheme();

  const carouselRef = useRef<Carousel | null>(null);

  const [currentIndex, setCurrentIndex] = useState(theme.direction === 'rtl' ? data.length - 1 : 0);

  const carouselSettings = {
    speed: 800,
    dots: false,
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Card sx={{ backgroundColor: 'transparent' }}>
      <Carousel ref={carouselRef} {...carouselSettings}>
        {data.map((item, i) => (
          <CarouselItem key={i} item={item} isActive={i === currentIndex} />
        ))}
      </Carousel>

      <CarouselArrowIndex
        index={currentIndex}
        total={data.length}
        onNext={handleNext}
        onPrevious={handlePrev}
      />
    </Card>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
  item: {
    title: string;
    description: string;
    image: string;
  };
  isActive: boolean;
};

function CarouselItem({ item, isActive }: CarouselItemProps) {
  const theme = useTheme();

  const { image, title, description } = item;

  return (
    <>
      <Stack direction='row' alignItems='center'>
        <CardContent
          component={MotionContainer}
          animate={isActive}
          action
          sx={{
            bottom: 0,
            maxWidth: '40%',
            flex: '0 0 40%',
            textAlign: 'left',
          }}
        >
          <m.div variants={varFade().inRight} initial="initial" animate="animate">
            <Typography variant="h2" mb={4}>
              {title}
            </Typography>
          </m.div>

          <m.div variants={varFade().inRight} initial="initial" animate="animate">
            <Typography variant="body2" color='GrayText'>
              {description}
            </Typography>
          </m.div>

          <m.div variants={varFade().inRight} initial="initial" animate="animate">
            <Stack alignItems='center' direction='row' spacing={2} mt={3}>
              <IconButton size='large' sx={{ background: 'linear-gradient(90deg, #ffba00 0%, #ff6c00 100%)' }}>
                <Iconify icon='ri:add-fill' color='white' />
              </IconButton>
              <Typography variant='subtitle2'>Add to bag</Typography>
            </Stack>
          </m.div>
        </CardContent>
        <Image alt={title} src={image}
          sx={{ maxWidth: '60%', height: '100%', flex: '0 0 60%' }}
        />
      </Stack>

      {/* <Box
        sx={{
          top: 0,
          width: 1,
          height: 1,
          position: 'absolute',
          ...bgGradient({
            direction: 'to top',
            startColor: `${theme.palette.grey[900]} 0%`,
            endColor: `${alpha(theme.palette.grey[900], 0)} 100%`,
          }),
        }}
      /> */}
    </>
  );
}
