import slugify from "slugify";
import { Category, Equipment, Grade, Material, StatType } from "@/@types/equipment";

export const helmetEquipments = [
    {
        id: 0,
        name: "Pride of the Khan",
        category: Category.helmet,
        image: "",
        goldRequired: 30000000,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.cavalryDEF,
                statValue: 15
            },
            {
                statType: StatType.archerHP,
                statValue: 8
            }
        ],
        materials: [
            { name: Material.leather, amount: 50 },
            { name: Material.ebony, amount: 10 }
        ]
    },
    {
        id: 1,
        name: "Helm of the Conqueror",
        category: Category.helmet,
        image: "",
        goldRequired: 30000000,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.infantryDEF,
                statValue: 15
            },
            {
                statType: StatType.cavalryHP,
                statValue: 8
            }
        ],
        materials: [
            { name: Material.leather, amount: 10 },
            { name: Material.ironOre, amount: 50 }
        ]
    },
    {
        id: 2,
        name: "Ancestral Mask of Night",
        category: Category.helmet,
        image: "",
        goldRequired: 30000000,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.archerATK,
                statValue: 15
            },
            {
                statType: StatType.infantryATK,
                statValue: 8
            }
        ],
        materials: [
            { name: Material.ebony, amount: 50 },
            { name: Material.ironOre, amount: 10 }
        ]
    },
    {
        id: 3,
        name: "Dragon's Breath Helm",
        category: Category.helmet,
        image: "",
        goldRequired: 20000000,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.archerATK,
                statValue: 11
            },
            {
                statType: StatType.cavalryATK,
                statValue: 3
            },
            {
                statType: StatType.infantryDEF,
                statValue: 4
            }
        ],
        materials: [
            { name: Material.leather, amount: 10 },
            { name: Material.ebony, amount: 40 },
            { name: Material.ironOre, amount: 10 }
        ]
    },
    {
        id: 4,
        name: "Gold Helm of the Eternal Empire",
        category: Category.helmet,
        image: "",
        goldRequired: 20000000,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.infantryDEF,
                statValue: 11
            },
            {
                statType: StatType.archerHP,
                statValue: 4
            },
            {
                statType: StatType.cavalryHP,
                statValue: 3
            },
        ],
        materials: [
            { name: Material.leather, amount: 10 },
            { name: Material.ebony, amount: 10 },
            { name: Material.ironOre, amount: 40 }
        ]
    },
    {
        id: 5,
        name: "Diadem of the Glorious Goddess",
        category: Category.helmet,
        image: "",
        goldRequired: 20000000,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.troopATK,
                statValue: 8
            },
            {
                statType: StatType.cavalryMarchSpeed,
                statValue: 2
            }
        ],
        materials: [
            { name: Material.leather, amount: 20 },
            { name: Material.ebony, amount: 20 },
            { name: Material.ironOre, amount: 20 }
        ]
    },
    {
        id: 6,
        name: "War Helm of the Hellish Wasteland",
        category: Category.helmet,
        image: "",
        goldRequired: 20000000,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.cavalryDEF,
                statValue: 11
            },
            {
                statType: StatType.infantryATK,
                statValue: 4
            },
            {
                statType: StatType.archerDEF,
                statValue: 3
            },
        ],
        materials: [
            { name: Material.leather, amount: 40 },
            { name: Material.ebony, amount: 10 },
            { name: Material.ironOre, amount: 10 }
        ]
    },
    {
        id: 7,
        name: "Fierce Wolf's Helmet",
        category: Category.helmet,
        image: "",
        goldRequired: 30000000,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.siegeATK,
                statValue: 14.5
            },
            {
                statType: StatType.siegeMarchSpeed,
                statValue: 4
            }
        ],
        materials: [
            { name: Material.leather, amount: 20 },
            { name: Material.ebony, amount: 20 },
            { name: Material.ironOre, amount: 20 }
        ]
    },
    {
        id: 8,
        name: "Witch's Deadwood Crown",
        category: Category.helmet,
        image: "",
        goldRequired: 20000000,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.gatheringSpeed,
                statValue: 12
            },
            {
                statType: StatType.siegeATK,
                statValue: 4
            },
            {
                statType: StatType.siegeMarchSpeed,
                statValue: 2
            }
        ],
        materials: [
            { name: Material.animalBone, amount: 25 },
        ]
    },
    {
        id: 9,
        name: "Abyssal Visage",
        category: Category.helmet,
        image: "",
        goldRequired: 5000000,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.cavalryATK,
                statValue: 8
            },
            {
                statType: StatType.infantryATK,
                statValue: 3
            },
            {
                statType: StatType.archerATK,
                statValue: 3
            }
        ],
        materials: [
            { name: Material.leather, amount: 30 },
            { name: Material.ebony, amount: 10 },
            { name: Material.ironOre, amount: 10 }
        ]
    },
    {
        id: 10,
        name: "Witch's Lineage",
        category: Category.helmet,
        image: "",
        goldRequired: 5000000,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.infantryATK,
                statValue: 8
            },
            {
                statType: StatType.cavalryATK,
                statValue: 3
            },
            {
                statType: StatType.archerDEF,
                statValue: 3
            }
        ],
        materials: [
            { name: Material.leather, amount: 10 },
            { name: Material.ebony, amount: 10 },
            { name: Material.ironOre, amount: 30 }
        ]
    },
    {
        id: 11,
        name: "Knight's Steel Diadem",
        category: Category.helmet,
        image: "",
        goldRequired: 5000000,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.siegeHP,
                statValue: 8
            },
            {
                statType: StatType.siegeMarchSpeed,
                statValue: 2
            }
        ],
        materials: [
            { name: Material.leather, amount: 20 },
            { name: Material.ebony, amount: 20 },
            { name: Material.ironOre, amount: 20 }
        ]
    },
    {
        id: 12,
        name: "Mask of the Forest Guardian",
        category: Category.helmet,
        image: "",
        goldRequired: 6000000,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.gatheringSpeed,
                statValue: 8
            },
            {
                statType: StatType.siegeATK,
                statValue: 4
            },
            {
                statType: StatType.infantryATK,
                statValue: 4
            }
        ],
        materials: [
            { name: Material.animalBone, amount: 25 }
        ]
    },
    {
        id: 13,
        name: "Revival Helm",
        category: Category.helmet,
        image: "",
        goldRequired: 6000000,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.archerDEF,
                statValue: 7.5
            },
            {
                statType: StatType.infantryDEF,
                statValue: 5
            }
        ],
        materials: [
            { name: Material.ebony, amount: 30 },
            { name: Material.ironOre, amount: 10 }
        ]
    },
    {
        id: 14,
        name: "Expedition War Helm",
        category: Category.helmet,
        image: "",
        goldRequired: 2000000,
        grade: Grade.elite,
        gradeOrder: 3,
        attributes: [
            {
                statType: StatType.cavalryDEF,
                statValue: 6
            },
            {
                statType: StatType.infantryDEF,
                statValue: 2
            },
            {
                statType: StatType.expGain,
                statValue: 3
            }
        ],
        materials: [
            { name: Material.leather, amount: 40 },
            { name: Material.ironOre, amount: 20 }
        ]
    },
    {
        id: 15,
        name: "Harvester's Headscarf",
        category: Category.helmet,
        image: "",
        goldRequired: 3000000,
        grade: Grade.elite,
        gradeOrder: 3,
        attributes: [
            {
                statType: StatType.gatheringSpeed,
                statValue: 5
            },
            {
                statType: StatType.siegeATK,
                statValue: 3
            },
            {
                statType: StatType.siegeDEF,
                statValue: 3
            }
        ],
        materials: [
            { name: Material.animalBone, amount: 30 }
        ]
    },
    {
        id: 16,
        name: "Windswept War Helm",
        category: Category.helmet,
        image: "",
        goldRequired: 3000000,
        grade: Grade.elite,
        gradeOrder: 3,
        attributes: [
            {
                statType: StatType.infantryATK,
                statValue: 4.5
            },
            {
                statType: StatType.cavalryATK,
                statValue: 4.5
            },
            {
                statType: StatType.allMarchSpeed,
                statValue: 3
            }
        ],
        materials: [
            { name: Material.leather, amount: 30 },
            { name: Material.ironOre, amount: 30 }
        ]
    },
    {
        id: 17,
        name: "Helm of Fear",
        category: Category.helmet,
        image: "",
        goldRequired: 500000,
        grade: Grade.advanced,
        gradeOrder: 2,
        attributes: [
            {
                statType: StatType.cavalryATK,
                statValue: 4
            },
            {
                statType: StatType.infantryDEF,
                statValue: 2
            },
            {
                statType: StatType.dmgToBarbarians,
                statValue: 3
            },
        ],
        materials: [
            { name: Material.leather, amount: 40 },
            { name: Material.ironOre, amount: 10 }
        ]
    },
    {
        id: 18,
        name: "Helm of Phoenix",
        category: Category.helmet,
        image: "",
        goldRequired: 500000,
        grade: Grade.advanced,
        gradeOrder: 2,
        attributes: [
            {
                statType: StatType.archerDEF,
                statValue: 4
            },
            {
                statType: StatType.infantryHP,
                statValue: 2
            },
            {
                statType: StatType.dmgToBarbarians,
                statValue: 3
            }
        ],
        materials: [
            { name: Material.ebony, amount: 40 },
            { name: Material.ironOre, amount: 10 }
        ]
    },
    {
        id: 19,
        name: "Iron Helm",
        category: Category.helmet,
        image: "",
        goldRequired: 100000,
        grade: Grade.normal,
        gradeOrder: 1,
        attributes: [
            {
                statType: StatType.infantryATK,
                statValue: 3
            }
        ],
        materials: [
            { name: Material.ironOre, amount: 80 }
        ]
    }
].map(e => ({
    ...e, image: `/assets/equipments/helmets/${slugify(e.name, { remove: /['"]/g, strict: true })}.webp`
}))

