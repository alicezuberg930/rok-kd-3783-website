"use client"
import { Equipment } from "@/@types/equipment";
import { Category, Grade, GradeColor, StatType } from "@/_mock/equipments/enum";
import { equipments } from "@/_mock/equipments/equipments";
import { deepObjectComparison } from "@/utils/comparison";
import { Box, Button, Card, Container, List, ListItem, ListItemIcon, ListItemText, Stack, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import { useSnackbar } from "@/components/snackbar";
import React, { useEffect, useState } from "react";
import Iconify from "@/components/iconify";

const equipmentStyles = (grade?: Grade) => {
    return {
        height: 0,
        paddingBottom: '100%',
        boxShadow: `inset -1px -1px 10px 0 ${grade ? GradeColor[grade] : '#9C9A9C'}, inset 1px 1px 10px 0 ${grade ? GradeColor[grade] : '#9C9A9C'}`,
        borderRadius: 1,
        cursor: 'pointer',
        background: grade ? 'transparent' : 'gray',
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

type Props = {
    helmet?: Equipment
    chest?: Equipment
    weapon?: Equipment
    gloves?: Equipment
    legs?: Equipment
    accessories1?: Equipment
    accessories2?: Equipment
    boots?: Equipment
}

export default function EquipmentBuilderPage() {
    const [currentEquipments, setCurrentEquipments] = useState<Props>({})
    const [equipmentList, setEquipmentList] = useState<Equipment[]>(equipments)
    const [currentAccessoriesSlot, setCurrentAccessoriesSlot] = useState<string | null>(null)
    const [overAllStats, setOverAllStats] = useState<{ attributeType: StatType | string, attributeValue?: number }[]>([])
    const { enqueueSnackbar } = useSnackbar()

    useEffect(() => {
        calculateOverallStats()
    }, [currentEquipments])

    const calculateOverallStats = () => {
        const allStats: { attributeType: StatType | string, attributeValue?: number }[] = []
        Object.entries(currentEquipments).map(eq => {
            let thisEq: Equipment = eq[1]
            if (thisEq.attributes) {
                thisEq.attributes.forEach(attribute => {
                    if (!allStats.find(stat => stat.attributeType === attribute.statType)) {
                        allStats.push({ attributeType: attribute.statType, attributeValue: attribute.statValue })
                    } else {
                        const foundAttribute = allStats.find(stat => stat.attributeType === attribute.statType)
                        if (foundAttribute && foundAttribute.attributeValue)
                            foundAttribute.attributeValue += attribute.statValue
                    }
                })
            }
            if (thisEq.attribute) {
                allStats.push({ attributeType: thisEq.attribute })
            }
        })
        setOverAllStats(allStats)
    }

    const setEquipment = (equipment: Equipment) => {
        if (equipment.category === Category.accessories) {
            // If I have already chosen the first accessories but still haven't clicked on the accessories slot
            if (currentEquipments.accessories1 && !currentAccessoriesSlot) {
                // If the 2nd equipment I choose is the same as the first accessories 
                if (deepObjectComparison(currentEquipments.accessories1, equipment)) {
                    enqueueSnackbar("Cannot choose the same accessories twice", { variant: 'error' })
                    return
                }
                setCurrentEquipments(prev => ({ ...prev, accessories2: equipment }))
            }
            // If I haven't chosen the first accessories and haven't clicked on the accessories slot
            if (!currentEquipments.accessories1 && !currentAccessoriesSlot) {
                setCurrentEquipments(prev => ({ ...prev, accessories1: equipment }))
            }
            // If I already clicked on the accessories slot (1 or 2)
            if (currentAccessoriesSlot) {
                // If I clicked on the 2nd accessories slot but still haven't chosen an item. it compare the item i choose with the 1st accessories
                if (currentEquipments.accessories1 && currentAccessoriesSlot === "accessories2" && !currentEquipments.accessories2 && deepObjectComparison(currentEquipments.accessories1, equipment)) {
                    enqueueSnackbar("Cannot choose the same accessories twice", { variant: 'error' })
                    return
                }
                // If I clicked on the 1nd accessories slot but still haven't chosen an item. it compare the item i choose with the 2nd accessories
                if (currentEquipments.accessories2 && currentAccessoriesSlot === "accessories1" && !currentEquipments.accessories1 && deepObjectComparison(currentEquipments.accessories2, equipment)) {
                    enqueueSnackbar("Cannot choose the same accessories twice", { variant: 'error' })
                    return
                }
                // If both accessories has been chosen but I want to change 1 of them
                if (currentEquipments.accessories1 && currentEquipments.accessories2) {
                    if (currentAccessoriesSlot === "accessories1" && deepObjectComparison(currentEquipments.accessories2, equipment)) {
                        enqueueSnackbar("Cannot choose the same accessories twice", { variant: 'error' })
                        return
                    }
                    if (currentAccessoriesSlot === "accessories2" && deepObjectComparison(currentEquipments.accessories1, equipment)) {
                        enqueueSnackbar("Cannot choose the same accessories twice", { variant: 'error' })
                        return
                    }
                }
                setCurrentEquipments(prev => ({ ...prev, [currentAccessoriesSlot]: equipment }))
            }
        } else {
            setCurrentEquipments(prev => ({ ...prev, [equipment.category]: equipment }))
        }
    }

    const chooseEquipment = (category: Category, accessoriesSlot?: string) => {
        if (accessoriesSlot) setCurrentAccessoriesSlot(accessoriesSlot)
        setEquipmentList(equipments.filter(equipment => equipment.category === category))
    }

    const resetEquipments = () => {
        setEquipmentList(equipments)
        setCurrentEquipments({})
        setCurrentAccessoriesSlot(null)
        setOverAllStats([])
    }

    return (
        <Container maxWidth='xl'>
            <Stack direction={{ sm: 'column', lg: 'row' }} sx={{ overflowY: 'hidden', gap: 2 }}>
                <Card sx={{ p: 1, width: { sm: '100%', lg: '30%' }, height: { sm: 'fit-content', lg: '100vh' }, overflowY: 'auto', overflowX: 'hidden' }}>
                    <Typography align="center" variant="h5" mb={2}>Set & Stats</Typography>
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
                        {/* slot helmet */}
                        <Box
                            component="div"
                            onClick={() => chooseEquipment(Category.helmet)}
                            sx={{ gridColumn: 4, border: currentEquipments.helmet ? `1px solid ${GradeColor[currentEquipments.helmet.grade]}` : 'none', ...equipmentStyles(currentEquipments.helmet?.grade) }}
                        >
                            <Box sx={imageContainerStyles}>
                                <Image
                                    src={currentEquipments.helmet?.image ?? "/assets/equipments/placeholder/helmet.webp"}
                                    alt={currentEquipments.helmet?.name ?? "helmet"}
                                    width={48} height={48}
                                />
                            </Box>
                        </Box>
                        {/* slot weapon */}
                        <Box
                            component="div"
                            onClick={() => chooseEquipment(Category.weapon)}
                            sx={{ gridColumn: 2, gridRow: 2, ...equipmentStyles(currentEquipments.weapon?.grade) }}
                        >
                            <Box sx={imageContainerStyles}>
                                <Image
                                    src={currentEquipments.weapon?.image ?? "/assets/equipments/placeholder/weapon.webp"}
                                    alt={currentEquipments.weapon?.name ?? "weapon"}
                                    width={48} height={48}
                                />
                            </Box>
                        </Box>
                        {/* slot chest */}
                        <Box
                            component="div"
                            onClick={() => chooseEquipment(Category.chest)}
                            sx={{ gridColumn: 3, gridRow: 2, ...equipmentStyles(currentEquipments.chest?.grade) }}
                        >
                            <Box sx={imageContainerStyles}>
                                <Image
                                    src={currentEquipments.chest?.image ?? "/assets/equipments/placeholder/chest.webp"}
                                    alt={currentEquipments.chest?.name ?? "chest"}
                                    width={48} height={48}
                                />
                            </Box>
                        </Box>
                        {/* slot gloves */}
                        <Box
                            component="div"
                            onClick={() => chooseEquipment(Category.gloves)}
                            sx={{ gridColumn: 3, gridRow: 3, ...equipmentStyles(currentEquipments.gloves?.grade) }}
                        >
                            <Box sx={imageContainerStyles}>
                                <Image
                                    src={currentEquipments.gloves?.image ?? "/assets/equipments/placeholder/gloves.webp"}
                                    alt={currentEquipments.gloves?.name ?? "gloves"}
                                    width={48} height={48}
                                />
                            </Box>
                        </Box>
                        {/* slot legs */}
                        <Box
                            component="div"
                            onClick={() => chooseEquipment(Category.legs)}
                            sx={{ gridColumn: 2, gridRow: 3, ...equipmentStyles(currentEquipments.legs?.grade) }}
                        >
                            <Box sx={imageContainerStyles}>
                                <Image
                                    src={currentEquipments.legs?.image ?? "/assets/equipments/placeholder/legs.webp"}
                                    alt={currentEquipments.legs?.name ?? "legs"}
                                    width={48} height={48}
                                />
                            </Box>
                        </Box>
                        {/* slot boot */}
                        <Box
                            component="div"
                            onClick={() => chooseEquipment(Category.boots)}
                            sx={{ gridRow: 4, ...equipmentStyles(currentEquipments.boots?.grade) }}
                        >
                            <Box sx={imageContainerStyles}>
                                <Image
                                    src={currentEquipments.boots?.image ?? "/assets/equipments/placeholder/boots.webp"}
                                    alt={currentEquipments.boots?.name ?? "boots"}
                                    width={48} height={48}
                                />
                            </Box>
                        </Box>
                        {/* slot accessories 1 */}
                        <Box
                            component="div"
                            onClick={() => chooseEquipment(Category.accessories, "accessories1")}
                            sx={{ gridRow: 3, ...equipmentStyles(currentEquipments.accessories1?.grade) }}
                        >
                            <Box sx={imageContainerStyles}>
                                <Image
                                    src={currentEquipments.accessories1?.image ?? "/assets/equipments/placeholder/accessory1.webp"}
                                    alt={currentEquipments.accessories1?.name ?? "accessory1"}
                                    width={48} height={48}
                                />
                            </Box>
                        </Box>
                        {/* slot accessories 2 */}
                        <Box
                            component="div"
                            onClick={() => chooseEquipment(Category.accessories, "accessories2")}
                            sx={{ gridRow: 4, gridColumn: 2, ...equipmentStyles(currentEquipments.accessories2?.grade) }}
                        >
                            <Box sx={imageContainerStyles}>
                                <Image
                                    src={currentEquipments.accessories2?.image ?? "/assets/equipments/placeholder/accessory2.webp"}
                                    alt={currentEquipments.accessories2?.name ?? "accessory2"}
                                    width={48} height={48}
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Stack justifyContent='center' direction='row' gap={2}>
                        <Button variant="contained" color="error" onClick={resetEquipments}>
                            Reset
                        </Button>
                    </Stack>

                    <Card sx={{ mx: 2, mt: 3, bgcolor: 'GrayText' }}>
                        {overAllStats.length ? (
                            <Box>
                                <List>
                                    {overAllStats.length && overAllStats.map((stat, index) => (
                                        <ListItem key={index} sx={{ paddingY: 0.2, display: 'flex', alignItems: 'center' }}>
                                            <ListItemIcon sx={{ mr: 1 }}>
                                                <Iconify icon="mdi:circle" color='white' width={8} />
                                            </ListItemIcon>
                                            <ListItemText
                                                sx={{ flex: 1 }}
                                                primary={
                                                    <Typography variant="body2" sx={{ fontSize: '0.8rem', color: 'white' }}>
                                                        {stat.attributeType}
                                                    </Typography>
                                                }
                                            />
                                            {stat.attributeValue && (
                                                <ListItemText
                                                    primary={
                                                        <Typography variant="body2" sx={{ fontSize: '0.8rem', color: 'white' }}>
                                                            +{stat.attributeValue}%
                                                        </Typography>
                                                    }
                                                    sx={{ flex: 'none' }}
                                                />
                                            )}
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        ) : (
                            <Box py={4}>
                                <Typography align="center" sx={{ fontSize: '0.8rem', color: 'white' }} gutterBottom>
                                    No equipment equipped
                                </Typography>
                                <Typography align="center" sx={{ fontSize: '0.8rem', color: 'white' }}>
                                    Equip items to see your stats here
                                </Typography>
                            </Box>
                        )}
                    </Card>
                </Card>
                <Card sx={{ p: 1, width: { sm: '100%', lg: '70%' }, height: { sm: 'fit-content', lg: '100vh' }, overflowY: 'auto', overflowX: 'hidden' }}>
                    <Typography align="center" variant="h5" mb={2}>Equipment List</Typography>
                    <Box
                        gap={1}
                        display='grid'
                        gridTemplateColumns={{
                            xs: 'repeat(4, 1fr)',
                            md: 'repeat(7, 1fr)',
                            lg: 'repeat(9, 1fr)',
                        }}
                    >
                        {equipmentList.map((equipment, i) => (
                            <Tooltip
                                key={i} title={equipment.name} arrow placement="top"
                                slotProps={{
                                    popper: {
                                        modifiers: [{ name: 'offset', options: { offset: [0, -8] } }]
                                    }
                                }}
                            >
                                <Box
                                    sx={{ background: GradeColor[equipment.grade], borderRadius: 1, p: 2 }}
                                    onClick={() => setEquipment(equipment)}
                                >
                                    <Box sx={{ position: 'relative', aspectRatio: '1/1' }}>
                                        <Image src={equipment.image} alt={equipment.name} objectFit="cover" fill />
                                    </Box>
                                </Box>
                            </Tooltip>
                        ))}
                    </Box>
                </Card>
            </Stack>
        </Container >
    )
}