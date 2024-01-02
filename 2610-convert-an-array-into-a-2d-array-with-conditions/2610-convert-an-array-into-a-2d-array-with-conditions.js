/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    const map = new Map();

    nums.forEach((num) => {
        if (!map.has(num)) map.set(num, 1);
        else map.set(num, map.get(num) + 1);
    })

    const result = [];

    const loopThroughMap = (value, key, map) => {

        for (let i = 0; i < value; i++) {
            if (result.length - 1 < i) {
                result[i] = [];
            }
            result[i].push(key);
        }
        map.delete(key);
    };

    map.forEach(loopThroughMap);

    return result;
};