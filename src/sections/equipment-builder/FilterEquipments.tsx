import { Category, Grade } from "@/@types/equipment"
import { Box, MenuItem, TextField } from "@mui/material"

const equipmentSets = [
    "Dragon's Breath",
    "Eternal Empire",
    "Forest Guardian",
    "Garb of the Glorious Goddess",
    "Harvester",
    "Hellish Wasteland",
    "Revival",
    "Vanguard",
    "Windswept",
    "Lupine Vestments",
    "Witch's Wardrobe"
]

type Props = {
    onFilterName: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFilterCategory: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFilterGrade: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FilterEquipments({
    onFilterName,
    onFilterCategory,
    onFilterGrade
}: Props) {

    return (
        <Box
            gap={2}
            display='grid'
            gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)',
            }}
            mb={2}
        >
            <TextField
                onChange={onFilterName}
                name='governorId'
                label='Filter by name'
            />
            <TextField
                onChange={onFilterGrade}
                label='Filter by grade'
                select
                fullWidth
                SelectProps={{
                    MenuProps: {
                        PaperProps: {
                            sx: {
                                px: 1,
                                '& .MuiMenuItem-root': {
                                    px: 1,
                                    borderRadius: 0.75,
                                    typography: 'body2',
                                    textTransform: 'capitalize',
                                }
                            },
                        },
                    },
                    sx: { textTransform: 'capitalize' }
                }}
            >
                <MenuItem value='All' selected>All</MenuItem>
                {Object.entries(Grade).map(grade => (
                    <MenuItem key={grade[1]} value={grade[1]}>
                        {grade[1]}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                onChange={onFilterCategory}
                label='Filter by category'
                select
                fullWidth
                SelectProps={{
                    MenuProps: {
                        PaperProps: {
                            sx: {
                                px: 1,
                                '& .MuiMenuItem-root': {
                                    px: 1,
                                    borderRadius: 0.75,
                                    typography: 'body2',
                                    textTransform: 'capitalize',
                                }
                            },
                        },
                    },
                    sx: { textTransform: 'capitalize' }
                }}
            >
                <MenuItem value='All' selected>All</MenuItem>
                {Object.entries(Category).map(category => (
                    <MenuItem key={category[1]} value={category[1]}>
                        {category[1]}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                label='Filter by equipment set'
                select
                fullWidth
                SelectProps={{
                    MenuProps: {
                        PaperProps: {
                            sx: {
                                px: 1,
                                '& .MuiMenuItem-root': {
                                    px: 1,
                                    borderRadius: 0.75,
                                    typography: 'body2',
                                    textTransform: 'capitalize',
                                }
                            },
                        },
                    },
                    sx: { textTransform: 'capitalize' }
                }}
            >
                <MenuItem value='All' selected>All</MenuItem>
                {equipmentSets.map(set => (
                    <MenuItem key={set[1]} value={set}>
                        {set}
                    </MenuItem>
                ))}
            </TextField>
        </Box>
    )
}