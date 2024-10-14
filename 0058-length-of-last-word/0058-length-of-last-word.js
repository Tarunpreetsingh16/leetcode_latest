/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let rightIdx = s.length - 1;
    let leftIdx = 0;
    let i = s.length - 1;

    while (i > -1 && s[i] === " ") {
        rightIdx = --i;
    }

    while (i > - 1 && s[i] != " ") {
        leftIdx = --i;
    }
    console.log({rightIdx, leftIdx})
    return rightIdx - leftIdx;
};