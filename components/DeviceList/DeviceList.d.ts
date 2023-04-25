export interface ListInfo {
    id: string,
    product: {
        name: string,
    },
    line: {
        id: string,
        name: string
    },
    icon: {
        id: string,
        resolutions: [number, number][]
    },
    unifi: {
        network: {
            numberOfPorts: number,
            radios: {
                na: {
                    maxPower: number
                    maxSpeedMegabitsPerSecond: number
                },
            }
        }
    },
    maxPower: number,
    shortnames: [
        string
    ],
    index: number,
}