export enum Category {
    helmet = "helmet",
    chest = "chest",
    weapon = "weapon",
    gloves = "gloves",
    legs = "legs",
    boots = "boots",
    accessories = "accessories"
}

export enum Grade {
    normal = "normal",
    advanced = "advanced",
    elite = "elite",
    epic = "epic",
    legendary = "legendary"
}

export enum StatType {
    cavalryHP = "Cavalry Health",
    cavalryDEF = "Cavalry Defense",
    cavalryATK = "Cavalry Attack",
    infantryHP = "Infantry Health",
    infantryDEF = "Infantry Defense",
    infantryATK = "Infantry Attack",
    archerHP = "Archer Health",
    archerDEF = "Archer Defense",
    archerATK = "Archer Attack",
    siegeHP = "Siege Health",
    siegeDEF = "Siege Defense",
    siegeATK = "Siege Attack",
    dmgToBarbarians = "DMG to Barbarians",
    expGain = "EXP Gain",
    gatheringSpeed = "Gathering Speed",
    infantryMarchSpeed = "March Speed (Infantry)",
    archerMarchSpeed = "March Speed (Archer)",
    cavalryMarchSpeed = "March Speed (Cavalry)",
    siegeMarchSpeed = "March Speed (Siege)",
    allMarchSpeed = "March Speed",
    troopATK = "Troop Attack",
    troopDEF = "Troop Defense",
    troopHP = "Troop Health",
    // weird stats
    skillDmg = "Skill Damage",
    normalAtkDmg = "Normal Attack Damage",
    counterAtkDmg = "Counterattack Damage",
    rssGatherBonus = "Resource Gathered Bonus",
    counterAtkDmgTaken = "Counterattack Damage Taken",
    unitCapacity = "Unit Capacity"
}

export const GradeColor = {
    [Grade.legendary]: '#e56707',
    [Grade.epic]: '#c55bd2',
    [Grade.elite]: '#0398bc',
    [Grade.advanced]: '#05b919',
    [Grade.normal]: '#878a8c',
}

export type Equipment = {
    id: number
    name: string
    category: Category
    image: string
    grade: Grade
    gradeOrder: number
    attributes?: { statType: StatType, statValue: number }[]
    goldRequired: number
    attribute?: string
}

export const CategorySet = [Category.helmet, Category.weapon, Category.chest, Category.gloves, Category.legs, Category.boots, Category.accessories, Category.accessories,]

export type EquipmentSet = {
    helmet: Equipment | null
    weapon: Equipment | null
    chest: Equipment | null
    gloves: Equipment | null
    legs: Equipment | null
    boots: Equipment | null
    accessories1: Equipment | null
    accessories2: Equipment | null
}

export const baseSet: EquipmentSet = {
    helmet: null,
    weapon: null,
    chest: null,
    gloves: null,
    legs: null,
    boots: null,
    accessories1: null,
    accessories2: null
}