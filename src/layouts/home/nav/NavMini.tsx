// @mui
import { Stack, Box } from '@mui/material';
// config
import { NAV } from '@/utils/config-global';
// utils
import { hideScrollbarX } from '@/utils/cssStyles';
// components
import Logo from '@/components/logo';
//
import navConfig from './config-navigation';

// ----------------------------------------------------------------------

export default function NavMini() {
  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_DASHBOARD_MINI },
      }}
    >

      <Stack
        sx={{
          pb: 2,
          height: 1,
          position: 'fixed',
          width: NAV.W_DASHBOARD_MINI,
          borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          ...hideScrollbarX,
        }}
      >
        <Logo sx={{ mx: 'auto', my: 2 }} />

      </Stack>
    </Box>
  );
}
