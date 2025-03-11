/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1

    for (let i = digits.length - 1; i >= 0; i--) {
        let newNum = digits[i] + carry
        carry = parseInt(newNum / 10)
        newNum = newNum % 10
        digits[i] = newNum
    }

    if (carry > 0) {
        digits.unshift(carry)
    }
    return digits
};