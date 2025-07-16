// @mui
import { useTheme } from '@mui/material/styles';
import { Stack, AppBar, Toolbar, IconButton, Box } from '@mui/material';
// utils
import { bgBlur } from '@/utils/cssStyles';
// hooks
import useOffSetTop from '@/hooks/useOffSetTop';
import useResponsive from '@/hooks/useResponsive';
// config
import { HEADER, NAV } from '@/utils/config-global';
// components
import Logo from '@/components/logo';
import Iconify from '@/components/iconify';
//
import SearchBar from './Searchbar';
import AccountPopover from './AccountPopover';
import ContactsPopover from './ContactsPopover';
import NotificationsPopover from './NotificationsPopover';
import PagesSection from './PagesSection';
import { useRef } from 'react';

// ----------------------------------------------------------------------

type Props = {
  onOpenNav?: VoidFunction;
};

export default function Header({ onOpenNav }: Props) {
  const ref = useRef<HTMLElement>(typeof window !== "undefined" ? document.body : null)

  const theme = useTheme();

  const isDesktop = useResponsive('up', 'lg');

  const isOffset = useOffSetTop(40, { container: ref });

  return (
    <AppBar
      sx={{
        alignItems: 'center',
        maxWidth: isOffset ? 2560 : 1240,
        top: isOffset ? 0 : 40,
        left: '50%',
        transform: 'translateX(-50%)',
        boxShadow: (theme) => theme.shadows[16],
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.paper,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(isDesktop && {
          height: HEADER.H_DASHBOARD_DESKTOP,
        }),
      }}
    >
      <Toolbar sx={{ height: 1, px: { lg: 4 }, width: '100%', maxWidth: 1240 }}>
        {isDesktop && <Logo sx={{ mr: 2.5 }} />}

        {!isDesktop && (
          <IconButton onClick={onOpenNav} sx={{ mr: 1, color: 'text.primary' }}>
            <Iconify icon="eva:menu-2-fill" />
          </IconButton>
        )}

        {/* <SearchBar /> */}

        <Stack
          flexGrow={1}
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          spacing={{ xs: 0.5, sm: 1.5 }}
        >
          <PagesSection />

          <NotificationsPopover />

          <ContactsPopover />

          <AccountPopover />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}