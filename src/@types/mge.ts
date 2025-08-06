export enum MGESpecialUnitType {
    infantry = 'infantry',
    cavalry = 'cavalry',
    archer = 'archer',
}

export enum MGESpecialCombatType {
    rally = 'rally',
    garrison = 'garrison',
    openfield = 'openfield',
}

export type IMGEApplication = {
    governorId: number;
    governorName: string;
    // profileImage: string;
    unitTypeSpecialty: string[];
    combatTypeSpecialty: string[];
    commanderName: string;
    vipLevel: number;
    // equipmentImage: string;
    // resourcesImage: string;
    // speedupsImage: string;
    otherInfo?: string
}