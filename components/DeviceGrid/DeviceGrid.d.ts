export interface GridInfo {
    id: string,
    product: {
        name: string,
    },
    line: {
        name: string
    },
    icon: {
        id: string,
        resolutions: [number, number][]

    }
}