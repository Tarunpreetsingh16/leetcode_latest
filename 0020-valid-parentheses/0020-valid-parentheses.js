/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 != 0) return false;

    const stack = [];

    const openingBrackets = new Set(['(', '{','[']);
    const closingBrackets = new Set([')', '}',']']);
    const map = new Map([[')', '('], ['}', '{'], [']', '[']])

    for (let i = 0; i < s.length; i++) {
        const bracket = s[i];
        if (openingBrackets.has(bracket)) {
            stack.push(bracket);
        }
        else {
            const lastBracket = stack.pop();
            if (map.get(bracket) != lastBracket) {
                return false;
            }
        }
    }
    return stack.length === 0
};