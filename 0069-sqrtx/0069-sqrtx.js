/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l = 0, r = x, result = -1
    while (l <= r) {
        const mid = parseInt((l + r) /2)
        const sq = mid * mid
        if (sq === x) {
            result = mid
            break
        }
        else if (sq < x) {
            result = mid
            l = mid + 1
        }
        else {
            r = mid - 1
        }
    }
    return result
};
