/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const result = [];

    let carry = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        const sum = digits[i] + carry;
        carry = Math.floor(sum / 10);
        result.push(sum % 10);
    }
    carry === 1 ? result.push(carry) : null;
    return result.reverse();
};