/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const map = new Map();

    nums.forEach(num => {
        if (!map.has(num)) {
            map.set(num, 0);
        }
        map.set(num, map.get(num) + 1);
    });

    let minOperations = 0;

    for (let [_, value] of map.entries()) {
        if (value === 1) return -1;
        while (value > 0) {
           value = value - (value - 3 > 1 || value - 3 === 0 ? 3 : 2);
           minOperations++;
        }
    }
    return minOperations;
};