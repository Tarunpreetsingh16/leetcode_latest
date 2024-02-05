function uniqueOccurrences(arr: number[]): boolean {
    let result = false

    const map: Map<number, number> = new Map()

    arr.forEach(num => {
        if (!map.has(num)) map.set(num, 0)
        map.set(num, map.get(num) + 1)
    })

    const set: Set<number> = new Set()

    for (const [_, value] of map) {
        set.add(value)
    }
    result = set.size === map.size

    return result
};