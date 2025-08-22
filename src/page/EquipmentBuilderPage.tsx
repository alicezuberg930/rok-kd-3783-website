"use client"
import { Equipment } from "@/@types/equipment";
import { Category, Grade, GradeColor, StatType } from "@/@types/equipment";
import { equipments } from "@/_mock/equipments";
import { deepObjectComparison } from "@/utils/comparison";
import { Box, Button, Card, Container, IconButton, List, ListItem, ListItemIcon, ListItemText, Stack, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import { useSnackbar } from "@/components/snackbar";
import React, { useEffect, useState } from "react";
import Iconify from "@/components/iconify";
import EquipmentSetInfo from "@/sections/equipment-builder/EquipmentSetInfo";
import FilterEquipments from "@/sections/equipment-builder/FilterEquipments";
import { getComparator } from "@/components/table";

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

const CategorySet = [Category.helmet, Category.weapon, Category.chest, Category.gloves, Category.legs, Category.boots, Category.accessories, Category.accessories,]

type Props = {
    helmet: Equipment | null
    weapon: Equipment | null
    chest: Equipment | null
    gloves: Equipment | null
    legs: Equipment | null
    boots: Equipment | null
    accessories1: Equipment | null
    accessories2: Equipment | null
}

const baseSet: Props = {
    helmet: null,
    weapon: null,
    chest: null,
    gloves: null,
    legs: null,
    boots: null,
    accessories1: null,
    accessories2: null
}

export default function EquipmentBuilderPage() {
    const [currentSet, setCurrentSet] = useState<Props>(baseSet)
    const [currentAccessoriesSlot, setCurrentAccessoriesSlot] = useState<string | null>(null)
    const [overAllStats, setOverAllStats] = useState<{ attributeType: StatType | string, attributeValue?: number }[]>([])
    const { enqueueSnackbar } = useSnackbar()
    // filter 
    const [filterName, setFilterName] = useState<string>("")
    const [filterCategory, setFilterCategory] = useState<string>("All")
    const [filterGrade, setFilterGrade] = useState<string>("All")

    const dataFiltered: Equipment[] = applyFilter({
        inputData: equipments,
        filterName,
        filterCategory,
        filterGrade
    })

    useEffect(() => {
        calculateOverallStats()
    }, [currentSet])

    const calculateOverallStats = () => {
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
        allStats.sort((a, b) => String(a.attributeType).localeCompare(String(b.attributeType)))
        setOverAllStats(allStats)
    }

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
        setOverAllStats([])
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
                                onClick={() => chooseEquipment(CategorySet[index], value[0])}
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
                                            onClick={() => removeEquipment(value[0])}
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
                        <Button variant="contained" color="error" onClick={resetEquipments}>
                            Reset
                        </Button>
                    </Stack>
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
        </Container >
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