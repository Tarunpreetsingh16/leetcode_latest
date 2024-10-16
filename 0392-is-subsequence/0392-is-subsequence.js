/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s === t || s.length === 0) return true;
    if (s.length > t.length) return false;

    let sPtr = 0, tPtr = 0;
    let result = false;

    while (sPtr < s.length && tPtr < t.length) {
        if (s[sPtr] === t[tPtr]) {
            sPtr++;
        }
        if (sPtr == s.length) {
            result = true;
        }
        tPtr++;
    }
    return result;
};