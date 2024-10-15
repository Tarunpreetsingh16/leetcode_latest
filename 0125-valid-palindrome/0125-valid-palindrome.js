/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleanedString = s.replace(/[^a-z0-9]/ig, "").toLowerCase();
    if (cleanedString.length === 0) return true;

    let left = 0; right = cleanedString.length - 1;
    while (left < right) {
        if (cleanedString[left] != cleanedString[right]) {
            return false;
        }
        left++; right--;
    }
    return true;
};