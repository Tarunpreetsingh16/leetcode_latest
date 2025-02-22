/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let j = s.length
    while (j >= 0 && s[--j] === ' ');
    const r = j
    while (j >= 0 && s[--j] != ' ');
    console.log({r, j})
    return r - j
};