export const chestEquipments = [
    {
        id: 20,
        name: "Shadow Legion's Retribution",
        category: Category.chest,
        image: "",
        goldRequired: 15000000,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.cavalryATK,
                statValue: 12
            },
            {
                statType: StatType.infantryATK,
                statValue: 5
            },
            {
                statType: StatType.archerATK,
                statValue: 5
            }
        ],
        materials: [
            { name: Material.leather, amount: 40 },
            { name: Material.ebony, amount: 10 },
            { name: Material.ironOre, amount: 10 }
        ]
    },
    {
        id: 21,
        name: "The Milky Way",
        category: Category.chest,
        image: "",
        goldRequired: 15000000,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.archerHP,
                statValue: 12
            },
            {
                statType: StatType.cavalryHP,
                statValue: 6
            },
            {
                statType: StatType.expGain,
                statValue: 5
            }
        ],
        materials: [
            { name: Material.leather, amount: 10 },
            { name: Material.ebony, amount: 40 },
            { name: Material.ironOre, amount: 10 }
        ]
    },
    {
        id: 22,
        name: "Hope Cloak",
        category: Category.chest,
        image: "",
        goldRequired: 15000000,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.infantryDEF,
                statValue: 12
            },
            {
                statType: StatType.cavalryDEF,
                statValue: 5
            },
            {
                statType: StatType.archerDEF,
                statValue: 5
            }
        ],
        materials: [
            { name: Material.leather, amount: 10 },
            { name: Material.ebony, amount: 10 },
            { name: Material.ironOre, amount: 40 }
        ]
    },
    {
        id: 23,
        name: "Dragon's Breath Plate",
        category: Category.chest,
        image: "",
        goldRequired: 20000000,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.archerHP,
                statValue: 11
            },
            {
                statType: StatType.cavalryDEF,
                statValue: 5
            }
        ],
        materials: [
            { name: Material.leather, amount: 10 },
            { name: Material.ebony, amount: 40 },
            { name: Material.ironOre, amount: 10 }
        ]
    },
    {
        name: "Plate of the Eternal Empire",
        category: Category.chest,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.infantryATK,
                statValue: 11
            },
            {
                statType: StatType.archerDEF,
                statValue: 5
            }
        ]
    },
    {
        name: "Plate of the Glorious Goddess",
        category: Category.chest,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.troopDEF,
                statValue: 8
            },
            {
                statType: StatType.infantryMarchSpeed,
                statValue: 2
            }
        ]
    },
    {
        name: "Heavy Armor of the Hellish Wasteland",
        category: Category.chest,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.cavalryHP,
                statValue: 11
            },
            {
                statType: StatType.infantryATK,
                statValue: 5
            }
        ]
    },
    {
        name: "Vigilant Wolf's Leather Armor",
        category: Category.chest,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.siegeATK,
                statValue: 14.5
            },
            {
                statType: StatType.siegeMarchSpeed,
                statValue: 4
            }
        ]
    },
    {
        name: "Witch's Hexed Cloak",
        category: Category.chest,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.gatheringSpeed,
                statValue: 12
            },
            {
                statType: StatType.siegeDEF,
                statValue: 4
            },
            {
                statType: StatType.siegeMarchSpeed,
                statValue: 2
            }
        ]
    },
    {
        name: "Quinn's Soul",
        category: Category.chest,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.infantryATK,
                statValue: 8
            },
            {
                statType: StatType.archerHP,
                statValue: 4
            },
            {
                statType: StatType.dmgToBarbarians,
                statValue: 5
            }
        ]
    },
    {
        name: "Dark Lord's Blessing",
        category: Category.chest,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.cavalryDEF,
                statValue: 8
            },
            {
                statType: StatType.archerATK,
                statValue: 5
            }
        ]
    },
    {
        name: "Knight's Valorous Cloak",
        category: Category.chest,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.siegeATK,
                statValue: 8
            },
            {
                statType: StatType.siegeMarchSpeed,
                statValue: 2
            }
        ]
    },
    {
        name: "Robe of the Forest Guardian",
        category: Category.chest,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.gatheringSpeed,
                statValue: 8
            },
            {
                statType: StatType.siegeATK,
                statValue: 4
            },
            {
                statType: StatType.archerATK,
                statValue: 4
            }
        ]
    },
    {
        name: "Revival Plate",
        category: Category.chest,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.archerATK,
                statValue: 7.5
            },
            {
                statType: StatType.cavalryDEF,
                statValue: 5
            }
        ]
    },
    {
        name: "Commander's Heavy Armor",
        category: Category.chest,
        image: "",
        goldRequired: 0,
        grade: Grade.elite,
        gradeOrder: 3,
        attributes: [
            {
                statType: StatType.archerHP,
                statValue: 6
            },
            {
                statType: StatType.infantryATK,
                statValue: 3
            },
            {
                statType: StatType.expGain,
                statValue: 3
            }
        ]
    },
    {
        name: "Harvester Robes",
        category: Category.chest,
        image: "",
        goldRequired: 0,
        grade: Grade.elite,
        gradeOrder: 3,
        attributes: [
            {
                statType: StatType.gatheringSpeed,
                statValue: 5
            },
            {
                statType: StatType.siegeDEF,
                statValue: 3
            },
            {
                statType: StatType.siegeHP,
                statValue: 3
            }
        ]
    },
    {
        name: "Windswept Breastplate",
        category: Category.chest,
        image: "",
        goldRequired: 0,
        grade: Grade.elite,
        gradeOrder: 3,
        attributes: [
            {
                statType: StatType.infantryDEF,
                statValue: 4.5
            },
            {
                statType: StatType.cavalryDEF,
                statValue: 4.5
            },
            {
                statType: StatType.allMarchSpeed,
                statValue: 3
            }
        ]
    },
    {
        name: "Milanese Plate",
        category: Category.chest,
        image: "",
        goldRequired: 0,
        grade: Grade.advanced,
        gradeOrder: 2,
        attributes: [
            {
                statType: StatType.cavalryDEF,
                statValue: 4
            },
            {
                statType: StatType.archerATK,
                statValue: 2
            }
        ]
    },
    {
        name: "Infantry Breastplate",
        category: Category.chest,
        image: "",
        goldRequired: 0,
        grade: Grade.advanced,
        gradeOrder: 2,
        attributes: [
            {
                statType: StatType.infantryDEF,
                statValue: 4
            },
            {
                statType: StatType.cavalryHP,
                statValue: 2
            },
            {
                statType: StatType.dmgToBarbarians,
                statValue: 3
            }
        ]
    },
    {
        name: "Chain Mail",
        category: Category.chest,
        image: "",
        goldRequired: 0,
        grade: Grade.normal,
        gradeOrder: 1,
        attributes: [
            {
                statType: StatType.archerATK,
                statValue: 3
            }
        ]
    },
].map(e => ({
    ...e, image: `/assets/equipments/chests/${slugify(e.name, { remove: /['"]/g, strict: true })}.webp`
}))

