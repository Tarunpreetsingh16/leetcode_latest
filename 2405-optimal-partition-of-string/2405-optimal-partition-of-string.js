/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    const set = new Set();
    let result = 1;

    for (let i = 0; i < s.length; i++) {
        if (set.has(s.charAt(i))) {
            result++;
            set.clear();
        }
        set.add(s.charAt(i));
    }
    return result;
};