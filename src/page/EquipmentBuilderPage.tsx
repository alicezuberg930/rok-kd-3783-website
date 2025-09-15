"use client"
import { Category, GradeColor, StatType, Equipment, baseSet, EquipmentSet } from "@/@types/equipment";
import { equipments } from "@/_mock/equipments";
import { deepObjectComparison } from "@/utils/comparison";
import { Box, Card, Container, List, ListItem, ListItemIcon, ListItemText, Stack, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import { useSnackbar } from "@/components/snackbar";
import React, { useEffect, useMemo, useState } from "react";
import Iconify from "@/components/iconify";
import EquipmentSetInfo from "@/sections/equipment-builder/EquipmentSetInfo";
import FilterEquipments from "@/sections/equipment-builder/FilterEquipments";
import { decryptAES256 } from "@/utils/encryption";
import EquipmentSetList from "@/sections/equipment-builder/EquipmentSetList";

export default function EquipmentBuilderPage() {
    const [currentSet, setCurrentSet] = useState<EquipmentSet>(baseSet)
    const [currentAccessoriesSlot, setCurrentAccessoriesSlot] = useState<string | null>(null)
    // const [overAllStats, setOverAllStats] = useState<{ attributeType: StatType | string, attributeValue?: number }[]>([])
    const { enqueueSnackbar } = useSnackbar()
    // filter 
    const [filterName, setFilterName] = useState<string>("")
    const [filterCategory, setFilterCategory] = useState<string>("All")
    const [filterGrade, setFilterGrade] = useState<string>("All")
    // data
    const dataFiltered: Equipment[] = applyFilter({
        inputData: equipments,
        filterName,
        filterCategory,
        filterGrade
    })

    useEffect(() => {
        const hashId = window.location.hash.slice(1)
        if (!hashId) return
        const newSet: EquipmentSet = { ...baseSet }
        const decrypted = decryptAES256(hashId)
        if (!decrypted) return
        const entries = decrypted.split(",").map(entry => entry.split("="))
        entries.forEach(([key, value]) => {
            const equipment = equipments.find(eq => eq.id == Number(value))
            newSet[key as keyof EquipmentSet] = equipment || null
        })
        setCurrentSet(newSet)
    }, [])

    const overAllStats: { attributeType: StatType | string, attributeValue?: number }[] = useMemo(() => {
        const allStats: { attributeType: StatType | string, attributeValue?: number }[] = []
        Object.entries(currentSet).map(eq => {
            if (eq[1] != null) {
                let chosenSet: Equipment = eq[1]
                if (chosenSet.attributes) {
                    chosenSet.attributes.forEach(attribute => {
                        if (!allStats.find(stat => stat.attributeType === attribute.statType)) {
                            allStats.push({ attributeType: attribute.statType, attributeValue: attribute.statValue })
                        } else {
                            const foundAttribute = allStats.find(stat => stat.attributeType === attribute.statType)
                            if (foundAttribute && foundAttribute.attributeValue) {
                                foundAttribute.attributeValue += attribute.statValue
                            }
                        }
                    })
                }
                if (chosenSet.attribute) allStats.push({ attributeType: chosenSet.attribute })
            }
        })
        return allStats.sort((a, b) => String(a.attributeType).localeCompare(String(b.attributeType)))
    }, [currentSet])

    const setEquipment = (equipment: Equipment) => {
        if (equipment.category === Category.accessories) {
            // If I have already chosen the first accessories but still haven't clicked on the accessories slot
            if (currentSet.accessories1 && !currentAccessoriesSlot) {
                // If the 2nd equipment I choose is the same as the first accessories 
                if (deepObjectComparison(currentSet.accessories1, equipment)) {
                    enqueueSnackbar("Cannot choose the same accessories twice", { variant: 'error' })
                    return
                }
                setCurrentSet(prev => ({ ...prev, accessories2: equipment }))
            }
            // If I haven't chosen the first accessories and haven't clicked on the accessories slot
            if (!currentSet.accessories1 && !currentAccessoriesSlot) {
                setCurrentSet(prev => ({ ...prev, accessories1: equipment }))
            }
            // If I already clicked on the accessories slot (1 or 2)
            if (currentAccessoriesSlot) {
                // If I clicked on the 2nd accessories slot but still haven't chosen an item. it compare the item i choose with the 1st accessories
                if (currentSet.accessories1 && currentAccessoriesSlot === "accessories2" && !currentSet.accessories2 && deepObjectComparison(currentSet.accessories1, equipment)) {
                    enqueueSnackbar("Cannot choose the same accessories twice", { variant: 'error' })
                    return
                }
                // If I clicked on the 1nd accessories slot but still haven't chosen an item. it compare the item i choose with the 2nd accessories
                if (currentSet.accessories2 && currentAccessoriesSlot === "accessories1" && !currentSet.accessories1 && deepObjectComparison(currentSet.accessories2, equipment)) {
                    enqueueSnackbar("Cannot choose the same accessories twice", { variant: 'error' })
                    return
                }
                // If both accessories has been chosen but I want to change 1 of them
                if (currentSet.accessories1 && currentSet.accessories2) {
                    if (currentAccessoriesSlot === "accessories1" && deepObjectComparison(currentSet.accessories2, equipment)) {
                        enqueueSnackbar("Cannot choose the same accessories twice", { variant: 'error' })
                        return
                    }
                    if (currentAccessoriesSlot === "accessories2" && deepObjectComparison(currentSet.accessories1, equipment)) {
                        enqueueSnackbar("Cannot choose the same accessories twice", { variant: 'error' })
                        return
                    }
                }
                setCurrentSet(prev => ({ ...prev, [currentAccessoriesSlot]: equipment }))
            }
        } else {
            setCurrentSet(prev => ({ ...prev, [equipment.category]: equipment }))
        }
    }

    const chooseEquipment = (category: Category, accessoriesSlot?: string) => {
        if (accessoriesSlot) setCurrentAccessoriesSlot(accessoriesSlot)
        setFilterCategory(category)
    }

    const resetEquipments = () => {
        setCurrentSet(baseSet)
        setCurrentAccessoriesSlot(null)
        setFilterName("")
        setFilterCategory("All")
        setFilterGrade("All")
    }

    const removeEquipment = (slot: string) => {
        setCurrentSet(prev => ({ ...prev, [slot]: null }))
    }

    const handleFilterName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterName(event.target.value)
    }

    const handleFilterCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterCategory(event.target.value)
    }

    const handleFilterGrade = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterGrade(event.target.value)
    }

    return (
        <Container maxWidth='xl'>
            <Stack direction={{ sm: 'column', lg: 'row' }} sx={{ overflowY: 'hidden', gap: 2 }}>
                <Card
                    sx={{
                        p: 1, width: { sm: '100%', lg: '30%' },
                        height: { sm: 'fit-content', lg: '100vh' },
                        overflowY: 'auto', overflowX: 'hidden',
                        scrollbarWidth: 'none', // Firefox
                        '&::-webkit-scrollbar': { display: 'none' }, // Chrome, Safari, Edge

                    }}
                >
                    <Typography align="center" variant="h5" mb={2}>Set & Stats</Typography>
                    <EquipmentSetList
                        currentSet={currentSet}
                        onChooseEquipment={chooseEquipment}
                        onRemoveEquipment={removeEquipment}
                        onResetEquipment={resetEquipments}
                    />
                    <Card sx={{ mt: 3, bgcolor: 'rgb(128,128,128)', p: 2 }}>
                        <Typography gutterBottom variant="subtitle1" color='white'>Total Stats Value</Typography>
                        {overAllStats.length ? (
                            <List>
                                {overAllStats.length && overAllStats.map((stat, index) => (
                                    <ListItem key={index} sx={{ py: 0.2, px: 0, display: 'flex', alignItems: 'center' }}>
                                        <ListItemIcon sx={{ mr: 1 }}>
                                            <Iconify icon="mdi:circle" color='white' width={8} />
                                        </ListItemIcon>
                                        <ListItemText
                                            sx={{ flex: 1 }}
                                            primary={
                                                <Typography variant="body2" sx={{ fontSize: '12px', color: 'white' }}>
                                                    {stat.attributeType}
                                                </Typography>
                                            }
                                        />
                                        {stat.attributeValue && (
                                            <ListItemText
                                                sx={{ flex: 'none' }}
                                                primary={
                                                    <Typography variant="body2" sx={{ fontSize: '12px', color: 'white' }}>
                                                        +{stat.attributeValue}%
                                                    </Typography>
                                                }
                                            />
                                        )}
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                            <Box py={4}>
                                <Typography sx={{ textAlign: 'center', fontSize: '12px', color: 'white' }} gutterBottom>
                                    No equipment equipped
                                </Typography>
                                <Typography sx={{ textAlign: 'center', fontSize: '12px', color: 'white' }}>
                                    Equip items to see your stats here
                                </Typography>
                            </Box>
                        )}
                    </Card>
                </Card>
                <Card sx={{ p: 1, width: { sm: '100%', lg: '70%' }, height: { sm: 'fit-content', lg: '100vh' }, overflowY: 'auto', overflowX: 'hidden' }}>
                    <Typography align="center" variant="h5" mb={2}>Equipment List</Typography>
                    <FilterEquipments
                        onFilterName={handleFilterName}
                        onFilterCategory={handleFilterCategory}
                        onFilterGrade={handleFilterGrade}
                    />
                    <EquipmentSetInfo
                        currentSet={currentSet}
                        onChooseEquipment={chooseEquipment}
                    />
                    <Box
                        gap={1}
                        display='grid'
                        gridTemplateColumns={{
                            xs: 'repeat(4, 1fr)',
                            md: 'repeat(7, 1fr)',
                            lg: 'repeat(9, 1fr)',
                        }}
                    >
                        {dataFiltered.map((equipment, i) => (
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
        </Container>
    )
}

function applyFilter({
    inputData,
    filterName,
    filterCategory,
    filterGrade,
}: {
    inputData: Equipment[]
    filterName: string
    filterCategory: string,
    filterGrade: string,
}) {
    const stabilizedThis = inputData.map((el, index) => [el, index] as const)
    inputData = stabilizedThis.map((el) => el[0])
    if (filterName) {
        inputData = inputData.filter((input) => input.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1)
    }
    if (filterCategory && filterCategory !== "All") {
        inputData = inputData.filter((input) => String(input.category).indexOf(filterCategory) !== -1)
    }
    if (filterGrade && filterGrade !== "All") {
        inputData = inputData.filter((input) => String(input.grade).indexOf(filterGrade) !== -1)
    }
    return inputData
}