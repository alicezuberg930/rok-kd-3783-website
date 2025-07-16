import { useState } from 'react';
// @mui
import {
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  MenuItem,
  TableCell,
  IconButton,
  Typography,
} from '@mui/material';
// components
import Label from '@/components/label';
import Iconify from '@/components/iconify';
import MenuPopover from '@/components/menu-popover';
// type
import { fNumber } from '@/utils/formatNumber';
import { Gorvernor } from '@/@types/gorvernor';
import Link from 'next/link';
import { PATH_DASHBOARD } from '@/routes/paths';

// --------------------------------------------------------------------

type Props = {
  row: Gorvernor;
  selected: boolean;
};

export default function GorvernorTableRow({
  row,
  selected,
}: Props) {
  const { governorID, governorName, power, killPoints, deads } = row;

  const [openConfirm, setOpenConfirm] = useState(false);

  const [openPopover, setOpenPopover] = useState<HTMLElement | null>(null);

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleOpenPopover = (event: React.MouseEvent<HTMLElement>) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  return (
    <>
      <TableRow hover selected={selected}>
        <TableCell align='left'>
          <Link href={PATH_DASHBOARD.governor.view(governorID)}>
            {governorID}
          </Link>
        </TableCell>

        <TableCell align='left'>
          {governorName}
        </TableCell>

        <TableCell align='left'>
          {fNumber(power)}
        </TableCell>

        <TableCell align='left'>
          {fNumber(killPoints)}
        </TableCell>

        <TableCell align='left'>
          {fNumber(deads)}
        </TableCell>
        {/* <TableCell align='right'>
          <IconButton color={openPopover ? 'inherit' : 'default'} onClick={handleOpenPopover}>
            <Iconify icon='eva:more-vertical-fill' />
          </IconButton>
        </TableCell> */}
      </TableRow >

      <MenuPopover
        open={openPopover}
        onClose={handleClosePopover}
        arrow='right-top'
        sx={{ width: 140 }}
      >
        <MenuItem
          onClick={() => {
            handleOpenConfirm();
            handleClosePopover();
          }}
          sx={{ color: 'secondary.main' }}
        >
          <Iconify icon='eva:checkmark-fill' />
          Duyệt
        </MenuItem>

        {/* <MenuItem
          onClick={() => {
            onEditRow();
            handleClosePopover();
          }}
        >
          <Iconify icon='eva:edit-fill' />
          Edit
        </MenuItem> */}
      </MenuPopover>
    </>
  );
}
