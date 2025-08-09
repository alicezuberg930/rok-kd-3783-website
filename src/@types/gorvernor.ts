export type IGorvernor = {
    governorName: string
    governorID: number
    power: number
    killPoints: number
    deads: number
    tier1Kills: number
    tier2Kills: number
    tier3Kills: number
    tier4Kills: number
    tier5Kills: number
    rssAssistance: number
    allianceHelps: number
    allianceTag: string
    KvKKillsHigh: number | string
    KvKDeadsHigh: number | string
    KvKSeverelyWoundsHigh: number | string
    scanDate?: string // only exist in details
}