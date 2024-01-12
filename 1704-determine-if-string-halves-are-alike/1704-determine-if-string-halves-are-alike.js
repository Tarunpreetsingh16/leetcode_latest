/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    s = s.toLowerCase();
    let leftVowels = 0, rightVowels = 0;
    const set = new Set(['a', 'e', 'i', 'o', 'u']);
    let l = 0, r = s.length - 1;
    while (l < r) {
        set.has(s.charAt(l)) && leftVowels++;
        set.has(s.charAt(r)) && rightVowels++;
        l++; r--;
    }
    return leftVowels === rightVowels;
};