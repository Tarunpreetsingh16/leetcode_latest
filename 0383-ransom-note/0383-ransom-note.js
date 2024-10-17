/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magazineLettersMap = {}
    magazine.split("").forEach(letter => {
        magazineLettersMap[letter] = letter in magazineLettersMap ? magazineLettersMap[letter] + 1 : 1
    })

    console.log(magazineLettersMap)

    const cannotCreateRansomNote = ransomNote.split("").some(letter => {
        if (letter in magazineLettersMap && magazineLettersMap[letter] > 0) {
            magazineLettersMap[letter] = magazineLettersMap[letter] - 1
        } else {
            return true
        }
    })

    return !cannotCreateRansomNote
};
