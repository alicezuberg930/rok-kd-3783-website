'use client'
import { forwardRef } from 'react';
import * as pkg from 'react-lazy-load-image-component';
const { LazyLoadImage } = pkg
// @mui
import { Box } from '@mui/material';
//
import getRatio from './getRatio';
import { ImageProps } from './types';

// ----------------------------------------------------------------------

const Image = forwardRef<HTMLSpanElement, ImageProps>(
  ({ ratio, disabledEffect = false, effect = 'blur', sx, ...other }, ref) => {
    const content = (
      <Box
        component={LazyLoadImage}
        sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
        {...other}
      />
    );

    if (ratio) {
      return (
        <Box
          ref={ref}
          sx={{
            aspectRatio: ratio,
            overflow: 'hidden',
            position: 'relative',
            // pt: getRatio(ratio),
            '& .wrapper': {
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              position: 'absolute',
              backgroundSize: 'cover !important',
            },
            ...sx,
          }}
        >
          {content}
        </Box>
      );
    }

    return (
      <Box
        ref={ref}
        sx={{
          overflow: 'hidden',
          position: 'relative',
          '& .wrapper': {
            width: '100%',
            height: '100%',
            backgroundSize: 'cover !important',
          },
          ...sx,
        }}
      >
        {content}
      </Box>
    );
  }
);

export default Image;
