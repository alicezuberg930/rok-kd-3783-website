// @mui
import { Stack, InputAdornment, TextField, MenuItem, Button } from '@mui/material'
// components
import Iconify from '@/components/iconify'

// ----------------------------------------------------------------------

type Props = {
    filterName: string
    filterID: string
    isFiltered: boolean | number
    onResetFilter: VoidFunction
    onFilterName: (event: React.ChangeEvent<HTMLInputElement>) => void
    onFilterID: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function MGEApplicationTableToolbar({
    filterName,
    filterID,
    isFiltered,
    onResetFilter,
    onFilterName,
    onFilterID
}: Props) {
    return (
        <Stack
            spacing={2}
            alignItems='center'
            direction={{ xs: 'column', sm: 'row' }}
            sx={{ px: 2.5, py: 3 }}
        >
            <TextField
                fullWidth
                value={filterName}
                onChange={onFilterName}
                placeholder='Search by name'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <Iconify icon='eva:search-fill' sx={{ color: 'text.disabled' }} />
                        </InputAdornment>
                    )
                }}
            />
            <TextField
                fullWidth
                value={filterID}
                onChange={onFilterID}
                placeholder='Search by ID'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <Iconify icon='eva:search-fill' sx={{ color: 'text.disabled' }} />
                        </InputAdornment>
                    )
                }}
            />
            {isFiltered && (
                <Button
                    color='error'
                    sx={{ flexShrink: 0 }}
                    onClick={onResetFilter}
                    startIcon={<Iconify icon='eva:trash-2-outline' />}
                >
                    Clear
                </Button>
            )}
        </Stack>
    )
}
