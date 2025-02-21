/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let prevNum = nums[0], i = 1, count = 1

    while (i < nums.length) {
        const currNum = nums[i]
        if (prevNum === currNum) {
            count++
        }
        else {
            count--
        }

        if (count === 0) {
            prevNum = currNum
            count = 1
        }
        
        i++
    }

    return prevNum
};