export const weaponEquipments = [
    {
        name: "Twilight Epiphany",
        category: Category.weapon,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.siegeATK,
                statValue: 25
            },
            {
                statType: StatType.siegeMarchSpeed,
                statValue: 6
            }
        ]
    },
    {
        name: "Trial of the Lost Kingdom",
        category: Category.weapon,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.cavalryDEF,
                statValue: 15
            },
            {
                statType: StatType.infantryHP,
                statValue: 5
            },
            {
                statType: StatType.archerATK,
                statValue: 5
            }
        ]
    },
    {
        name: "The Hydra's Blast",
        category: Category.weapon,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.archerDEF,
                statValue: 25
            },
            {
                statType: StatType.cavalryDEF,
                statValue: 5
            }
        ]
    },
    {
        name: "Hammer of the Sun and Moon",
        category: Category.weapon,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.infantryATK,
                statValue: 25
            },
            {
                statType: StatType.archerHP,
                statValue: 5
            }
        ]
    },
    {
        name: "Sacred Dominion",
        category: Category.weapon,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.cavalryATK,
                statValue: 25
            },
            {
                statType: StatType.archerDEF,
                statValue: 5
            }
        ]
    },
    {
        name: "Dragon's Breath Bow",
        category: Category.weapon,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.archerDEF,
                statValue: 20
            },
            {
                statType: StatType.infantryHP,
                statValue: 5
            },
            {
                statType: StatType.cavalryHP,
                statValue: 5
            }
        ]
    },
    {
        name: "Shield of the Eternal Empire",
        category: Category.weapon,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.infantryATK,
                statValue: 20
            },
            {
                statType: StatType.archerATK,
                statValue: 5
            },
            {
                statType: StatType.cavalryATK,
                statValue: 5
            }
        ]
    },
    {
        name: "Scepter of the Glorious Goddess",
        category: Category.weapon,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.troopATK,
                statValue: 15
            },
            {
                statType: StatType.infantryMarchSpeed,
                statValue: 3
            }
        ]
    },
    {
        name: "Lance of the Hellish Wasteland",
        category: Category.weapon,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.cavalryATK,
                statValue: 20
            },
            {
                statType: StatType.infantryHP,
                statValue: 5
            },
            {
                statType: StatType.archerATK,
                statValue: 5
            }
        ]
    },
    {
        name: "Witch's Feathered Staff",
        category: Category.weapon,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.gatheringSpeed,
                statValue: 15
            },
            {
                statType: StatType.siegeDEF,
                statValue: 6
            },
            {
                statType: StatType.siegeMarchSpeed,
                statValue: 3
            }
        ]
    },
    {
        name: "Knight's Oathsworn Bow",
        category: Category.weapon,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.siegeATK,
                statValue: 13
            },
            {
                statType: StatType.siegeMarchSpeed,
                statValue: 2
            }
        ]
    },
    {
        name: "Heart of the Saint",
        category: Category.weapon,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.cavalryDEF,
                statValue: 13
            },
            {
                statType: StatType.archerHP,
                statValue: 6
            },
            {
                statType: StatType.infantryHP,
                statValue: 4
            }
        ]
    },
    {
        name: "Sakura Fubuki",
        category: Category.weapon,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.infantryATK,
                statValue: 13
            },
            {
                statType: StatType.cavalryHP,
                statValue: 6
            },
            {
                statType: StatType.archerATK,
                statValue: 4
            }
        ]
    },
    {
        name: "Golden Age",
        category: Category.weapon,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.archerDEF,
                statValue: 13
            },
            {
                statType: StatType.infantryDEF,
                statValue: 6
            },
            {
                statType: StatType.cavalryATK,
                statValue: 4
            }
        ]
    },
    {
        name: "Scepter of the Forest Guardian",
        category: Category.weapon,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.gatheringSpeed,
                statValue: 10
            },
            {
                statType: StatType.siegeDEF,
                statValue: 6
            },
            {
                statType: StatType.cavalryATK,
                statValue: 4
            }
        ]
    },
    {
        name: "Staff of the Lost",
        category: Category.weapon,
        image: "",
        goldRequired: 0,
        grade: Grade.elite,
        gradeOrder: 3,
        attributes: [
            {
                statType: StatType.archerDEF,
                statValue: 8
            },
            {
                statType: StatType.infantryDEF,
                statValue: 5
            },
            {
                statType: StatType.cavalryDEF,
                statValue: 3
            }
        ]
    },
    {
        name: "Gatekeepers Shield",
        category: Category.weapon,
        image: "",
        goldRequired: 0,
        grade: Grade.elite,
        gradeOrder: 3,
        attributes: [
            {
                statType: StatType.infantryHP,
                statValue: 8
            },
            {
                statType: StatType.cavalryHP,
                statValue: 5
            },
            {
                statType: StatType.expGain,
                statValue: 3
            }
        ]
    },
    {
        name: "Blazing Axe",
        category: Category.weapon,
        image: "",
        goldRequired: 0,
        grade: Grade.elite,
        gradeOrder: 3,
        attributes: [
            {
                statType: StatType.cavalryATK,
                statValue: 8
            },
            {
                statType: StatType.archerATK,
                statValue: 5
            },
            {
                statType: StatType.infantryATK,
                statValue: 3
            }
        ]
    },
    {
        name: "Blessed Blade",
        category: Category.weapon,
        image: "",
        goldRequired: 0,
        grade: Grade.advanced,
        gradeOrder: 2,
        attributes: [
            {
                statType: StatType.infantryHP,
                statValue: 6
            },
            {
                statType: StatType.archerATK,
                statValue: 4
            },
            {
                statType: StatType.dmgToBarbarians,
                statValue: 3
            }
        ]
    },
    {
        name: "Vanguard Halberd",
        category: Category.weapon,
        image: "",
        goldRequired: 0,
        grade: Grade.advanced,
        gradeOrder: 2,
        attributes: [
            {
                statType: StatType.cavalryDEF,
                statValue: 5
            },
            {
                statType: StatType.cavalryHP,
                statValue: 4
            }
        ]
    },
    {
        name: "Sharp Longsword",
        category: Category.weapon,
        image: "",
        goldRequired: 0,
        grade: Grade.normal,
        gradeOrder: 1,
        attributes: [
            {
                statType: StatType.cavalryDEF,
                statValue: 5
            },
            {
                statType: StatType.gatheringSpeed,
                statValue: 2
            }
        ]
    },

].map(e => ({
    ...e, image: `/assets/equipments/weapons/${slugify(e.name, { remove: /['"]/g, strict: true })}.webp`
}))

