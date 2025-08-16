enum AcademySpeed {
    lvl1 = 0.5,
    lvl2 = 1,
    lvl3 = 1.5,
    lvl4 = 2,
    lvl5 = 2.5,
    lvl6 = 3,
    lvl7 = 3.5,
    lvl8 = 4,
    lvl9 = 4.5,
    lvl10 = 5,
    lvl11 = 5.5,
    lvl12 = 6,
    lvl13 = 6.5,
    lvl14 = 7,
    lvl15 = 7.5,
    lvl16 = 8,
    lvl17 = 8.5,
    lvl18 = 9,
    lvl19 = 9.5,
    lvl20 = 10,
    lvl21 = 12,
    lvl22 = 14,
    lvl23 = 16,
    lvl24 = 18,
    lvl25 = 25,
}

enum Engineering {
    lvl1 = 1,
    lvl2 = 3,
    lvl3 = 6,
    lvl4 = 10,
    lvl5 = 14,
    lvl6 = 18,
    lvl7 = 22,
    lvl8 = 26,
    lvl9 = 30,
    lvl10 = 35
}

enum Mathematics {
    lvl1 = 1,
    lvl2 = 2,
    lvl3 = 3,
    lvl4 = 4,
    lvl5 = 5,
    lvl6 = 6,
    lvl7 = 8,
    lvl8 = 10,
    lvl9 = 12,
    lvl10 = 15
}

type CommonBuff = {
    rune: number
    allianceTech: number
    holySite: number
    kingdomBuff: boolean // 10% if true
    vip: number
    allianceHelp: number
}

type ResearchBuff = CommonBuff & {
    scientist: boolean // 5% if true
    koreanCivilization: boolean // 3% if true
    mathematicsLevel: Engineering
    academy: AcademySpeed
}

type BuildingBuff = CommonBuff & {
    architect: boolean // 10% if true
    chinaCivilization: boolean // 5% if true
    engineeringLevel: Mathematics
}

// type TrainingBufff = 