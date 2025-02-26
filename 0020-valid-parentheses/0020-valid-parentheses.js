/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = new Map()
    map.set(')', '(')
    map.set('}', '{')
    map.set(']', '[')

    const stack = []
    for (let i = 0; i < s.length; i++) {
        const b = s[i]
        if (b === '(' || b === '{' || b === '[') {
            stack.push(b)
        }
        else {
            if (stack.length <= 0 || stack.pop() != map.get(b)) {
                return false
            }
        }
    }
    return stack.length === 0
};