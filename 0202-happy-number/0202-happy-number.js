/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const set = new Set();
    
    const result = (n) => {
        if (set.has(n)) {
            return false;
        }
        if (n === 1) {
            return true;
        }
        set.add(n);
        const nextNum = getNextNumber(n);
        return result(nextNum);
    }

    return result(n);
};

const getNextNumber = (num) => {
    let nextNum = 0;
    while (num > 0) {
        const remainder = num % 10;
        num = Math.floor(num / 10);
        nextNum += Math.pow(remainder, 2); 
    }
    return nextNum;
}