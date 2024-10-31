/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    let finalNumber = 0;
    let xCopy = x;
    
    while (xCopy > 0) {
        const remainder = xCopy % 10;
        finalNumber = (finalNumber * 10) + remainder;
        xCopy = Math.floor(xCopy / 10);
    }

    return x === finalNumber;    
};