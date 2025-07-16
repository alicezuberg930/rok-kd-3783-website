'use client'
import React, { useState } from 'react';
// @mui
import { Box } from '@mui/material';
// hooks
import useResponsive from '@/hooks/useResponsive';
//
import Main from './Main';
import Header from './header';
// import NavMini from './nav/NavMini';
import NavVertical from './nav/NavVertical';
import Footer from './footer/Footer';
// import NavHorizontal from './nav/NavHorizontal';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: Props) {
  const isDesktop = useResponsive('up', 'lg');

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Header onOpenNav={handleOpen} />

      <Box
        sx={{
          display: { lg: 'flex' },
          minHeight: { lg: 1 },
        }}
      >
        <NavVertical openNav={open} onCloseNav={handleClose} />

        <Main>{children}</Main>
      </Box>

      <Footer />
    </>
  );
}