export const glovesEquipments = [
    {
        name: "Navar's Control",
        category: Category.gloves,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.cavalryHP,
                statValue: 8
            },
            {
                statType: StatType.infantryDEF,
                statValue: 5
            }
        ]
    },
    {
        name: "Sacred Grips",
        category: Category.gloves,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.infantryDEF,
                statValue: 8
            },
            {
                statType: StatType.archerATK,
                statValue: 5
            }
        ]
    },
    {
        name: "Ian's Choice",
        category: Category.gloves,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.archerATK,
                statValue: 8
            },
            {
                statType: StatType.expGain,
                statValue: 5
            }
        ]
    },
    {
        name: "Dragon's Breath Vambraces",
        category: Category.gloves,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.archerATK,
                statValue: 7.5
            },
            {
                statType: StatType.infantryATK,
                statValue: 3
            }
        ]
    },
    {
        name: "Vambraces of the Eternal Empire",
        category: Category.gloves,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.infantryDEF,
                statValue: 7.5
            },
            {
                statType: StatType.cavalryATK,
                statValue: 3
            }
        ]
    },
    {
        name: "Gauntlets of the Glorious Goddess",
        category: Category.gloves,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.troopDEF,
                statValue: 6
            },
            {
                statType: StatType.siegeMarchSpeed,
                statValue: 2
            }
        ]
    },
    {
        name: "Armband of the Hellish Wasteland",
        category: Category.gloves,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.cavalryDEF,
                statValue: 7.5
            },
            {
                statType: StatType.archerHP,
                statValue: 3
            }
        ]
    },
    {
        name: "Wailing Wolf's Gauntlets",
        category: Category.gloves,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.siegeDEF,
                statValue: 10
            },
            {
                statType: StatType.siegeMarchSpeed,
                statValue: 3
            }
        ]
    },
    {
        name: "Witch's Crimson Bracers",
        category: Category.gloves,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.gatheringSpeed,
                statValue: 8
            },
            {
                statType: StatType.siegeHP,
                statValue: 3
            },
            {
                statType: StatType.siegeMarchSpeed,
                statValue: 2
            }
        ]
    },
    {
        name: "Iset's Sufferance",
        category: Category.gloves,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.cavalryATK,
                statValue: 3
            },
            {
                statType: StatType.cavalryHP,
                statValue: 3
            }
        ]
    },
    {
        name: "Seth's Brutality",
        category: Category.gloves,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.infantryDEF,
                statValue: 5.5
            },
            {
                statType: StatType.archerDEF,
                statValue: 2
            },
            {
                statType: StatType.dmgToBarbarians,
                statValue: 5
            }
        ]
    },
    {
        name: "Knight's Battleworn Gauntlets",
        category: Category.gloves,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.siegeDEF,
                statValue: 5.5
            },
            {
                statType: StatType.siegeMarchSpeed,
                statValue: 2
            }
        ]
    },
    {
        name: "Claws of the Forest Guardian",
        category: Category.gloves,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.gatheringSpeed,
                statValue: 6
            },
            {
                statType: StatType.siegeDEF,
                statValue: 2
            },
            {
                statType: StatType.siegeATK,
                statValue: 2
            }
        ]
    },
    {
        name: "Revival Gauntlets",
        category: Category.gloves,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.archerATK,
                statValue: 4.5
            },
            {
                statType: StatType.infantryATK,
                statValue: 3
            },
            {
                statType: StatType.cavalryATK,
                statValue: 3
            }
        ]
    },
    {
        name: "Calvin's Hand",
        category: Category.gloves,
        image: "",
        goldRequired: 0,
        grade: Grade.elite,
        gradeOrder: 3,
        attributes: [
            {
                statType: StatType.infantryATK,
                statValue: 4
            },
            {
                statType: StatType.infantryHP,
                statValue: 1
            },
            {
                statType: StatType.archerATK,
                statValue: 1
            }
        ]
    },
    {
        name: "Saint's Song",
        category: Category.gloves,
        image: "",
        goldRequired: 0,
        grade: Grade.elite,
        gradeOrder: 3,
        attributes: [
            {
                statType: StatType.archerATK,
                statValue: 4
            },
            {
                statType: StatType.cavalryATK,
                statValue: 2
            },
            {
                statType: StatType.expGain,
                statValue: 3
            }
        ]
    },
    {
        name: "Windswept Bracers",
        category: Category.gloves,
        image: "",
        goldRequired: 0,
        grade: Grade.elite,
        gradeOrder: 3,
        attributes: [
            {
                statType: StatType.cavalryHP,
                statValue: 2.5
            },
            {
                statType: StatType.infantryHP,
                statValue: 2.5
            },
            {
                statType: StatType.allMarchSpeed,
                statValue: 3
            }
        ]
    },
    {
        name: "Leather Gloves",
        category: Category.gloves,
        image: "",
        goldRequired: 0,
        grade: Grade.advanced,
        gradeOrder: 2,
        attributes: [
            {
                statType: StatType.archerHP,
                statValue: 2.5
            },
            {
                statType: StatType.infantryDEF,
                statValue: 1
            }
        ]
    },
    {
        name: "Bronze Bracers",
        category: Category.gloves,
        image: "",
        goldRequired: 0,
        grade: Grade.advanced,
        gradeOrder: 2,
        attributes: [
            {
                statType: StatType.cavalryDEF,
                statValue: 2.5
            },
            {
                statType: StatType.infantryHP,
                statValue: 1
            },
            {
                statType: StatType.dmgToBarbarians,
                statValue: 3
            }
        ]
    },
    {
        name: "Cloth Gloves",
        category: Category.gloves,
        image: "",
        goldRequired: 0,
        grade: Grade.normal,
        gradeOrder: 1,
        attributes: [
            {
                statType: StatType.infantryDEF,
                statValue: 2
            }
        ]
    },
].map(e => ({
    ...e, image: `/assets/equipments/gloves/${slugify(e.name, { remove: /['"]/g, strict: true })}.webp`
}))

