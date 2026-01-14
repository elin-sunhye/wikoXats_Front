export interface historyItem {
    text: string
}

export interface historyGroup {
    label: string,
    history: historyItem[]
}