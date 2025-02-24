/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false

    const map = new Map()
    magazine.split('').forEach(char => {
        let count = 1
        if (map.has(char)) {
            count = map.get(char) + 1
        }
        map.set(char, count)
    })

    let found = false
    for (let i = 0; i < ransomNote.length; i++) {
        const char = ransomNote[i]
        if (map.has(char)) {
            const count = map.get(char)
            map.set(char, count - 1)
            if (count - 1 === 0) {
                map.delete(char)
            }
            if (i === ransomNote.length - 1) {
                found = true
            }
        }
        else {
            break
        }
    }
    return found
};