export const legsEquipment = [
    {
        name: "Tassets of the War God",
        category: Category.legs,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.archerATK,
                statValue: 12
            },
            {
                statType: StatType.cavalryATK,
                statValue: 5
            },
            {
                statType: StatType.infantryATK,
                statValue: 5
            }
        ]
    },
    {
        name: "Eternal Night",
        category: Category.legs,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.infantryDEF,
                statValue: 12
            },
            {
                statType: StatType.archerDEF,
                statValue: 5
            },
            {
                statType: StatType.cavalryDEF,
                statValue: 5
            }
        ]
    },
    {
        name: "Ash of the Dawn",
        category: Category.legs,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.cavalryHP,
                statValue: 12
            },
            {
                statType: StatType.infantryHP,
                statValue: 5
            },
            {
                statType: StatType.expGain,
                statValue: 5
            }
        ]
    },
    {
        name: "Dragon's Breath Tassets",
        category: Category.legs,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.archerATK,
                statValue: 11
            },
            {
                statType: StatType.cavalryATK,
                statValue: 5
            }
        ]
    },
    {
        name: "Greaves of the Eternal Empire",
        category: Category.legs,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.infantryATK,
                statValue: 11
            },
            {
                statType: StatType.archerDEF,
                statValue: 5
            }
        ]
    },
    {
        name: "Chausses of the Glorious Goddess",
        category: Category.legs,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.troopHP,
                statValue: 8
            },
            {
                statType: StatType.archerMarchSpeed,
                statValue: 2
            }
        ]
    },
    {
        name: "Tassets of the Hellish Wasteland",
        category: Category.legs,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.cavalryATK,
                statValue: 11
            },
            {
                statType: StatType.infantryDEF,
                statValue: 5
            }
        ]
    },
    {
        name: "Lone Wolf's Leather Tassets",
        category: Category.legs,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.siegeHP,
                statValue: 14.5
            },
            {
                statType: StatType.siegeMarchSpeed,
                statValue: 4
            }
        ]
    },
    {
        name: "Witch's Ornamented Pants",
        category: Category.legs,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.gatheringSpeed,
                statValue: 12
            },
            {
                statType: StatType.siegeHP,
                statValue: 4
            },
            {
                statType: StatType.siegeMarchSpeed,
                statValue: 2
            }
        ]
    },
    {
        name: "Karuak's Humility",
        category: Category.legs,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.infantryHP,
                statValue: 8
            },
            {
                statType: StatType.cavalryATK,
                statValue: 5
            }
        ]
    },
    {
        name: "Gladiator",
        category: Category.legs,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.cavalryHP,
                statValue: 8
            },
            {
                statType: StatType.archerDEF,
                statValue: 4
            },
            {
                statType: StatType.dmgToBarbarians,
                statValue: 5
            }
        ]
    },
    {
        name: "Fanatic's Tassets",
        category: Category.legs,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.archerDEF,
                statValue: 8
            },
            {
                statType: StatType.cavalryDEF,
                statValue: 5
            }
        ]
    },
    {
        name: "Knight's Triumphant Tassets",
        category: Category.legs,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.siegeDEF,
                statValue: 8
            },
            {
                statType: StatType.dmgToBarbarians,
                statValue: 5
            }
        ]
    },
    {
        name: "Revival Greaves",
        category: Category.legs,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.archerDEF,
                statValue: 7.5
            },
            {
                statType: StatType.cavalryATK,
                statValue: 5
            }
        ]
    },
    {
        name: "Greaves of the Exile",
        category: Category.legs,
        image: "",
        goldRequired: 0,
        grade: Grade.elite,
        gradeOrder: 3,
        attributes: [
            {
                statType: StatType.archerDEF,
                statValue: 6
            },
            {
                statType: StatType.infantryDEF,
                statValue: 3
            },
            {
                statType: StatType.expGain,
                statValue: 3
            }
        ]
    },
    {
        name: "Sentry Breeches",
        category: Category.legs,
        image: "",
        goldRequired: 0,
        grade: Grade.elite,
        gradeOrder: 3,
        attributes: [
            {
                statType: StatType.infantryATK,
                statValue: 6
            },
            {
                statType: StatType.archerATK,
                statValue: 3
            },
            {
                statType: StatType.cavalryDEF,
                statValue: 1
            }
        ]
    },
    {
        name: "Harvester Breeches",
        category: Category.legs,
        image: "",
        goldRequired: 0,
        grade: Grade.elite,
        gradeOrder: 3,
        attributes: [
            {
                statType: StatType.gatheringSpeed,
                statValue: 5
            },
            {
                statType: StatType.siegeATK,
                statValue: 3
            },
            {
                statType: StatType.siegeDEF,
                statValue: 3
            }
        ]
    },
    {
        name: "Ranger Trousers",
        category: Category.legs,
        image: "",
        goldRequired: 0,
        grade: Grade.advanced,
        gradeOrder: 2,
        attributes: [
            {
                statType: StatType.infantryATK,
                statValue: 4
            },
            {
                statType: StatType.archerDEF,
                statValue: 2
            },
            {
                statType: StatType.dmgToBarbarians,
                statValue: 3
            }
        ]
    },
    {
        name: "Vanguard Greaves",
        category: Category.legs,
        image: "",
        goldRequired: 0,
        grade: Grade.advanced,
        gradeOrder: 2,
        attributes: [
            {
                statType: StatType.cavalryATK,
                statValue: 4
            },
            {
                statType: StatType.cavalryHP,
                statValue: 1
            }
        ]
    },
    {
        name: "Coarse Breeches",
        category: Category.legs,
        image: "",
        goldRequired: 0,
        grade: Grade.normal,
        gradeOrder: 1,
        attributes: [
            {
                statType: StatType.cavalryATK,
                statValue: 2
            },
            {
                statType: StatType.gatheringSpeed,
                statValue: 1
            }
        ]
    },
].map(e => ({
    ...e, image: `/assets/equipments/legs/${slugify(e.name, { remove: /['"]/g, strict: true })}.webp`
}))

