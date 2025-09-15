import { Category, CategorySetOrder, Equipment, EquipmentSet, Grade, GradeColor } from "@/@types/equipment";
import Iconify from "@/components/iconify";
import { encryptAES256 } from "@/utils/encryption";
import { Box, Button, Stack } from "@mui/material";
import Image from "next/image";
import { useSnackbar } from "@/components/snackbar";

const equipmentStyles = (grade?: Grade) => {
    return {
        position: 'relative',
        height: 0,
        paddingBottom: '100%',
        boxShadow: `inset -1px -1px 10px 0 ${grade ? GradeColor[grade] : '#9C9A9C'}, inset 1px 1px 10px 0 ${grade ? GradeColor[grade] : '#9C9A9C'}`,
        borderRadius: 1,
        cursor: 'pointer',
        background: grade ? 'transparent' : 'rgba(128,128,128,.6)',
    }
}

const imageContainerStyles = {
    display: 'flex',
    aspectRatio: '1/1',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'rotate(45deg)'
}

const gridColumnRows = [
    { gridColumn: 4, gridRow: 0 },
    { gridColumn: 2, gridRow: 2 },
    { gridColumn: 3, gridRow: 2 },
    { gridColumn: 3, gridRow: 3 },
    { gridColumn: 2, gridRow: 3 },
    { gridRow: 4, gridColumn: 0 },
    { gridRow: 3, gridColumn: 0 },
    { gridRow: 4, gridColumn: 2 }
]

type Props = {
    currentSet: EquipmentSet,
    onChooseEquipment: (category: Category, accessoriesSlot?: string) => void,
    onRemoveEquipment: (slot: string) => void
    onResetEquipment: () => void
}

export default function EquipmentSetList({ currentSet, onChooseEquipment, onRemoveEquipment, onResetEquipment }: Props) {
    const { enqueueSnackbar } = useSnackbar()

    const createShareableLink = () => {
        const baseUrl = window.location.origin + window.location.pathname
        let equipmentIds: string = ""
        Object.entries(currentSet).forEach(([key, equipment]) => {
            if (equipment) {
                equipmentIds += `${key}=${equipment.id},`
            }
        })
        const encryptedLink = encryptAES256(equipmentIds.slice(0, -1))
        const shareableLink = `${baseUrl}/#${encryptedLink}`
        navigator.clipboard.writeText(shareableLink).then(() => {
            enqueueSnackbar("Shareable link copied to clipboard!", { variant: 'success' })
        }).catch(err => {
            console.error("Error copying shareable link:", err)
        })
    }

    return (
        <>
            <Box
                sx={{
                    my: 12,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: 1,
                    gridAutoColumns: '1fr',
                    transform: 'rotate(-45deg)'
                }}
            >
                {Object.entries(currentSet).map((value, index) => (
                    <Box key={index}
                        onClick={() => onChooseEquipment(CategorySetOrder[index], value[0])}
                        sx={{
                            border: value[1] ? `1px solid ${GradeColor[value[1].grade]}` : 'none',
                            ...equipmentStyles(value[1]?.grade),
                            ...gridColumnRows[index]!,
                            '&:hover .remove-btn': { opacity: 1 }
                        }}
                    >
                        <Box sx={imageContainerStyles}>
                            {(value[1] && (
                                <Button color="warning" variant="contained" className="remove-btn"
                                    onClick={() => onRemoveEquipment(value[0])}
                                    sx={{
                                        position: 'absolute', top: '-50%', left: '50%',
                                        transform: 'translate(-50%,50%)', opacity: 0,
                                        '&:hover': { backgroundColor: 'primary' }
                                    }}
                                >
                                    <Iconify icon='eva:trash-2-outline' width={26} color='white' />
                                </Button>
                            ))}
                            <Image
                                src={value[1]?.image ?? `/assets/equipments/placeholder/${value[0]}.webp`}
                                alt={value[1]?.name ?? value[0]}
                                width={48} height={48}
                            />
                        </Box>
                    </Box>
                ))}
            </Box>
            <Stack justifyContent='center' direction='row' gap={2}>
                <Button variant="contained" color="error" onClick={onResetEquipment}>
                    Reset
                </Button>
                <Button variant="contained" color="info" onClick={createShareableLink}>
                    Share
                </Button>
            </Stack>
        </>
    )
}