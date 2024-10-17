/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = new Map();
    magazine.split('').forEach(char => {
        if (!map.has(char)) {
            map.set(char, 0);
        }
        const currentCount = map.get(char)
        map.set(char, currentCount + 1)
    })

    let i = 0;
    while (i < ransomNote.length) {
        const char = ransomNote[i];

        if (map.has(char) && map.get(char) > 0) {
            const currentCount = map.get(char)
            map.set(char, currentCount - 1);
            i++;
            continue;
        }
        return false;
    }
    return true;
};