export const accessoriesEquipments = [
    {
        name: "Concealed Dagger",
        category: Category.accessories,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attribute: "30% chance to reduce target troop's health by 5%, can stack to 3 times for 3 seconds each."
    },
    {
        name: "Pendant of Eternal Night",
        category: Category.accessories,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.skillDmg,
                statValue: 5
            }
        ]
    },
    {
        name: "Greatest Glory",
        category: Category.accessories,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.normalAtkDmg,
                statValue: 5
            }
        ]
    },
    {
        name: "Horn of Fury",
        category: Category.accessories,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attribute: "Basic Attack have a 30% chance to gain 50 Rage"
    },
    {
        name: "Immolating Plume",
        category: Category.accessories,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attribute: "Ranged attacks/smite has 50% chance to increase damage by 30%. Cooldown: 5 seconds"
    },
    {
        name: "Scola's Lucky Coin",
        category: Category.accessories,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attribute: "10% chance to get shield (Damage Factor 500) for 2 seconds. Trigger once every 5 seconds."
    },
    {
        name: "Mora's Web",
        category: Category.accessories,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attribute: "Has 30% chance to reduce target's defence by 4% and march speed of cavalry units by 8%. 3 stacks for 3 seconds each."
    },
    {
        name: "Ring of Doom",
        category: Category.accessories,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attribute: "Basic Attack has 10% chance to gain 50% bonus damage for 2 seconds. Can trigger once every 5 seconds."
    },
    {
        name: "Seth's Call",
        category: Category.accessories,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attribute: "Has 10% chance to get +10% Attack to itself and 2 nearby allied troops for 3 seconds"
    },
    {
        name: "Vengeance",
        category: Category.accessories,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.counterAtkDmg,
                statValue: 8
            }
        ]
    },
    {
        name: "Karuak's War Drums",
        category: Category.accessories,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attribute: "Has 10% chance to get 50 rage to itself and 2 nearby troops for 3 seconds"
    },
    {
        name: "Saddle of a Thousand Blessings",
        category: Category.accessories,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attribute: "Deals 3% more smite damage. Has 50% chance to heal for 5%"
    },
    {
        name: "Hero's Hilt",
        category: Category.accessories,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attribute: "50% chance to gain 3% bonus to combo attack for 5 seconds. Stacks up to 5 times."
    },
    {
        name: "The Bard's Pendant",
        category: Category.accessories,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.rssGatherBonus,
                statValue: 5
            }
        ]
    },
    {
        name: "Crimson Ring",
        category: Category.accessories,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.expGain,
                statValue: 15
            }
        ]
    },
    {
        name: "Delane's Amulet",
        category: Category.accessories,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.counterAtkDmgTaken,
                statValue: -5
            }
        ]
    },
    {
        name: "Peter's Sickle",
        category: Category.accessories,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.gatheringSpeed,
                statValue: 10
            }
        ]
    },
    {
        name: "Wind Scars",
        category: Category.accessories,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.infantryMarchSpeed,
                statValue: 8
            }
        ]
    },
    {
        name: "Silent Trial",
        category: Category.accessories,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attribute: "Basic Attack can decrease the target's rage by 10 points"
    },
    {
        name: "Ancient Strategems",
        category: Category.accessories,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.unitCapacity,
                statValue: 3
            }
        ]
    },
    {
        name: "Call of the Loyal",
        category: Category.accessories,
        image: "",
        goldRequired: 0,
        grade: Grade.elite,
        gradeOrder: 3,
        attributes: [
            {
                statType: StatType.allMarchSpeed,
                statValue: 5
            }
        ]
    },
    {
        name: "Lohar's Bone Necklace",
        category: Category.accessories,
        image: "",
        goldRequired: 0,
        grade: Grade.elite,
        gradeOrder: 3,
        attributes: [
            {
                statType: StatType.expGain,
                statValue: 10
            }
        ]
    },
    {
        name: "Savage Totem",
        category: Category.accessories,
        image: "",
        goldRequired: 0,
        grade: Grade.elite,
        gradeOrder: 3,
        attributes: [
            {
                statType: StatType.dmgToBarbarians,
                statValue: 10
            }
        ]
    }
].map(e => ({
    ...e, image: `/assets/equipments/accessories/${slugify(e.name, { remove: /['"]/g, strict: true })}.webp`
}))

