import { Category, CategorySetOrder, EquipmentSet, Grade, GradeColor } from "@/@types/equipment";
import { Box, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import Image from "next/image";

const equipmentStyles = (grade?: Grade) => {
    return {
        position: 'relative',
        height: '100%',
        paddingBottom: '100%',
        boxShadow: `inset -1px -1px 10px 0 ${grade ? GradeColor[grade] : '#9C9A9C'}, inset 1px 1px 10px 0 ${grade ? GradeColor[grade] : '#9C9A9C'}`,
        padding: 1,
        borderRadius: 2,
        background: 'rgb(128,128,128,.5)',
    }
}

type Props = {
    currentSet: EquipmentSet,
    onChooseEquipment: (category: Category, accessoriesSlot?: string) => void
}

export default function EquipmentSetInfo({ currentSet, onChooseEquipment }: Props) {
    return (
        <Box
            gap={2}
            display='grid'
            gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)'
            }}
            mb={4}
        >
            {Object.entries(currentSet).map((equipment, index) => (
                <Box key={index}
                    onClick={() => onChooseEquipment(CategorySetOrder[index], equipment[0])}
                    sx={{ ...equipmentStyles(equipment[1]?.grade), cursor: 'pointer' }}
                >
                    <Typography variant="button" color="white">{equipment[0]}</Typography>
                    <Stack mt={2}>
                        {!equipment[1] ? (
                            <>
                                <Typography sx={{ textAlign: 'center', fontSize: '12px', color: 'white' }} gutterBottom>
                                    No equipment equipped
                                </Typography>
                                <Typography sx={{ textAlign: 'center', fontSize: '12px', color: 'white' }}>
                                    Clich here to choose an equipment
                                </Typography>
                            </>
                        ) : (
                            <>
                                <Stack direction={'row'} gap={2} position={'relative'} alignItems={'center'}>
                                    <Image
                                        src={equipment[1]?.image ?? `/assets/equipments/placeholder/${equipment[0]}.webp`}
                                        alt={equipment[1]?.name ?? equipment[0]}
                                        width={48} height={48}
                                    />
                                    <Typography variant="subtitle1" sx={{ color: 'white' }}>
                                        {equipment[1]?.name}
                                    </Typography>
                                </Stack>
                            </>
                        )}
                    </Stack>
                    {equipment[1] && (
                        <List>
                            {equipment[1].attributes ? equipment[1].attributes.map((stat, index) => (
                                <ListItem key={index} sx={{ py: 0.2, px: 0, display: 'flex', alignItems: 'center' }}>
                                    <ListItemText
                                        sx={{ flex: 1 }}
                                        primary={
                                            <Typography variant="body2" sx={{ fontSize: '12px', color: 'white' }}>
                                                {stat.statType}
                                            </Typography>
                                        }
                                    />
                                    <ListItemText
                                        sx={{ flex: 'none' }}
                                        primary={
                                            <Typography variant="body2" sx={{ fontSize: '12px', color: 'white' }}>
                                                +{stat.statValue}%
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            )) : (
                                <ListItemText
                                    sx={{ flex: 1 }}
                                    primary={
                                        <Typography variant="body2" sx={{ fontSize: '12px', color: 'white' }}>
                                            {equipment[1].attribute}
                                        </Typography>
                                    }
                                />
                            )}
                        </List>
                    )}
                </Box>
            ))}

        </Box>
    )
}