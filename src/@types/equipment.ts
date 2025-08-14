import { Category, Grade, StatType } from "@/_mock/equipments/enum"

export type Equipment = {
    name: string
    category: Category
    image: string
    grade: Grade
    gradeOrder: number
    attributes?: { statType: StatType, statValue: number }[]
    goldRequired: number
    attribute?: string

}