export const bootsEquipments = [
    {
        name: "Mountain Crushers",
        category: Category.boots,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.cavalryATK,
                statValue: 8
            },
            {
                statType: StatType.archerATK,
                statValue: 5
            }
        ]
    },
    {
        name: "Shio's Return",
        category: Category.boots,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.infantryDEF,
                statValue: 8
            },
            {
                statType: StatType.archerHP,
                statValue: 5
            }
        ]
    },
    {
        name: "Commander's Boots",
        category: Category.boots,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.archerATK,
                statValue: 8
            },
            {
                statType: StatType.expGain,
                statValue: 5
            }
        ]
    },
    {
        name: "Dragon's Breath Boots",
        category: Category.boots,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.archerDEF,
                statValue: 7.5
            },
            {
                statType: StatType.infantryDEF,
                statValue: 3
            }
        ]
    },
    {
        name: "Sturdy Boots of the Eternal Empire",
        category: Category.boots,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.infantryDEF,
                statValue: 7.5
            },
            {
                statType: StatType.cavalryDEF,
                statValue: 3
            }
        ]
    },
    {
        name: "Greaves of the Glorious Goddess",
        category: Category.boots,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.troopHP,
                statValue: 6
            },
            {
                statType: StatType.siegeMarchSpeed,
                statValue: 2
            }
        ]
    },
    {
        name: "Boots of the Hellish Wasteland",
        category: Category.boots,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.cavalryHP,
                statValue: 7.5
            },
            {
                statType: StatType.archerATK,
                statValue: 3
            }
        ]
    },
    {
        name: "Roaring Wolf's Claws",
        category: Category.boots,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.siegeDEF,
                statValue: 10
            },
            {
                statType: StatType.siegeMarchSpeed,
                statValue: 3
            }
        ]
    },
    {
        name: "Witch's Mire-Waders",
        category: Category.boots,
        image: "",
        goldRequired: 0,
        grade: Grade.legendary,
        gradeOrder: 5,
        attributes: [
            {
                statType: StatType.gatheringSpeed,
                statValue: 8
            },
            {
                statType: StatType.siegeATK,
                statValue: 3
            },
            {
                statType: StatType.siegeMarchSpeed,
                statValue: 2
            }
        ]
    },
    {
        name: "Cloud Racers",
        category: Category.boots,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.cavalryATK,
                statValue: 5.5
            },
            {
                statType: StatType.archerHP,
                statValue: 2
            },
            {
                statType: StatType.gatheringSpeed,
                statValue: 6
            }
        ]
    },
    {
        name: "Frost Treads",
        category: Category.boots,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.infantryDEF,
                statValue: 5.5
            },
            {
                statType: StatType.dmgToBarbarians,
                statValue: 5
            }
        ]
    },
    {
        name: "Flame Treads",
        category: Category.boots,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.archerHP,
                statValue: 5.5
            },
            {
                statType: StatType.cavalryATK,
                statValue: 3
            }
        ]
    },
    {
        name: "Knight's Winter Sabatons",
        category: Category.boots,
        image: "",
        goldRequired: 0,
        grade: Grade.epic,
        gradeOrder: 4,
        attributes: [
            {
                statType: StatType.siegeHP,
                statValue: 5.5
            },
            {
                statType: StatType.dmgToBarbarians,
                statValue: 5
            }
        ]
    },
    {
        name: "The Scarlet Hounds",
        category: Category.boots,
        image: "",
        goldRequired: 0,
        grade: Grade.elite,
        gradeOrder: 3,
        attributes: [
            {
                statType: StatType.infantryHP,
                statValue: 4
            },
            {
                statType: StatType.expGain,
                statValue: 3
            }
        ]
    },
    {
        name: "Harvester Boots",
        category: Category.boots,
        image: "",
        goldRequired: 0,
        grade: Grade.elite,
        gradeOrder: 3,
        attributes: [
            {
                statType: StatType.gatheringSpeed,
                statValue: 5
            },
            {
                statType: StatType.siegeDEF,
                statValue: 2
            },
            {
                statType: StatType.siegeHP,
                statValue: 2
            }
        ]
    },
    {
        name: "Windswept Boots",
        category: Category.boots,
        image: "",
        goldRequired: 0,
        grade: Grade.elite,
        gradeOrder: 3,
        attributes: [
            {
                statType: StatType.cavalryHP,
                statValue: 2.5
            },
            {
                statType: StatType.infantryDEF,
                statValue: 2.5
            },
            {
                statType: StatType.allMarchSpeed,
                statValue: 3
            }
        ]
    },
    {
        name: "Edged Boots",
        category: Category.boots,
        image: "",
        goldRequired: 0,
        grade: Grade.advanced,
        gradeOrder: 2,
        attributes: [
            {
                statType: StatType.archerATK,
                statValue: 2.5
            },
            {
                statType: StatType.cavalryATK,
                statValue: 1
            },
            {
                statType: StatType.dmgToBarbarians,
                statValue: 3
            }
        ]
    },
    {
        name: "Boots of Reverence",
        category: Category.boots,
        image: "",
        goldRequired: 0,
        grade: Grade.advanced,
        gradeOrder: 2,
        attributes: [
            {
                statType: StatType.infantryATK,
                statValue: 2.5
            },
            {
                statType: StatType.archerDEF,
                statValue: 1
            }
        ]
    },
    {
        name: "Sturdy Boots",
        category: Category.boots,
        image: "",
        goldRequired: 0,
        grade: Grade.normal,
        gradeOrder: 1,
        attributes: [
            {
                statType: StatType.archerDEF,
                statValue: 2
            },
            {
                statType: StatType.gatheringSpeed,
                statValue: 1
            }
        ]
    },
].map(e => ({
    ...e, image: `/assets/equipments/boots/${slugify(e.name, { remove: /['"]/g, strict: true })}.webp`
}))

let i = 0

export const equipments: Equipment[] = [
    ...helmetEquipments,
    ...chestEquipments,
    ...weaponEquipments,
    ...glovesEquipments,
    ...legsEquipment,
    ...accessoriesEquipments,
    ...bootsEquipments
].map(e => ({
    ...e, id: i++
}))