/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0 || x === 1) return x;
    let i = 0;

    while (i <= parseInt(x/2)) {
        const iSquare = i * i;
        const nextNum = i + 1;

        if (iSquare === x || nextNum * nextNum > x) { 
            return i;
        }
        i++;
    }
};