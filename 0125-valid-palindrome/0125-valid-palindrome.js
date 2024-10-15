/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleanedString = s.replace(/[^a-z0-9]/ig, "").toLowerCase()

    var left = 0
    var right = cleanedString.length - 1

    while(left < right) {
        if (cleanedString[left] != cleanedString[right]) {
            return false
        }
        left++
        right--
    }

    return true
};
