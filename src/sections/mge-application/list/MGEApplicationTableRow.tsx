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
import { IMGEApplication } from '@/@types/mge';
import Link from 'next/link';
import { PATH_DASHBOARD } from '@/routes/paths';

// --------------------------------------------------------------------

type Props = {
  row: IMGEApplication;
  selected: boolean;
  showMoreInfo: (id: number) => void
};

export default function MGEApplicationTableRow({
  row,
  selected,
  showMoreInfo
}: Props) {
  const { governorId, governorName, vipLevel, unitTypeSpecialty, combatTypeSpecialty, commanderName } = row;

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
          {governorId}
        </TableCell>

        <TableCell align='left'>
          {governorName}
        </TableCell>

        <TableCell align='left'>
          <Stack flexWrap='wrap' gap={1}>
            {unitTypeSpecialty.map(type => (
              <Label color='info' width='fit-content'>{type}</Label>
            ))}
          </Stack>
        </TableCell>

        <TableCell align='left'>
          <Stack flexWrap='wrap' gap={1} width='fit-content'>
            {combatTypeSpecialty.map(type => (
              <Label color='info'>{type}</Label>
            ))}
          </Stack>
        </TableCell>

        <TableCell align='left'>
          {vipLevel}
        </TableCell>

        <TableCell align='left'>
          {commanderName}
        </TableCell>

        <TableCell align='right'>
          <IconButton color={openPopover ? 'inherit' : 'default'} onClick={handleOpenPopover}>
            <Iconify icon='eva:more-vertical-fill' />
          </IconButton>
        </TableCell>
      </TableRow >

      <MenuPopover
        open={openPopover}
        onClose={handleClosePopover}
        arrow='right-top'
        sx={{ width: 140 }}
      >
        <MenuItem
          onClick={() => {
            showMoreInfo(governorId)
            handleClosePopover();
          }}
          sx={{ color: 'secondary.main' }}
        >
          <Iconify icon='eva:checkmark-fill' />
          More info
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
