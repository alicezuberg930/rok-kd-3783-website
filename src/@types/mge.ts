import { CustomFile } from "@/components/upload";

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
    profileImage: CustomFile | string | null;
    unitTypeSpecialty: string[];
    combatTypeSpecialty: string[];
    commanderName: string;
    vipLevel: number;
    equipmentImage: CustomFile | string | null;
    resourcesImage: CustomFile | string | null;
    speedupsImage: CustomFile | string | null;
    otherInfo?: string
}