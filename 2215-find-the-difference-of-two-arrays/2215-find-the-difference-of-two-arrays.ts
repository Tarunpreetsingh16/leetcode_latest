function findDifference(nums1: number[], nums2: number[]): number[][] {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)

    const resultSet1: Set<number> = new Set()
    const resultSet2: Set<number> = new Set()

    nums1.forEach(num => {
        if (!set2.has(num)) resultSet1.add(num)
    })
    nums2.forEach(num => {
        if (!set1.has(num)) resultSet2.add(num)
    })
    const result: number[][] = Array.from({length: 2}, () => [])
    result[0].push(...Array.from(resultSet1))
    result[1].push(...Array.from(resultSet2))
    return result
};