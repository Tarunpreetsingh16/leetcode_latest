/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleanString = s.replace(/[^a-z0-9]/ig, "").toLowerCase()
    if (cleanString.trim().length === 0) return true
    let l = 0, r = cleanString.length - 1
    while (l <= r && cleanString[l] === cleanString[r]) {
        l++, r--
    }
    return r < l
};